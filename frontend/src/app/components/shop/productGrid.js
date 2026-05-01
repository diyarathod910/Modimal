import ProductCard from "./productCard";
import { useState, useEffect } from "react";



export default function ProductGrid({ sizeOptions, filters, addToCart, wishlist,
    toggleWishlist,
    isInWishlist,}) {
    
    const [products, setProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        fetch("http://localhost:8080/products")
            .then((res) => res.json())
            .then((data) => {
                console.log("API DATA:", data);
                setProducts(data);
            })
            .catch((err) => console.log(err));
        
    }, []);
    // 👇 Load More handler
    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    // const filtered_products = products.filter(item =>
    //     item.sizes?.some(size =>
    //         sizeOptions.includes(size.toLowerCase())
    //     )
    // );
    // console.log(filtered_products);
    // ✅ STEP 1: Page-based filter (Shop / Plus Size)
    const pageFilteredProducts = products.filter(item =>
        item.sizes?.some(size =>
            sizeOptions.includes(size.toLowerCase())
        )
    );

    console.log(pageFilteredProducts);


    // ✅ STEP 2: User filters (checkbox)
    const finalProducts = pageFilteredProducts.filter((item) => {

        // SIZE
        if (filters.size.length > 0) {
            const match = item.sizes?.some(size =>
                filters.size.includes(size.toLowerCase())
            );
            if (!match) return false;
        }

        // COLOR
        if (filters.color.length > 0) {
            const match = item.colors?.some(color =>
                filters.color.includes(color.toLowerCase())
            );
            if (!match) return false;
        }

        // STOCK
        if (filters.inStock) {
            if (!item.inStock) return false;
        }

        // fabric
        if (filters.fabric.length > 0) {
            const match = filters.fabric.includes(item.fabric?.toLowerCase());
            if (!match) return false;
        }


        return true;
    });


    let sortedProducts = [...finalProducts];

    // 🔹 Price Low → High
    if (filters.sort === "low") {
        sortedProducts.sort((a, b) => a.price - b.price);
    }

    // 🔹 Price High → Low
    if (filters.sort === "high") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    // 🔹 Best Seller
    if (filters.sort === "best") {
        sortedProducts.sort((a, b) => {
            return (b.isBestSeller === true) - (a.isBestSeller === true);
        });
    }

    // 🔹 Featured
    if (filters.sort === "featured") {
        sortedProducts.sort((a, b) => {
            return (b.isFeatured === true) - (a.isFeatured === true);
        });
    }




    return (
        <div>
            {/* Products */}
            <div className="grid grid-cols-2 gap-6">
                {/* {filtered_products.slice(0, visibleCount).map((item) => (
                    <ProductCard key={item._id} item={item} />
                ))} */}
                {sortedProducts.slice(0, visibleCount).map((item) => (
                    <ProductCard key={item._id} item={item} addToCart={addToCart} wishlist={wishlist}
                        toggleWishlist={toggleWishlist}
                        isInWishlist={isInWishlist} />
                ))}
            </div>

            {/* Load More Button */}
            {visibleCount < sortedProducts.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="border px-6 py-2 hover:bg-black hover:text-white"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}
import ProductUI from "./productUI";

export default async function ProductDetail({ params }) {


    const { category, name } = await params; // ✅ FIX

    console.log(category, name);

    const res = await fetch(`http://localhost:8080/products/${category}/${name}`, {
        cache: "no-store"
    });
    const product = await res.json();

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <ProductUI product={product}></ProductUI>
        </>
    );
}
"use client";

import { useEffect, useState } from "react";
import {
    getCartAPI,
    addToCartAPI,
    updateCartAPI,
    removeCartAPI
} from "../utils/api";

// ... existing imports

const useCartLogic = () => {
    const [cart, setCart] = useState([]);

    // LOAD CART
    useEffect(() => {
        getCartAPI().then((res) => {
            console.log("cart",res.cart);
            
            setCart(res?.cart || []);
        });
    }, []);

    const addToCart = async (product) => {
        const res = await addToCartAPI({
            productId: product._id,
            size: product.size,
            color: product.color
        });
        if (res?.cart) setCart(res.cart); // Update state with response
    };

    const updateQty = async (item, type) => {
        const res = await updateCartAPI({
            productId: item.productId._id,
            size: item.size,
            color: item.color,
            type
        });
        if (res?.cart) setCart(res.cart); // Update state with response
    };

    const removeItem = async (item) => {
        const res = await removeCartAPI({
            productId: item.productId._id,
            size: item.size,
            color: item.color
        });
        if (res?.cart) setCart(res.cart); // Update state with response
    };

    const total = Array.isArray(cart)
        ? cart.reduce((acc, item) => {
            const price = item?.productId?.price || 0;
            const qty = item?.qty || 0;
            return acc + (price * qty);
        }, 0)
        : 0;

    // Inside useCartLogic.js
return {
    cart: cart || [],
    updateQty,   // Return the actual function, not () => {}
    removeItem,  // Return the actual function, not () => {}
    addToCart,   // Return the actual function, not () => {}
    total: total || 0
};
};

export default useCartLogic;

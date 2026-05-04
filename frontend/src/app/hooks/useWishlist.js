"use client";
import { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const getToken = () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("token");
};

export default function useWishlist() {
    const [wishlist, setWishlist] = useState([]);



    const fetchWishlist = async () => {
        const token = getToken();
        if (!token) return;

        const res = await fetch(`${BASE_URL}/wishlist`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await res.json();
        setWishlist(data.wishlist || []);
    };

    useEffect(() => {
        const token = getToken();

        console.log("TOKEN BEING SENT:", token);

        if (!token) return;

        fetchWishlist();
    }, []);


    const toggleWishlist = async (productId) => {
        const token = getToken();
        if (!token) return;

        await fetch(`${BASE_URL}/wishlist/toggle`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ productId })
        });

        fetchWishlist();
    };

    const isInWishlist = (id) => {
        return wishlist.some(item => item._id.toString() === id.toString());
    };

    return { wishlist, toggleWishlist, isInWishlist, setWishlist, fetchWishlist };
}
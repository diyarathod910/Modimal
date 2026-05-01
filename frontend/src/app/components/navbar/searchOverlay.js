"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchOverlay({ isOpen, onClose, query, setQuery }) {
    const router = useRouter();

    useEffect(() => {
        // prevent scroll
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        onClose();
        router.push(`/search?q=${query}`);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50">

            {/* 🔹 Overlay background */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-md"
                onClick={onClose}
            />

            {/* 🔹 Search box */}
            <div className="relative flex justify-center items-start pt-32">
                <form
                    onSubmit={handleSearch}
                    className="w-full mt-[3%]  bg-white rounded-xl shadow-2xl p-10 animate-slideDown"
                >
                    <input
                        autoFocus
                        type="text"
                        placeholder="Search for products..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full text-lg border-b outline-none pb-2"
                    />
                    
                </form>
            </div>
        </div>
    );
}
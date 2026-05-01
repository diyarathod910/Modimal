"use client";

import { useState } from "react";

export default function FilterItem({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border mb-4">

            {/* Header */}
            <div
                onClick={() => setOpen(!open)}
                className="bg-[#5A6D57] text-white px-4 py-3 flex justify-between items-center cursor-pointer"
            >
                <span>{title}</span>
                <span>{open ? "-" : "+"}</span>
            </div>

            {/* Content */}
            {open && (
                <div className="p-4 bg-white text-sm text-gray-700">
                    {children}
                </div>
            )}
        </div>
    );
}
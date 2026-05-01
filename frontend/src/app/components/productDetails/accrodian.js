"use client";

import { useState } from "react";

export default function Accordion({ title, children, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="border mb-4">

            {/* HEADER */}
            <div
                onClick={() => setOpen(!open)}
                className="flex justify-between items-center px-4 py-4 cursor-pointer bg-[#F0F2EF]"
            >
                <h3 className="font-semibold">{title}</h3>
                <span className="text-xl">{open ? "−" : "+"}</span>
            </div>

            {/* CONTENT */}
            {open && (
                <div className="px-4 py-4 bg-white text-[16px] text-gray-600">
                    {children}
                </div>
            )}
        </div>
    );
}
"use client";

import { fabricData } from "./fabricData";

export default function FabricInfo({ fabric }) {

    const data = fabricData[fabric?.toLowerCase()];

    if (!data) return <div>No fabric info available</div>;

    return (
        <div className="border p-6 bg-[#F0F2EF]">
            <h2 className="text-lg font-semibold mb-3 border-b-2 pb-3 border-[#ADADAD]">{data.title}</h2>

            <p className="text-sm text-gray-600 mb-4 ">
                {data.description}
            </p>

            <div className="flex gap-2">
                {data.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="bg-white px-3 py-1 text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
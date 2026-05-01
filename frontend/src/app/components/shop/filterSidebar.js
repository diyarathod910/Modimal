"use client";
import FilterItem from "./filterItem";

export default function FilterSidebar({ filters, setFilters }) {

    const handleChange = (type, value) => {
        setFilters((prev) => {
            if (type === "inStock") {
                return { ...prev, inStock: !prev.inStock };
            }

            const exists = prev[type].includes(value);

            return {
                ...prev,
                [type]: exists
                    ? prev[type].filter((v) => v !== value)
                    : [...prev[type], value]
            };
        });
    };
    const handleSort = (value) => {
        setFilters((prev) => ({
            ...prev,
            sort: value
        }));
    };

    const hasFilters =
        filters.size.length ||
        filters.color.length ||
        filters.fabric.length ||
        filters.inStock ||
        filters.sort;

    const removeFilter = (type, value) => {
        setFilters((prev) => {

            if (type === "inStock" || type === "sort") {
                return { ...prev, [type]: type === "sort" ? "" : false };
            }

            return {
                ...prev,
                [type]: prev[type].filter((v) => v !== value)
            };
        });
    };
    return (

        <div>
            <h2 className="text-lg font-semibold mb-6">Filters</h2>
            <div className="mb-4 flex flex-wrap gap-2">

                {/* SIZE */}
                {filters.size.map((item) => (
                    <div key={item} className="bg-gray-200 px-3 py-1 flex items-center gap-2">
                        {item.toUpperCase()}
                        <span
                            className="cursor-pointer"
                            onClick={() => removeFilter("size", item)}
                        >
                            ✕
                        </span>
                    </div>
                ))}

                {/* COLOR */}
                {filters.color.map((item) => (
                    <div key={item} className="bg-gray-200 px-3 py-1 flex items-center gap-2">
                        {item}
                        <span
                            className="cursor-pointer"
                            onClick={() => removeFilter("color", item)}
                        >
                            ✕
                        </span>
                    </div>
                ))}

                {/* FABRIC */}
                {filters.fabric.map((item) => (
                    <div key={item} className="bg-gray-200 px-3 py-1 flex items-center gap-2">
                        {item}
                        <span
                            className="cursor-pointer"
                            onClick={() => removeFilter("fabric", item)}
                        >
                            ✕
                        </span>
                    </div>
                ))}

                {/* STOCK */}
                {filters.inStock && (
                    <div className="bg-gray-200 px-3 py-1 flex items-center gap-2">
                        In Stock
                        <span
                            className="cursor-pointer"
                            onClick={() => removeFilter("inStock")}
                        >
                            ✕
                        </span>
                    </div>
                )}

                {/* SORT */}
                {filters.sort && (
                    <div className="bg-gray-200 px-3 py-1 flex items-center gap-2">
                        {filters.sort}
                        <span
                            className="cursor-pointer"
                            onClick={() => removeFilter("sort")}
                        >
                            ✕
                        </span>
                    </div>
                )}

            </div>

            {/* Sort */}
            <FilterItem title="Sort By">
                <div className="space-y-2">
                    <label><input type="checkbox" checked={filters.sort === "featured"} onChange={() => handleSort("featured")} /> Featured</label><br />
                    <label><input type="checkbox" checked={filters.sort === "best"} onChange={() => handleSort("best")} /> Best Seller</label><br />
                    <label><input type="checkbox" checked={filters.sort === "low"} onChange={() => handleSort("low")} /> Price: Low to High</label><br />
                    <label><input type="checkbox" checked={filters.sort === "high"} onChange={() => handleSort("high")} /> Price: High to Low</label>
                </div>
            </FilterItem>

            {/* Size */}
            <FilterItem title="Size">
                <div className="space-y-2">
                    {/* <label><input type="checkbox" onChange={() => handleChange("size", "s")} /> XS / US (0-4)</label><br /> */}
                    <label><input type="checkbox" checked={filters.size.includes("s")} onChange={() => handleChange("size", "s")} /> S / US (4-6)</label><br />
                    <label><input type="checkbox" checked={filters.size.includes("m")} onChange={() => handleChange("size", "m")} /> M / US (6-10)</label><br />
                    <label><input type="checkbox" checked={filters.size.includes("l")} onChange={() => handleChange("size", "l")} /> L / US (10-14)</label>
                </div>
            </FilterItem>

            {/* Color */}
            <FilterItem title="Color">
                <div className="space-y-2">
                    <label><input type="checkbox" checked={filters.color.includes("black")} onChange={() => handleChange("color", "black")} /> Black</label><br />
                    <label><input type="checkbox" checked={filters.color.includes("red")} onChange={() => handleChange("color", "red")} /> Red</label><br />
                    <label><input type="checkbox" checked={filters.color.includes("green")} onChange={() => handleChange("color", "green")} /> Green</label><br />
                    <label><input type="checkbox" checked={filters.color.includes("blue")} onChange={() => handleChange("color", "blue")} /> Blue</label>
                </div>
            </FilterItem>

            {/* Collection */}
            <FilterItem title="Collection">
                <label><input type="checkbox" checked={filters.inStock} onChange={() => handleChange("inStock")} /> In Stock</label><br />
                <label><input type="checkbox" /> Out of Stock</label>
            </FilterItem>

            {/* Fabric */}
            <FilterItem title="Fabric">
                <label><input type="checkbox" checked={filters.fabric.includes("cotton")} onChange={() => handleChange("fabric", "cotton")} /> Cotton</label><br />
                <label><input type="checkbox" checked={filters.fabric.includes("linen")} onChange={() => handleChange("fabric", "linen")} /> Linen</label><br />
                <label><input type="checkbox" checked={filters.fabric.includes("wool")} onChange={() => handleChange("fabric", "wool")} /> Wool</label>
            </FilterItem>


            {hasFilters && (<button
                onClick={() =>
                    setFilters({
                        size: [],
                        color: [],
                        fabric: [],
                        inStock: false,
                        sort: ""
                    })
                }
                className="mt-4 w-full border py-2 hover:bg-black hover:text-white"
            >
                Clear All Filters
            </button>

            )
            }

        </div >
    );
}
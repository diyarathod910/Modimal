export default function ProductImage({ images }) {
    console.log("hellloo");

    const imageArray = Array.isArray(images) ? images : [images];

    return (
        <>
            <div className="flex gap-4">
                <div className="w-[95%]">
                    <img src={imageArray[0]} className="h-170 w-full" />
                </div>
            </div>
        </>
    )
}
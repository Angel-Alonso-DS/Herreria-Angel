import type { GalleryItem } from "../../../core/domain";
import { Overline } from "./Overline";

type GalleryCardProps = Omit<GalleryItem, "id">;

export function GalleryCard({
    title,
    category,
    imageUrl,
    imageAlt,
}: GalleryCardProps) {
    return (
        <div className="relative w-full">
            <img
                className="w-full h-96 object-cover z-10"
                src={imageUrl}
                alt={imageAlt}
            />
            <div className="absolute pb-4 pt-5 px-4 text-lg text-white bg-linear-to-b from-black/20 to-black/80 w-full bottom-0">
                <Overline>{category.name}</Overline>
                {title}
            </div>
        </div>
    );
}

import type { GalleryItem } from "../../../core/domain";
import { Title } from "./Title";

type GalleryCardProps = Omit<GalleryItem, "id">;

export function GalleryCard({
    title,
    category,
    imageUrl,
    imageAlt,
}: GalleryCardProps) {
    return (
        <div className="w-full">
            <img
                className="w-full h-96 object-cover mb-4"
                src={imageUrl}
                alt={imageAlt}
            />
            <div className="text-lg">
                <p className="text-secondary text-xs tracking-[0.3em] uppercase mb-1">
                    {category.name}
                </p>
                <Title size="sm" className="mb-2">
                    {title}
                </Title>
            </div>
        </div>
    );
}

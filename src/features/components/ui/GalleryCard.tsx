import type { GalleryItem } from "../../../core/domain";

type GalleryCardProps = Omit<GalleryItem, "id">;

export function GalleryCard({ title, imageUrl, imageAlt }: GalleryCardProps) {
    return (
        <div className="">
            <img className="" src={imageUrl} alt={imageAlt} />
            <p className="">{title}</p>
        </div>
    );
}

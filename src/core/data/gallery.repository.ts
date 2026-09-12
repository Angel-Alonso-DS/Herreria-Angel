import type { GalleryItem, GalleryRepository } from "../domain";

const galleryItems: GalleryItem[] = [
    {
        id: "p011209",
        title: "Porton",
        imageUrl: "/gallery/porton-01.jpg",
        imageAlt: "Porton oscuro con agarraderas",
    },
    {
        id: "p021209",
        title: "Porton",
        imageUrl: "/gallery/porton-02.jpg",
        imageAlt: "Porton oscuro con agarraderas",
    },
    {
        id: "p031209",
        title: "Porton",
        imageUrl: "/gallery/porton-03.jpg",
        imageAlt: "Porton cafe con agarraderas",
    },
    {
        id: "p041209",
        title: "Porton",
        imageUrl: "/gallery/porton-04.jpg",
        imageAlt: "Porton detallado",
    },
    {
        id: "p051209",
        title: "Porton",
        imageUrl: "/gallery/porton-05.jpg",
        imageAlt: "Porton",
    },
    {
        id: "p061209",
        title: "Porton",
        imageUrl: "/gallery/porton-06.jpg",
        imageAlt: "Porton grande con puerta",
    },
];

export const staticGalleryRepository: GalleryRepository = {
    getAll: () => Promise.resolve(galleryItems),
};

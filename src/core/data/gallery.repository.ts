import type {
    CategoryItem,
    CategoryRepository,
    GalleryItem,
    GalleryRepository,
} from "../domain";

const category: CategoryItem[] = [
    { name: "Porton" },
    { name: "Puerta" },
    { name: "Barandal" },
];

export const staticCategoryRepository: CategoryRepository = {
    getAll: () => Promise.resolve(category),
};

const galleryItems: GalleryItem[] = [
    {
        id: "p011209",
        title: "Porton oscuro con agarraderas",
        imageUrl: "/gallery/porton-01.jpg",
        imageAlt: "Porton",
        category: category[0],
    },
    {
        id: "p021209",
        title: "Porton oscuro con agarraderas",
        imageUrl: "/gallery/porton-02.jpg",
        imageAlt: "Porton oscuro con agarraderas",
        category: category[0],
    },
    {
        id: "p031209",
        title: "Porton cafe con agarraderas",
        imageUrl: "/gallery/porton-03.jpg",
        imageAlt: "Porton cafe con agarraderas",
        category: category[0],
    },
    {
        id: "p041209",
        title: "Porton detallado",
        imageUrl: "/gallery/porton-04.jpg",
        imageAlt: "Porton detallado",
        category: category[0],
    },
    {
        id: "p051209",
        title: "Porton",
        imageUrl: "/gallery/porton-05.jpg",
        imageAlt: "Porton",
        category: category[0],
    },
    {
        id: "p061209",
        title: "Porton grande con puerta",
        imageUrl: "/gallery/porton-06.jpg",
        imageAlt: "Porton grande con puerta",
        category: category[0],
    },
];

export const staticGalleryRepository: GalleryRepository = {
    getAll: () => Promise.resolve(galleryItems),
};

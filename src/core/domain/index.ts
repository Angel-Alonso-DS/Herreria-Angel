export interface CompanyInfo {
    name: string;
    titleHero: string;
    tagline: string;
    description: string;
    yearsOfExperience: number;
}

export interface CompanyRepository {
    get(): Promise<CompanyInfo>;
}

export interface CategoryItem {
    name: string;
}

export interface CategoryRepository {
    getAll(): Promise<CategoryItem[]>;
}

export interface ContactInfo {
    phone: string;
    whatsapp: string;
    email: string;
    scheduleNote: string;
}

export interface ContactRepository {
    get(): Promise<ContactInfo>;
}

export interface GalleryItem {
    id: string;
    title: string;
    category: CategoryItem;
    imageUrl: string;
    imageAlt: string;
}

export interface GalleryRepository {
    getAll(): Promise<GalleryItem[]>;
}

export interface AsyncState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

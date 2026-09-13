import { useGalleryItems } from "../../core/hooks/useGalleryItems";
import { Container, GalleryCard, Overline, Title } from "../components/ui";

export function Gallery() {
    const { data: gallery } = useGalleryItems();
    return (
        <Container id="gallery" className="bg-bg-primary">
            <Overline>Portafolio</Overline>
            <Title>Trabajos del taller</Title>
            <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {gallery?.map((item) => (
                    <GalleryCard
                        key={item.id}
                        title={item.title}
                        category={item.category}
                        imageUrl={item.imageUrl}
                        imageAlt={item.imageAlt}
                    />
                ))}
            </div>
        </Container>
    );
}

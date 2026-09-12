import { useGalleryItems } from "../../core/hooks/useGalleryItems";
import { Container, Overline, Title } from "../components/ui";

export function Gallery() {
    const { data: gallery } = useGalleryItems();
    return (
        <Container id="gallery" className="bg-bg">
            <Overline>Catalogo</Overline>
            <Title>Trabajos realizados</Title>
            <p>{gallery?.length}</p>
        </Container>
    );
}

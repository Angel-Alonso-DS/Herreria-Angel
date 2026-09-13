import { useContactInfo } from "../../core/hooks/useContactInfo";
import { Container, Overline, Title, Text, Hyperlink } from "../components/ui";

export function Contact() {
    const { data: contact } = useContactInfo();

    return (
        <Container id="contact" className="bg-bg-primary">
            <Overline>Hablemos de tu proyecto</Overline>
            <Title>Contacto</Title>
            <Text>
                Cuéntanos qué necesitas y te respondemos con los detalles para
                cotizar.
            </Text>
            <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <Text>Telefono</Text>
                    <Hyperlink>{contact?.phone}</Hyperlink>
                </div>
                <div>
                    <Text>Correo</Text>
                    <Hyperlink>{contact?.email}</Hyperlink>
                </div>
                <div>
                    <Text>Horario</Text>
                    <Text>{contact?.scheduleNote}</Text>
                </div>
            </section>
        </Container>
    );
}

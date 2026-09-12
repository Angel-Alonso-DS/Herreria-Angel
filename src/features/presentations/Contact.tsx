import { useContactInfo } from "../../core/hooks/useContactInfo";
import { Container, Overline, Title, Text, Hyperlink } from "../components/ui";

export function Contact() {
    const { data: contact } = useContactInfo();

    return (
        <Container id="contact" className="bg-bg">
            <Overline>Contacto</Overline>
            <Title>Cotiza tu pieza</Title>
            <Text>Telefono</Text>
            <Hyperlink>{contact?.phone}</Hyperlink>
            <Text>WhatsApp</Text>
            <Hyperlink>{contact?.whatsapp}</Hyperlink>
            <Text>Correo</Text>
            <Hyperlink>{contact?.email}</Hyperlink>
            <Text>Horario</Text>
            <Hyperlink>{contact?.scheduleNote}</Hyperlink>
        </Container>
    );
}

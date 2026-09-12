import { useCompanyInfo } from "../../core/hooks/useCompanyInfo";
import { Container, Overline, Title, Text } from "../components/ui";

export function About() {
    const { data: companyInfo } = useCompanyInfo();
    return (
        <Container id="about" className="bg-blue-gray">
            <Overline>Nosotros</Overline>
            <Title>El taller</Title>
            <Text>{companyInfo?.description}</Text>
        </Container>
    );
}

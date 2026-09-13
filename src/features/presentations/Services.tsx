import { useCompanyInfo } from "../../core/hooks/useCompanyInfo";
import { Container, Overline, Title, Text } from "../components/ui";

export function Services() {
    const { data: companyInfo } = useCompanyInfo();
    return (
        <Container id="services" className="bg-panel">
            <div className="flex flex-col md:flex-row">
                <section className="flex-1">
                    <Overline>Lo que hacemos</Overline>
                    <Title>Servicios</Title>

                    <Text>{companyInfo?.description}</Text>
                </section>
            </div>
        </Container>
    );
}

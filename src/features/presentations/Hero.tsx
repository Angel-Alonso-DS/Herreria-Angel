import { useCompanyInfo } from "../../core/hooks/useCompanyInfo";
import { Container, Title, Text } from "../components/ui";

export function Hero() {
    const { data: companyInfo } = useCompanyInfo();
    return (
        <Container id="hero" className="bg-blue-gray">
            <Title>{companyInfo?.titleHero}</Title>
            <Text>{companyInfo?.tagline}</Text>
        </Container>
    );
}

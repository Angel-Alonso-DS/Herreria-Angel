import { useCompanyInfo } from "../../core/hooks/useCompanyInfo";
import { Container, Overline, Title, Text } from "../components/ui";

export function About() {
    const { data: companyInfo } = useCompanyInfo();
    return (
        <Container id="about" className="bg-bg-primary">
            <div className="flex flex-col md:flex-row">
                <section className="flex-1">
                    <Overline>Nosotros</Overline>
                    <Title>El taller</Title>

                    <Text>{companyInfo?.description}</Text>
                </section>
                <div className="hidden md:block w-1 bg-primary mx-4" />
                <section className="my-4">
                    <div className="flex flex-row md:flex-col">
                        <Title variant={"accent"} size={"lg"}>
                            {`${companyInfo?.yearsOfExperience} Años`}
                        </Title>
                    </div>
                    <Text>Fundiendo metal</Text>
                </section>
            </div>
        </Container>
    );
}

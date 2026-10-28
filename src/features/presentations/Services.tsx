import { useServiceItems } from "../../core/hooks/useServiceItems";
import { Container, Overline, Title } from "../components/ui";

export function Services() {
    const { data: serviceItems } = useServiceItems();
    return (
        <Container id="services" className="bg-panel">
            <div className="flex flex-col md:flex-row">
                <section className="flex-1">
                    <Overline>Lo que hacemos</Overline>
                    <Title>Servicios</Title>

                    {serviceItems?.map((item) => (
                        <div>
                            {item.icon}
                            {item.name}
                            {item.description}
                        </div>
                    ))}
                </section>
            </div>
        </Container>
    );
}

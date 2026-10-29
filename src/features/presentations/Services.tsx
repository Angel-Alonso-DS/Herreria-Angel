import { useServiceItems } from "../../core/hooks/useServiceItems";
import { Container, Overline, Title, Text } from "../components/ui";

export function Services() {
    const { data: serviceItems } = useServiceItems();
    return (
        <Container id="services" className="bg-panel">
            <div className="flex flex-col md:flex-row">
                <section className="flex-1">
                    <Overline>Lo que hacemos</Overline>
                    <Title>Servicios</Title>
                    <br />

                    <div className="table w-full">
                        <div className="table-header-group">
                            <div className="table-row">
                                <div className="table-cell text-left">
                                    <Title size="sm"></Title>
                                </div>
                                <div className="table-cell text-left">
                                    <Title size="sm">Nombre</Title>
                                </div>
                                <div className="table-cell text-left">
                                    <Title size="sm">Descripcion</Title>
                                </div>
                            </div>
                        </div>
                        <div className="table-row-group">
                            {serviceItems?.map((item) => (
                                <div className="table-row">
                                    <div className="table-cell">
                                        <Text>{item.icon}</Text>
                                    </div>
                                    <div className="table-cell">
                                        <Text>{item.name}</Text>
                                    </div>
                                    <div className="table-cell">
                                        <Text>{item.description}</Text>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
}

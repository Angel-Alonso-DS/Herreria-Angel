import { useCompanyInfo } from "../../../core/hooks/useCompanyInfo";
import { Hyperlink, Title } from "../ui";

export function Header() {
    const { data: companyInfo } = useCompanyInfo();
    return (
        <header className="flex p-7 justify-around fixed z-30 left-0 top-0 w-full bg-bg-primary border-b border-on-surface">
            <Title size={"sm"}>{companyInfo?.name}</Title>
            <nav className="hidden md:flex">
                <Hyperlink variant={"navigator"} href="#hero">
                    Hero
                </Hyperlink>
                <Hyperlink variant={"navigator"} href="#gallery">
                    Catalogo
                </Hyperlink>
                <Hyperlink variant={"navigator"} href="#about">
                    Nosotros
                </Hyperlink>
                <Hyperlink variant={"navigator"} href="#contact">
                    Contacto
                </Hyperlink>
            </nav>
        </header>
    );
}

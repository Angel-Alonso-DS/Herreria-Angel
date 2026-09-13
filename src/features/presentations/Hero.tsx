import type { CompanyInfo } from "../../core/domain";
import { useCompanyInfo } from "../../core/hooks/useCompanyInfo";
import { Title, Text, Overline, Hyperlink } from "../components/ui";

function CompanyInfoComponent({
    titleHero,
    tagline,
}: Omit<CompanyInfo, "name" | "description" | "yearsOfExperience">) {
    return (
        <div className="relative z-10 flex flex-col justify-center px-22">
            <Overline>Taller de herrería, hecho a mano</Overline>
            <Title variant={"hero"} size={"lg"}>
                {titleHero}
            </Title>
            <Text className="text-white lg:text-text-primary mb-8">
                {tagline}
            </Text>

            <div className="flex gap-4">
                <Hyperlink variant={"button"} href="#gallery">
                    Ver nuestros trabajos
                </Hyperlink>
                <Hyperlink variant={"button_outline"} href="#about">
                    Habla con nosotros
                </Hyperlink>
            </div>

            <div className="absolute bottom-0 right-0 px-20 py-12 w-full h-fit flex-col gap-3 items-center md:items-start text-xs tracking-[0.3em] text-white lg:text-text-primary uppercase flex">
                <span className="mx-8 h-10 w-px bg-white lg:bg-text-primary/40" />
                Scroll
            </div>
        </div>
    );
}

export function Hero() {
    const imageHeroUrl = "https://picsum.photos/seed/forjaangel1/1600/1000";
    const { data: companyInfo } = useCompanyInfo();

    return (
        <section id="hero" className="h-dvh border-b border-on-surface">
            <div className="relative grid-cols-2 h-full bg-bg-primary hidden lg:grid">
                <CompanyInfoComponent
                    titleHero={companyInfo?.titleHero!}
                    tagline={companyInfo?.tagline!}
                ></CompanyInfoComponent>

                <div className="relative h-full overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={imageHeroUrl}
                        alt=""
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent" />
                </div>
            </div>

            <div
                className="relative flex w-full h-full bg-cover bg-center lg:hidden"
                style={{ backgroundImage: `url('${imageHeroUrl}')` }}
            >
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/45 to-black/70" />
                <CompanyInfoComponent
                    titleHero={companyInfo?.titleHero!}
                    tagline={companyInfo?.tagline!}
                ></CompanyInfoComponent>
            </div>
        </section>
    );
}

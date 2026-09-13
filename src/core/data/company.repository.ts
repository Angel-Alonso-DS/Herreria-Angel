import type { CompanyInfo, CompanyRepository } from "../domain";

const companyInfo: CompanyInfo = {
    name: "Herrería Ángel",
    titleHero: "Piezas que se fabrican una a una",
    tagline:
        "Cada portón, barandal o estructura sale del taller con el mismo cuidado con el que se diseñó en papel.",
    description:
        "Más de una década de experiencia en fabricación de piezas a medida, con materiales de calidad y atención personalizada en cada proyecto, desde el primer boceto hasta la instalación final.",
    yearsOfExperience: 25,
};

export const staticCompanyRepository: CompanyRepository = {
    get: () => Promise.resolve(companyInfo),
};

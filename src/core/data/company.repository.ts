import type { CompanyInfo, CompanyRepository } from "../domain";

const companyInfo: CompanyInfo = {
    name: "Herrería Ángel",
    titleHero: "Herrería y estructuras a medida",
    tagline:
        "Fabricamos soluciones en herrería con calidad, resistencia y acabados profesionales.",
    description:
        "Más de una década de experiencia en fabricación de piezas a medida, con materiales de calidad y atención personalizada en cada proyecto, desde el primer boceto hasta la instalación final.",
    yearsOfExperience: 25,
};

export const staticCompanyRepository: CompanyRepository = {
    get: () => Promise.resolve(companyInfo),
};

import type { ServiceItem, ServiceRepository } from "../domain";

const services: ServiceItem[] = [
    {
        name: "Portones y rejas",
        icon: "󱠞",
        description:
            "Diseño y fabricacion de portones coredizos y abatibles, ajustados al ancho y peso exacto del acceso.",
    },
    {
        name: "Portones y rejas",
        icon: "󱠞",
        description:
            "Diseño y fabricacion de portones coredizos y abatibles, ajustados al ancho y peso exacto del acceso.",
    },
    {
        name: "Portones y rejas",
        icon: "󱠞",
        description:
            "Diseño y fabricacion de portones coredizos y abatibles, ajustados al ancho y peso exacto del acceso.",
    },
    {
        name: "Portones y rejas",
        icon: "󱠞",
        description:
            "Diseño y fabricacion de portones coredizos y abatibles, ajustados al ancho y peso exacto del acceso.",
    },
    {
        name: "Portones y rejas",
        icon: "󱠞",
        description:
            "Diseño y fabricacion de portones coredizos y abatibles, ajustados al ancho y peso exacto del acceso.",
    },
];

export const staticServiceReposity: ServiceRepository = {
    getAll: () => Promise.resolve(services),
};

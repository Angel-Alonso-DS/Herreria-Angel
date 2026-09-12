import type { ContactInfo, ContactRepository } from "../domain";

const contactInfo: ContactInfo = {
    phone: "+52 733 733 7333",
    whatsapp: "+52 733 733 7333",
    email: "herreria.angel@gmail.com",
    scheduleNote: "Lunes a sábado, 8:00 am – 5:00 pm",
};

export const staticContactRepository: ContactRepository = {
    get: () => Promise.resolve(contactInfo),
};

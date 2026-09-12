export function buildWhatsappLink(phone: string, message?: string): string {
    const digits = phone.replace(/[^\d]/g, "");
    const text = message ? `?text=${encodeURIComponent(message)}` : "";
    return `https://wa.me/${digits}${text}`;
}

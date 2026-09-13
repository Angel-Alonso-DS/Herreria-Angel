import { useContactInfo } from "../../../core/hooks/useContactInfo";
import { buildWhatsappLink } from "../../../core/utils/whatsapp";

export function FloatingWhatsApp() {
    const { data: contact } = useContactInfo();

    if (!contact) return null;

    return (
        <a
            className="fixed flex z-20 items-center justify-center right-6 bottom-6 w-14 h-14 rounded-[50%] bg-primary text-white shadow-2xl shadow-black transition-colors duration-200 hover:bg-on-primary"
            href={buildWhatsappLink(
                contact.whatsapp,
                "Hola, me gustaría cotizar un trabajo de herrería.",
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Escribir por WhatsApp"
        >
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.43 1.32 4.93L2 22l5.3-1.39a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.06c-.24.68-1.42 1.32-1.96 1.4-.5.08-1.13.11-1.83-.12-.42-.13-.96-.31-1.66-.6-2.92-1.26-4.83-4.2-4.97-4.4-.15-.19-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.43c.26-.29.57-.36.76-.36s.38 0 .55.01c.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.45.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.18-.21.74-.86.94-1.15.2-.29.4-.24.67-.14.27.1 1.72.81 2.02.96.29.15.49.22.56.34.07.13.07.74-.17 1.42z"
                />
            </svg>
        </a>
    );
}

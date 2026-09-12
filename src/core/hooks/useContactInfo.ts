import { useEffect, useState } from "react";
import type { AsyncState, ContactInfo } from "../domain";
import { staticContactRepository } from "../data/contact.repository";

export function useContactInfo(): AsyncState<ContactInfo> {
    const [state, setState] = useState<AsyncState<ContactInfo>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        let cancelled = false;

        staticContactRepository
            .get()
            .then((item) => {
                if (!cancelled)
                    setState({ data: item, loading: false, error: null });
            })
            .catch(() => {
                if (!cancelled)
                    setState({
                        data: null,
                        loading: false,
                        error: "No se pudo cargar el contacto.",
                    });
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return state;
}

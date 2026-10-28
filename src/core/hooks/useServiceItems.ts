import { useEffect, useState } from "react";
import type { AsyncState, ServiceItem } from "../domain";
import { staticServiceReposity } from "../data/service.reposity";

export function useServiceItems(): AsyncState<ServiceItem[]> {
    const [state, setState] = useState<AsyncState<ServiceItem[]>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        let cancelled = false;

        staticServiceReposity
            .getAll()
            .then((item) => {
                if (!cancelled) {
                    setState({ data: item, loading: false, error: null });
                }
            })
            .catch(() => {
                if (!cancelled) {
                    setState({
                        data: null,
                        loading: false,
                        error: "No se pudo cargar los servicios",
                    });
                }
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return state;
}

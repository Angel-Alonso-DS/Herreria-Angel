import { useEffect, useState } from "react";
import type { AsyncState, CompanyInfo } from "../domain";
import { staticCompanyRepository } from "../data/company.repository";

export function useCompanyInfo(): AsyncState<CompanyInfo> {
    const [state, setState] = useState<AsyncState<CompanyInfo>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        let cancelled = false;

        staticCompanyRepository
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
                        error: "No se pudo cargar la información.",
                    });
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return state;
}

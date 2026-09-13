import { useState, useEffect } from "react";
import { staticCategoryRepository } from "../data/gallery.repository";
import type { AsyncState, CategoryItem } from "../domain";

export function useCategoryItems(): AsyncState<CategoryItem[]> {
    const [state, setState] = useState<AsyncState<CategoryItem[]>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        let cancelled = false;

        staticCategoryRepository
            .getAll()
            .then((items) => {
                if (!cancelled)
                    setState({ data: items, loading: false, error: null });
            })
            .catch(() => {
                if (!cancelled)
                    setState({
                        data: null,
                        loading: false,
                        error: "No se pudo cargar .",
                    });
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return state;
}

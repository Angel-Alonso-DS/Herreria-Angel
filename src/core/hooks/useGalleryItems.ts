import { useEffect, useState } from "react";
import type { AsyncState, GalleryItem } from "../domain";
import { staticGalleryRepository } from "../data/gallery.repository";

export function useGalleryItems(): AsyncState<GalleryItem[]> {
    const [state, setState] = useState<AsyncState<GalleryItem[]>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        let cancelled = false;

        staticGalleryRepository
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
                        error: "No se pudo cargar el catálogo.",
                    });
            });

        return () => {
            cancelled = true;
        };
    }, []);

    return state;
}

import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

const hyperlink = cva("items-center", {
    variants: {
        variant: {
            link: "",
            navigator: "",
        },
        size: {
            sm: "h-10 px-5 text-xs",
            md: "h-12 px-6 text-sm",
            lg: "h-14 px-8 text-sm",
        },
    },
    defaultVariants: {
        variant: "link",
        size: "md",
    },
});

type HyperlinkPorps = ComponentProps<"a"> & VariantProps<typeof hyperlink>;

export function Hyperlink({ variant, size, ...props }: HyperlinkPorps) {
    return <a className={cn(hyperlink({ variant, size }))} {...props} />;
}

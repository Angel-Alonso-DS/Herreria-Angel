import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";
import { buttonStyleNormal, buttonStyleOutline } from "./Button";

const hyperlink = cva("font-body transition-all duration-200 ", {
    variants: {
        variant: {
            link: "mt-4 underline underline-offset-4 decoration-2 decoration-primary/50 text-text-secondary/50 hover:text-on-primary",
            navigator: "px-5 text-text-secondary hover:text-on-primary",
            button: buttonStyleNormal,
            button_outline: buttonStyleOutline,
        },
        size: {
            sm: "text-xs",
            md: "text-sm",
            lg: "text-md",
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

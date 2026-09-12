import type { ComponentProps } from "react";

type ContainerProps = ComponentProps<"section">;

export function Container({ className, ...props }: ContainerProps) {
    return <section className={` p-12 md:p-20 ${className}`} {...props} />;
}

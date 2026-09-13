import type { ComponentProps } from "react";

type ContainerProps = ComponentProps<"section">;

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <section
            className={`p-12 md:p-18 flex w-full items-center justify-center ${className}`}
            {...props}
        >
            <div className="md:max-w-5xl w-full mx-auto">{children}</div>
        </section>
    );
}

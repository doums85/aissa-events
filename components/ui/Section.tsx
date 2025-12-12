
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    fullWidth?: boolean;
}

export function Section({
    children,
    className,
    fullWidth = false,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn("py-24 md:py-32", className)}
            {...props}
        >
            <div
                className={cn(
                    "mx-auto px-6 md:px-12",
                    fullWidth ? "w-full" : "max-w-7xl"
                )}
            >
                {children}
            </div>
        </section>
    );
}

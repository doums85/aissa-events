
import { cn } from "@/lib/utils";

export function Card({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "rounded-sm border border-stone-200 bg-white text-stone-950 shadow-sm",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap font-black cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-white border-2 border-black hover:bg-black transition-colors",
				brutalist:
					"bg-primary text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none",
				outline:
					"border-2 border-black bg-transparent hover:bg-black hover:text-white",
				secondary:
					"bg-black text-white border-2 border-black hover:bg-primary transition-colors",
				ghost:
					"hover:bg-black/10 hover:text-black dark:hover:bg-white/10 dark:hover:text-white",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "px-6 py-3",
				sm: "h-9 rounded-md px-3",
				lg: "text-2xl px-12 py-6",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button };

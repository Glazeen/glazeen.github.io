import { cn } from "../lib/utils";

interface FeatureCardProps {
	icon: string;
	title: string;
	description: string;
	stats: string;
	className?: string;
}

export default function FeatureCard({
	icon,
	title,
	description,
	stats,
	className,
}: FeatureCardProps) {
	return (
		<div
			className={cn(
				"p-8 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white hover:bg-primary group transition-colors",
				className,
			)}
		>
			<div className="bg-black text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-6 md:mb-8 border-2 border-white">
				<span className="material-symbols-outlined text-3xl md:text-4xl">
					{icon}
				</span>
			</div>
			<h3 className="text-2xl md:text-4xl mb-4 md:mb-6 group-hover:text-white font-display uppercase">
				{title}
			</h3>
			<p className="text-base md:text-lg font-bold group-hover:text-white/90">
				{description}
			</p>
			<div className="mt-8 md:mt-12 text-xl md:text-2xl font-black group-hover:text-black">
				{stats}
			</div>
		</div>
	);
}

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function Hero() {
	return (
		<section className="relative pt-12 pb-24 lg:pt-32 border-b-4 border-black dark:border-white">
			<div className="container mx-auto px-6">
				<div className="relative z-10">
					<Badge>ESCLUSIVO PMI</Badge>
					<h1 className="text-6xl md:text-9xl lg:text-[12rem] tracking-tighter mb-8 leading-none font-display uppercase">
						L'AI CHE GENERA <span className="text-primary">PROFITTO</span>
					</h1>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
					<div className="col-span-auto lg:col-span-7 lg:pr-12">
						<p className="text-2xl md:text-4xl font-bold leading-tight mb-12 border-l-8 border-primary pl-6">
							Agenti AI pronti all'uso. Tagliamo i costi operativi, liberiamo il
							tuo tempo e portiamo la potenza enterprise nel tuo business. Oggi.
						</p>
						<div className="flex">
							<Button className="lg:hidden" variant="brutalist">
								OTTIENI IL TUO AGENTE
							</Button>
							<Button
								className="hidden lg:block"
								variant="brutalist"
								size={"lg"}
							>
								OTTIENI IL TUO AGENTE
							</Button>
						</div>
					</div>
					<div className="col-span-auto lg:col-span-5 relative mt-12 lg:mt-0">
						<div className="border-8 border-black dark:border-white p-2">
							<img
								alt="Modern workspace"
								className="w-full grayscale contrast-125"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoT-MHKquWF5ZRioBpxqTq8DIg4fy_-QtjyyR5bqgkuWNcuxqdI7OJUiBu8GjmN1RvHV13-yIlYbPCV3UxhseP3BAtc-tAXhfGkN06iZjODAR4SwW6nRRyi76-QBTpqxzB-B_6s-9B_O75VKkxZd3-3iBtLlhiXdgDLMkXCPusyIZ_gRnA0qLCGDHANH1t9v4l98yfnvV-It2VeGiX_wEDkOpe-DTWhddh4VFJLSogMJt5Ojnd1bxGE5J3W31qG7YTtExcxt8zMiLU"
							/>
						</div>
						<div className="absolute -bottom-10 -left-10 bg-black text-white p-8 border-4 border-primary">
							<p className="text-5xl font-black">+42%</p>
							<p className="text-sm font-bold uppercase tracking-widest">
								Efficienza Totale
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

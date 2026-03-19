import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function Hero({ onContact }: { onContact?: () => void }) {
	return (
		<section
			className="relative pt-12 pb-24 lg:pt-32 border-b-4 border-black dark:border-white"
			aria-label="Hero"
		>
			<div className="container mx-auto px-6">
				<div className="relative z-10">
					<Badge className="text-sm sm:text-xl">
						SOLUZIONI AI PER PMI ITALIANE
					</Badge>
					<h1 className="text-4xl md:text-6xl lg:text-9xl tracking-tighter mb-8 leading-none font-display uppercase">
						AUTOMAZIONE AI PER LA TUA{" "}
						<span className="text-primary">AZIENDA</span>
					</h1>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
					<div className="col-span-auto lg:col-span-7 lg:xlpr-12">
						<p className="text-lg md:text-2xl lg:text-3xl font-bold leading-tight mb-12 border-l-8 border-primary pl-6 pr-6">
							Agenti di intelligenza artificiale pronti all'uso per le piccole e
							medie imprese. Riduciamo i costi operativi, automatizziamo i
							processi ripetitivi e portiamo tecnologia enterprise nel tuo
							business — dai risultati misurabili, non dalle promesse.
						</p>
						<div className="flex">
							<Button
								className="lg:hidden"
								variant="brutalist"
								onClick={onContact}
							>
								RICHIEDI UNA DEMO GRATUITA
							</Button>
							<Button
								className="hidden lg:block"
								variant="brutalist"
								size={"lg"}
								onClick={onContact}
							>
								RICHIEDI UNA DEMO GRATUITA
							</Button>
						</div>
					</div>
					<div className="col-span-auto lg:col-span-5 relative mt-12 lg:mt-0">
						<div className="border-8 border-black dark:border-white p-2">
							<img
								alt="Team che collabora con strumenti di intelligenza artificiale Glazeen"
								className="w-full grayscale contrast-125"
								loading="eager"
								width={600}
								height={400}
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoT-MHKquWF5ZRioBpqTq8DIg4fy_-QtjyyR5bqgkuWNcuxqdI7OJUiBu8GjmN1RvHV13-yIlYbPCV3UxhseP3BAtc-tAXhfGkN06iZjODAR4SwW6nRRyi76-QBTpqxzB-B_6s-9B_O75VKkxZd3-3iBtLlhiXdgDLMkXCPusyIZ_gRnA0qLCGDHANH1t9v4l98yfnvV-It2VeGiX_wEDkOpe-DTWhddh4VFJLSogMJt5Ojnd1bxGE5J3W31qG7YTtExcxt8zMiLU"
							/>
						</div>
						<div className="absolute -bottom-10 -left-10 bg-black text-white p-8 border-4 border-primary">
							<p className="text-5xl font-black">+42%</p>
							<p className="text-sm font-bold uppercase tracking-widest">
								Efficienza Operativa
							</p>
							<p className="text-xs font-bold uppercase tracking-widest opacity-60 mt-1">
								Media clienti PMI
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

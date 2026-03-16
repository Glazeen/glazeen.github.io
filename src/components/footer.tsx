import { version } from "../../package.json";
import { NAV_LINKS } from "../constants/navigation";

export default function Footer() {
	return (
		<footer className="bg-black text-white py-16 md:py-24 border-t-4 border-black dark:border-white">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-20">
					{/* Left section: Logo + Tagline */}
					<div className="lg:col-span-6">
						<img
							src="/glazeen-logo.svg"
							alt="Glazeen Logo"
							className="h-32 md:h-40 w-auto mb-8"
						/>
						<p className="text-xl md:text-2xl font-bold max-w-2xl leading-tight text-white/80">
							Automazione AI per le PMI italiane. Riduciamo i costi,
							automatizziamo i processi, portiamo tecnologia enterprise nelle
							piccole e medie imprese.
						</p>
					</div>

					{/* Right section: Link columns */}
					<nav
						aria-label="Link del footer"
						className="grid grid-cols-2 gap-8 lg:col-span-6 lg:ml-auto"
					>
						<div className="lg:min-w-[150px]">
							<h4 className="text-sm font-black mb-6 text-primary uppercase tracking-widest">
								Azienda
							</h4>
							<ul className="space-y-4 text-base font-bold">
								{NAV_LINKS.map((link) => (
									<li key={link.href}>
										<a
											className="text-white/70 hover:text-white transition-colors"
											href={link.href}
										>
											{link.label}
										</a>
									</li>
								))}
								<li>
									<a
										className="text-white/70 hover:text-white transition-colors"
										href="/contatti"
									>
										CONTATTI
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>

				{/* Bottom bar */}
				<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
					<div className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">
						© 2026 Glazeen. Tutti i diritti riservati.
					</div>
					<div className="select-none font-display">
						<span className="uppercase text-white/10 text-4xl md:text-5xl font-black">
							GLAZEEN
						</span>
						<div className="text-sm font-bold text-white/30 font-mono">
							v{version}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

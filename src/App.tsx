import FeatureCard from "./components/feature-card";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { Card, CardDescription, CardFooter } from "./components/ui/card";

export default function App() {
	return (
		<div className="scheme-light relative flex min-h-screen overflow-x-hidden flex-col text-black dark:text-white bg-background-light dark:bg-background-dark font-body selection:bg-primary selection:text-white">
			<Navbar />
			<main className="flex-1">
				<Hero />
				<section
					className="py-12 md:py-24 bg-white dark:bg-black overflow-hidden"
					id="features"
				>
					<div className="container mx-auto px-6">
						<div className="mb-12 md:mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
							<h2 className="text-6xl md:text-9xl tracking-tighter font-display uppercase">
								SOLO RISULTATI
							</h2>
							<p className="text-xl font-bold max-w-md border-b-4 border-primary pb-4 italic">
								L'automazione non è un lusso, è un'arma.
							</p>
						</div>
						<div className="grid md:grid-cols-3 gap-0 border-4 border-black dark:border-white">
							<FeatureCard
								icon="schedule"
								title="PRAGMATISMO"
								description="Sviluppiamo solo ciò che serve. Niente setup infiniti, solo soluzioni che funzionano dal primo clic."
								stats="15h+ SALVATE / SETT."
							/>
							<FeatureCard
								icon="account_balance_wallet"
								title="SEMPLICITÀ"
								description="Manutenzione continua. Ci occupiamo noi di tutto, dall'hosting agli aggiornamenti. Tu pensi solo a crescere."
								stats="-65% COSTI OPERATIVI"
							/>
							<FeatureCard
								icon="bar_chart"
								title="MISURABILITÀ"
								description="ROI cristallino. Traccia il tuo Business Productivity Index in tempo reale."
								stats="2.5X PRODUTTIVITÀ"
								className="md:border-r-0"
							/>
						</div>
					</div>
				</section>
				<section
					className="py-12 md:py-24 border-y-4 border-black dark:border-white bg-primary text-white"
					id="how-it-works"
				>
					<div className="container mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
							<div className="col-span-1 lg:col-span-1">
								<h2 className="text-6xl md:text-8xl vertical-text tracking-tighter hidden lg:block opacity-30 font-display uppercase">
									PROCESSO
								</h2>
								<h2 className="text-5xl tracking-tighter lg:hidden font-display uppercase">
									PROCESSO
								</h2>
							</div>
							<div className="col-span-1 lg:col-span-3 grid md:grid-cols-3 gap-8">
								<div className="bg-black p-8 border-4 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
									<div className="text-6xl font-black mb-6 text-primary">
										01
									</div>
									<h3 className="text-3xl mb-4 font-display uppercase">
										SELEZIONE & ANALISI
									</h3>
									<p className="font-bold opacity-80 uppercase text-sm">
										Il primo passo è conoscersi. Analizziamo l'impatto reale
										dell'AI sulla tua azienda: lavoriamo solo dove possiamo
										generare un valore misurabile.
									</p>
								</div>
								<div className="bg-black p-8 border-4 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
									<div className="text-6xl font-black mb-6 text-primary">
										02
									</div>
									<h3 className="text-3xl mb-4 font-display uppercase">
										DESIGN DI VALORE
									</h3>
									<p className="font-bold opacity-80 uppercase text-sm">
										Costruiamo l'architettura del tuo successo. Una fase di
										progettazione dedicata che elimina ogni incertezza su costi,
										tempi e risultati finali.
									</p>
								</div>
								<div className="bg-black p-8 border-4 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
									<div className="text-6xl font-black mb-6 text-primary">
										03
									</div>
									<h3 className="text-3xl mb-4 font-display uppercase">
										RILASCIO MVP
									</h3>
									<p className="font-bold opacity-80 uppercase text-sm">
										Entriamo in produzione. Il primo modulo del tuo nuovo
										ufficio digitale è pronto per abbattere i costi e liberare
										il talento del tuo team.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="py-12 md:py-24 bg-background-light dark:bg-background-dark overflow-hidden border-t-4 border-black dark:border-white">
					<div className="container mx-auto px-6">
						<h2 className="text-5xl md:text-7xl tracking-tighter mb-12 md:mb-20 md:text-center font-display uppercase">
							CHI CI HA SCELTO
						</h2>
						<div className="grid md:grid-cols-3 gap-8 text-black dark:text-white">
							<Card>
								<CardDescription>
									"Milena AI ha rivoluzionato il nostro supporto: gestisce in
									autonomia stato ordini e disponibilità prodotti h24, azzerando
									i tempi di attesa e liberando il team dalle richieste
									ripetitive"
								</CardDescription>
								<CardFooter>
									<img
										alt="David Chen"
										className="h-16 w-16 border-2 border-black grayscale"
										src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF_uRYkfzokxDcwIw6_FYFLpUBV1STW3n4dPrudWz7PClzpvNGjlR6N74rw6_5t_rJdXsPhi4enAJ_AjJGplzj3j_VEsGyM23AJv4iK_oh9iUvYTmAkkIQJi1wozfo-GFhFfn3Y2bqRaGZzQzlx5Gk9L167GHUJ8NVZLR291TEL3KkSErmRbDwcLc1MfHbD9YVRUJ1FY-QUM0cLzhH5bV_mktM5-St9IoGdUVyVQl65Df4kPOV0AQK_XcXzwQhvYFd-Ec4WfOJAgFv"
									/>
									<div>
										<p className="font-black text-primary">NinjaTesi</p>
										<p className="text-xs font-bold uppercase">
											www.ninjatesi.it
										</p>
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardDescription>
									"Computer Vision applicata al mondo reale: il nostro agente
									scansiona i menù dei locali e sincronizza i listini h24. Un
									processo che prima richiedeva ore di lavoro oggi è istantaneo
									e totalmente automatizzato."
								</CardDescription>
								<CardFooter>
									<img
										alt="Sarah Jenkins"
										className="h-16 w-16 border-2 border-black grayscale"
										src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkScD1YTp4uVQkV2IWQmp137leKHNpA__PpIPq6Qdkk7o3Bj4WaA6aoDe3HZF_VQ_rDoVnYNCUfn7PP_CVs0UeinyoUJYqv_PHsWEEp1_OeSqqQOqtlkmqTFHWTqvKvW1xEtzFyXDiLHQ4b4j5tn2vZP6XMRm3T6DULpgQCrL6SEGNC9bSYRdHNpNKu-B5MsmY43PUg6dn8MdByaMBjaPgz49l3FYS6yvh7kwtjZwnUzixGzYPc27KEA2HOVVh2V0EY_OD-zbykVDa"
									/>
									<div>
										<p className="font-black text-primary">AGLE Service</p>
										<p className="text-xs font-bold uppercase">
											www.agleservice.it
										</p>
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardDescription>
									"Servizio gestito significa che non mi serve un reparto IT.
									Glazeen si occupa di tutto."
								</CardDescription>
								<CardFooter>
									<img
										alt="Marcus Miller"
										className="h-16 w-16 border-2 border-black grayscale"
										src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2Szv_SCzB9ZVzelEK-r1pcO9JeS0vBGw7Sy2XKABE-WXOzgSWxz-NCyFWV-y06BPsS7HM0jgSXZLAEe0H3zBWoAnKNvGFBR6QS6YUbr2VppU2hOlyWsNkYBunqGiu5ult1vk3pmbEEImf2GEX7c5fjZQokHidSYjjCxslAElj9tiSSK0WyiOYDKdyAaF0aPhVGJyxaRHhb5M-iG7IqP02yLYWlTMSNQvT2AjnsscVnG5X07SEIJm4rnkmfbSkwOKtWTuaAQlH9sGV"
									/>
									<div>
										<p className="font-black text-primary">MARCUS MILLER</p>
										<p className="text-xs font-bold uppercase">
											Founder, Miller Creative
										</p>
									</div>
								</CardFooter>
							</Card>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

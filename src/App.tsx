import * as React from "react";
import { ContactModal } from "./components/contact-modal";
import FeatureCard from "./components/feature-card";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { Card, CardDescription, CardFooter } from "./components/ui/card";

export default function App() {
	const [isContactOpen, setIsContactOpen] = React.useState(false);

	return (
		<div className="scheme-light relative flex min-h-screen overflow-x-hidden flex-col text-black dark:text-white bg-background-light dark:bg-background-dark font-body selection:bg-primary selection:text-white">
			<ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
			<Navbar onContact={() => setIsContactOpen(true)} />
			<main className="flex-1">
				<Hero onContact={() => setIsContactOpen(true)} />
				<section
					className="py-12 md:py-24 bg-white dark:bg-black overflow-hidden"
					id="features"
					aria-label="I nostri valori"
				>
					<div className="container mx-auto px-6">
						<div className="mb-12 md:mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
							<h2 className="text-6xl md:text-9xl tracking-tighter font-display uppercase">
								PERCHÉ SCEGLIERE L'AUTOMAZIONE AI
							</h2>
							<p className="text-xl font-bold max-w-md border-b-4 border-primary pb-4 italic">
								L'automazione non è un lusso: è il vantaggio competitivo delle
								PMI che crescono.
							</p>
						</div>
						<div className="grid md:grid-cols-3 gap-0 border-4 border-black dark:border-white">
							<FeatureCard
								icon="schedule"
								title="SOLUZIONI PRONTE ALL'USO"
								description="Niente setup infiniti né mesi di integrazione. I nostri agenti AI si attivano in pochi giorni e iniziano a generare risultati dal primo utilizzo. Sviluppiamo solo ciò che serve davvero alla tua azienda."
								stats="15h+ SALVATE / SETT."
							/>
							<FeatureCard
								icon="account_balance_wallet"
								title="ZERO PENSIERI, COSTI RIDOTTI"
								description="Dall'hosting agli aggiornamenti, ci occupiamo noi di tutto. Tu pensi solo a far crescere il tuo business. I nostri clienti risparmiano in media il 65% sui costi operativi eliminando le attività manuali ripetitive."
								stats="-65% COSTI OPERATIVI"
							/>
							<FeatureCard
								icon="bar_chart"
								title="ROI MISURABILE IN TEMPO REALE"
								description="Traccia il tuo Business Productivity Index e verifica il ritorno sull'investimento in ogni momento. I nostri clienti registrano in media un aumento di produttività di 2.5X nei primi tre mesi."
								stats="2.5X PRODUTTIVITÀ"
								className="md:border-r-0"
							/>
						</div>
					</div>
				</section>
				<section
					className="py-12 md:py-24 border-y-4 border-black dark:border-white bg-primary text-white"
					id="how-it-works"
					aria-label="Il nostro processo"
				>
					<div className="container mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
							<div className="col-span-1 lg:col-span-1">
								<h2 className="text-6xl md:text-8xl vertical-text tracking-tighter hidden lg:block opacity-30 font-display uppercase">
									COME FUNZIONA
								</h2>
								<h2 className="text-5xl tracking-tighter lg:hidden font-display uppercase">
									COME FUNZIONA
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
										Il primo passo è una consulenza gratuita. Analizziamo i
										processi della tua azienda per identificare dove
										l'intelligenza artificiale può generare il massimo
										risparmio. Lavoriamo solo dove possiamo garantire un
										ritorno misurabile.
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
										Progettiamo la soluzione su misura per la tua azienda.
										Ricevi un preventivo trasparente, una timeline chiara e
										una roadmap condivisa che elimina ogni incertezza su
										costi, tempi e risultati finali.
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
										Il tuo primo agente AI entra in produzione. In poche
										settimane il tuo team è più libero, i costi operativi
										calano e la tua azienda lavora con strumenti di livello
										enterprise — senza la complessità enterprise.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					className="py-12 md:py-24 bg-background-light dark:bg-background-dark overflow-hidden border-t-4 border-black dark:border-white"
					id="testimonials"
					aria-label="Testimonianze clienti"
				>
					<div className="container mx-auto px-6">
						<h2 className="text-5xl md:text-7xl tracking-tighter mb-12 md:mb-20 md:text-center font-display uppercase">
							COSA DICONO I NOSTRI CLIENTI
						</h2>
						<div className="grid md:grid-cols-2 gap-8 text-black dark:text-white">
							<Card>
								<CardDescription>
									"Milena AI ha rivoluzionato il nostro supporto clienti:
									gestisce in autonomia lo stato degli ordini e la
									disponibilità prodotti 24/7, ha ridotto i tempi di risposta
									del 90% e ha liberato il team dalle richieste ripetitive."
								</CardDescription>
								<CardFooter>
									<div>
										<p className="font-black text-primary">NinjaTesi</p>
										<p className="text-xs font-bold uppercase">
											Fondatore · www.ninjatesi.it
										</p>
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardDescription>
									"Il nostro agente di Computer Vision scansiona
									automaticamente i menù dei locali e sincronizza i listini
									in tempo reale, 24 ore su 24. Un processo che prima
									richiedeva ore di lavoro manuale oggi è completamente
									automatizzato."
								</CardDescription>
								<CardFooter>
									<div>
										<p className="font-black text-primary">AGLE Service</p>
										<p className="text-xs font-bold uppercase">
											CEO · www.agleservice.it
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

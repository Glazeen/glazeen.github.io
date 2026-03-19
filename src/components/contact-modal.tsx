import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, Send, X } from "lucide-react";
import * as React from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

/* ─── Types ──────────────────────────────────────────────── */

type Tab = "contact" | "schedule";

interface ContactModalProps {
	open: boolean;
	onClose: () => void;
}

/* ─── Overlay ─────────────────────────────────────────────── */

const overlayVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	exit: { opacity: 0 },
};

/* ─── Modal panel ─────────────────────────────────────────── */

const panelVariants = {
	hidden: { opacity: 0, scale: 0.94, y: 24 },
	visible: { opacity: 1, scale: 1, y: 0 },
	exit: { opacity: 0, scale: 0.96, y: 16 },
};

/* ─── Input primitive ─────────────────────────────────────── */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	id: string;
	error?: string;
	required?: boolean;
}

function BrutalistInput({
	label,
	id,
	error,
	required,
	className,
	...props
}: InputProps) {
	return (
		<div className="flex flex-col gap-1">
			<label
				htmlFor={id}
				className="text-xs font-black uppercase tracking-widest text-black dark:text-white"
			>
				{label}
				{required && (
					<span className="text-primary ml-1" aria-hidden="true">
						*
					</span>
				)}
			</label>
			<input
				id={id}
				required={required}
				className={cn(
					"w-full border-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white font-bold px-4 py-3 text-base placeholder:font-normal placeholder:opacity-50 focus:outline-none focus:ring-0 focus:border-primary transition-colors min-h-[48px]",
					error && "border-red-600 dark:border-red-500",
					className,
				)}
				{...props}
			/>
			{error && (
				<p
					className="text-xs font-bold text-red-600 dark:text-red-400 mt-0.5"
					role="alert"
				>
					{error}
				</p>
			)}
		</div>
	);
}

/* ─── Textarea primitive ──────────────────────────────────── */

interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	id: string;
	error?: string;
	required?: boolean;
}

function BrutalistTextarea({
	label,
	id,
	error,
	required,
	className,
	...props
}: TextareaProps) {
	return (
		<div className="flex flex-col gap-1">
			<label
				htmlFor={id}
				className="text-xs font-black uppercase tracking-widest text-black dark:text-white"
			>
				{label}
				{required && (
					<span className="text-primary ml-1" aria-hidden="true">
						*
					</span>
				)}
			</label>
			<textarea
				id={id}
				required={required}
				rows={4}
				className={cn(
					"w-full border-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white font-bold px-4 py-3 text-base placeholder:font-normal placeholder:opacity-50 focus:outline-none focus:ring-0 focus:border-primary transition-colors resize-none",
					error && "border-red-600 dark:border-red-500",
					className,
				)}
				{...props}
			/>
			{error && (
				<p
					className="text-xs font-bold text-red-600 dark:text-red-400 mt-0.5"
					role="alert"
				>
					{error}
				</p>
			)}
		</div>
	);
}

/* ─── Contact form ────────────────────────────────────────── */

type FormState = "idle" | "submitting" | "success" | "error";

interface FormFields {
	name: string;
	email: string;
	phone: string;
	company: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
}

function ContactForm() {
	const [state, setState] = React.useState<FormState>("idle");
	const [fields, setFields] = React.useState<FormFields>({
		name: "",
		email: "",
		phone: "",
		company: "",
		message: "",
	});
	const [errors, setErrors] = React.useState<FormErrors>({});

	function validate(): boolean {
		const next: FormErrors = {};
		if (!fields.name.trim()) next.name = "Il nome è obbligatorio";
		if (!fields.email.trim()) {
			next.email = "L'email è obbligatoria";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
			next.email = "Inserisci un indirizzo email valido";
		}
		if (!fields.message.trim()) next.message = "Il messaggio è obbligatorio";
		setErrors(next);
		return Object.keys(next).length === 0;
	}

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) {
		const { name, value } = e.target;
		setFields((prev) => ({ ...prev, [name]: value }));
		// Clear error on change
		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!validate()) return;
		setState("submitting");

		try {
			const apiUrl = import.meta.env.VITE_CONTACT_API_URL ?? "";
			const res = await fetch(`${apiUrl}/api/contact`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(fields),
			});

			if (res.ok) {
				setState("success");
			} else {
				// surface server-side validation or rate-limit messages
				const json = await res.json().catch(() => ({}));
				const msg =
					(json as { error?: string }).error ??
					"Errore nell'invio. Riprova più tardi.";
				setErrors({ message: msg });
				setState("idle");
			}
		} catch {
			setErrors({
				message:
					"Impossibile contattare il server. Controlla la connessione e riprova.",
			});
			setState("idle");
		}
	}

	if (state === "success") {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				className="flex flex-col items-center justify-center gap-6 py-12 px-4 text-center"
			>
				<div className="border-4 border-black dark:border-white bg-primary p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
					<CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2.5} />
				</div>
				<div>
					<p className="text-2xl font-black uppercase font-display tracking-tight text-black dark:text-white">
						Messaggio inviato!
					</p>
					<p className="mt-2 font-bold text-black/70 dark:text-white/70">
						Ti risponderemo entro 24 ore.
					</p>
				</div>
			</motion.div>
		);
	}

	return (
		<form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<BrutalistInput
					disabled={state === "submitting"}
					label="Nome e Cognome"
					id="contact-name"
					name="name"
					value={fields.name}
					onChange={handleChange}
					placeholder="Mario Rossi"
					autoComplete="name"
					required
					error={errors.name}
				/>
				<BrutalistInput
					disabled={state === "submitting"}
					label="Email"
					id="contact-email"
					name="email"
					type="email"
					value={fields.email}
					onChange={handleChange}
					placeholder="mario@azienda.it"
					autoComplete="email"
					required
					error={errors.email}
				/>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<BrutalistInput
					disabled={state === "submitting"}
					label="Telefono"
					id="contact-phone"
					name="phone"
					type="tel"
					value={fields.phone}
					onChange={handleChange}
					placeholder="+39 333 000 1234"
					autoComplete="tel"
				/>
				<BrutalistInput
					disabled={state === "submitting"}
					label="Azienda"
					id="contact-company"
					name="company"
					value={fields.company}
					onChange={handleChange}
					placeholder="Nome dell'azienda"
					autoComplete="organization"
				/>
			</div>

			<BrutalistTextarea
				disabled={state === "submitting"}
				label="Messaggio"
				id="contact-message"
				name="message"
				value={fields.message}
				onChange={handleChange}
				placeholder="Raccontaci il tuo processo e cosa vorresti automatizzare…"
				required
				error={errors.message}
			/>

			<p className="text-xs font-bold text-black/50 dark:text-white/50 -mt-1">
				I campi contrassegnati con <span className="text-primary">*</span> sono
				obbligatori.
			</p>

			<Button
				type="submit"
				variant="brutalist"
				size="lg"
				disabled={state === "submitting"}
				className="w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
				id="contact-submit-btn"
			>
				{state === "submitting" ? (
					<>
						<span className="inline-block w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin" />
						INVIO IN CORSO…
					</>
				) : (
					<>
						<Send className="w-5 h-5" strokeWidth={2.5} />
						INVIA MESSAGGIO
					</>
				)}
			</Button>

			{/* Quick contacts */}
			<div className="border-t-4 border-black dark:border-white pt-4 flex flex-col sm:flex-row gap-3">
				<a
					href="mailto:info@glazeen.ai"
					className="flex items-center gap-2 text-sm font-bold text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
				>
					<Mail className="w-4 h-4 shrink-0" strokeWidth={2.5} />
					info@glazeen.ai
				</a>
			</div>
		</form>
	);
}

/* ─── Schedule tab ────────────────────────────────────────── */

function ScheduleTab() {
	return (
		<div className="flex flex-col gap-6">
			<div className="border-4 border-black dark:border-white p-6 bg-primary/5 dark:bg-primary/10">
				<p className="text-sm font-bold uppercase tracking-widest text-black/70 dark:text-white/70 mb-1">
					Consulenza gratuita · 30 minuti
				</p>
				<p className="text-base font-bold text-black dark:text-white leading-relaxed">
					Seleziona l'orario che preferisci. Discuteremo i tuoi processi
					aziendali e ti mostreremo come l'AI può generare valore misurabile.
				</p>
			</div>

			{/* Calendly embed placeholder — replace src with your real Calendly link */}
			<div className="relative border-4 border-black dark:border-white overflow-hidden bg-white dark:bg-black">
				<iframe
					src="https://calendly.com/glazeen/consulenza-gratuita"
					title="Prenota una call con Glazeen"
					width="100%"
					height="580"
					loading="lazy"
					className="block"
					style={{ border: "none", minHeight: 580 }}
				/>
				{/* Fallback shown if iframe is blocked by browser */}
				<noscript>
					<div className="p-8 text-center">
						<p className="font-black text-lg uppercase">
							JavaScript richiesto per il calendario.
						</p>
						<a
							href="https://calendly.com/glazeen/consulenza-gratuita"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-4 inline-block text-primary font-black underline"
						>
							Apri Calendly →
						</a>
					</div>
				</noscript>
			</div>

			<p className="text-xs font-bold text-black/50 dark:text-white/50 text-center">
				Powered by Calendly · Nessun dato condiviso senza il tuo consenso
			</p>
		</div>
	);
}

/* ─── Main modal ──────────────────────────────────────────── */

export function ContactModal({ open, onClose }: ContactModalProps) {
	const [activeTab, setActiveTab] = React.useState<Tab>("contact");
	const closeButtonRef = React.useRef<HTMLButtonElement>(null);
	const modalRef = React.useRef<HTMLDivElement>(null);

	// Focus the close button when the modal opens
	React.useEffect(() => {
		if (open) {
			setTimeout(() => closeButtonRef.current?.focus(), 50);
		} else {
			setActiveTab("contact");
		}
	}, [open]);

	// Trap focus
	React.useEffect(() => {
		if (!open) return;

		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") {
				onClose();
				return;
			}
			if (e.key !== "Tab") return;

			const modal = modalRef.current;
			if (!modal) return;

			const focusable = Array.from(
				modal.querySelectorAll<HTMLElement>(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
				),
			).filter((el) => !el.hasAttribute("disabled"));

			const first = focusable[0];
			const last = focusable[focusable.length - 1];

			if (e.shiftKey) {
				if (document.activeElement === first) {
					e.preventDefault();
					last?.focus();
				}
			} else {
				if (document.activeElement === last) {
					e.preventDefault();
					first?.focus();
				}
			}
		}

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [open, onClose]);

	// Prevent body scroll
	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
		{
			id: "contact",
			label: "Scrivici",
			icon: <Mail className="w-4 h-4 shrink-0" strokeWidth={2.5} />,
		},
		// {
		// 	id: "schedule",
		// 	label: "Prenota una Call",
		// 	icon: <Calendar className="w-4 h-4 shrink-0" strokeWidth={2.5} />,
		// },
	];

	return (
		<AnimatePresence>
			{open && (
				<>
					{/* ── Overlay ── */}
					<motion.div
						key="overlay"
						variants={overlayVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="fixed inset-0 z-100 bg-black/60"
						aria-hidden="true"
						onClick={onClose}
					/>

					{/* ── Panel ── */}
					<motion.div
						key="panel"
						ref={modalRef}
						role="dialog"
						aria-modal="true"
						aria-labelledby="contact-modal-title"
						variants={panelVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						transition={{
							duration: 0.25,
							ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
						}}
						className="fixed inset-0 z-101 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
					>
						<div className="pointer-events-auto w-full max-w-2xl max-h-[90dvh] flex flex-col border-4 border-black dark:border-white bg-background-light dark:bg-background-dark shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)]">
							{/* ── Header ── */}
							<div className="flex items-center justify-between border-b-4 border-black dark:border-white px-6 py-5 shrink-0">
								<div>
									<p className="text-xs font-black uppercase tracking-widest text-primary mb-0.5">
										GLAZEEN
									</p>
									<h2
										id="contact-modal-title"
										className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tighter text-black dark:text-white leading-none"
									>
										PARLIAMO DEL TUO BUSINESS
									</h2>
								</div>
								<button
									ref={closeButtonRef}
									type="button"
									onClick={onClose}
									className="border-4 border-black dark:border-white p-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors shrink-0 ml-4 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
									aria-label="Chiudi il dialogo"
									id="contact-modal-close-btn"
								>
									<X className="w-5 h-5" strokeWidth={2.5} />
								</button>
							</div>

							{/* ── Tab switcher ── */}
							<div
								className="flex border-b-4 border-black dark:border-white shrink-0"
								role="tablist"
								aria-label="Modalità di contatto"
							>
								{tabs.map((tab) => (
									<button
										key={tab.id}
										type="button"
										role="tab"
										id={`tab-${tab.id}`}
										aria-selected={activeTab === tab.id}
										aria-controls={`tabpanel-${tab.id}`}
										onClick={() => setActiveTab(tab.id)}
										className={cn(
											"flex-1 flex items-center justify-center gap-2 px-4 py-4 text-sm font-black uppercase tracking-widest transition-colors border-r-4 last:border-r-0 border-black dark:border-white cursor-pointer focus-visible:outline-2 focus-visible:outline-primary",
											activeTab === tab.id
												? "bg-black dark:bg-white text-white dark:text-black"
												: "bg-transparent text-black dark:text-white hover:bg-black/8 dark:hover:bg-white/8",
										)}
									>
										{tab.icon}
										<span className="hidden sm:inline">{tab.label}</span>
										<span className="sm:hidden">
											{tab.id === "contact" ? "Scrivici" : "Call"}
										</span>
									</button>
								))}
							</div>

							{/* ── Tab body ── */}
							<div className="overflow-y-auto flex-1">
								<div
									role="tabpanel"
									id={`tabpanel-${activeTab}`}
									aria-labelledby={`tab-${activeTab}`}
									className="p-6"
								>
									<AnimatePresence mode="wait">
										<motion.div
											key={activeTab}
											initial={{
												opacity: 0,
												x: activeTab === "contact" ? -12 : 12,
											}}
											animate={{ opacity: 1, x: 0 }}
											exit={{
												opacity: 0,
												x: activeTab === "contact" ? 12 : -12,
											}}
											transition={{ duration: 0.18, ease: "easeOut" }}
										>
											{activeTab === "contact" ? (
												<ContactForm />
											) : (
												<ScheduleTab />
											)}
										</motion.div>
									</AnimatePresence>
								</div>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "../constants/navigation";
import { Button } from "./ui/button";

export default function Navbar({ onContact }: { onContact?: () => void }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="border-b-4 border-black dark:border-white sticky top-0 z-100 bg-background-light dark:bg-background-dark">
			<div className="container mx-auto flex h-20 items-center justify-between px-6">
				<a href="/" aria-label="Glazeen - Torna alla homepage">
					<img
						src="/glazeen-logo.svg"
						alt="Glazeen Logo"
						className="h-52 w-52"
					/>
				</a>

				{/* Desktop Navigation */}
				<nav
					aria-label="Navigazione principale"
					className="hidden lg:flex items-center gap-10"
				>
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							className="text-sm font-black hover:underline decoration-4 underline-offset-4"
							href={link.href}
						>
							{link.label}
						</a>
					))}
					<Button onClick={onContact}>INIZIA ORA</Button>
				</nav>

				{/* Mobile Menu Toggle */}
				<button
					type="button"
					className="lg:hidden p-2 text-black dark:text-white"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Apri menu di navigazione"
					aria-expanded={isOpen}
					aria-controls="mobile-menu"
				>
					{isOpen ? <X size={32} /> : <Menu size={32} />}
				</button>
			</div>

			{/* Mobile Sliding Sheet */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						id="mobile-menu"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="lg:hidden overflow-hidden bg-background-light dark:bg-background-dark border-b-4 border-black dark:border-white"
					>
						<nav
							aria-label="Navigazione mobile"
							className="flex flex-col p-6 gap-6"
						>
							{NAV_LINKS.map((link) => (
								<a
									key={link.href}
									className="text-2xl font-black hover:text-primary transition-colors"
									href={link.href}
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</a>
							))}
							<Button size="lg" className="w-full mt-4" onClick={onContact}>
								INIZIA ORA
							</Button>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6jyVWiED2iQRskgwYfoAlCudp1Ogb9.png"
              alt="Alabama Barbers"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-foreground font-serif font-bold text-sm md:text-base tracking-wider">ALABAMA</span>
              <span className="block text-[8px] md:text-[10px] text-muted-foreground tracking-[0.2em]">BARBERS</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button 
              size="sm"
              className="bg-silver text-background hover:bg-silver/90 uppercase tracking-widest text-xs font-semibold"
            >
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border/50">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-foreground hover:text-silver transition-colors uppercase tracking-wider text-sm border-b border-border/30 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <Button 
              className="mt-4 bg-silver text-background hover:bg-silver/90 uppercase tracking-widest text-sm font-semibold w-full"
            >
              Agendar Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

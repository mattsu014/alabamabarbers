"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074')] bg-cover bg-center opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6jyVWiED2iQRskgwYfoAlCudp1Ogb9.png"
            alt="Alabama Barbers Logo"
            width={200}
            height={200}
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
            priority
          />
        </div>

        {/* Barber Pole Accent */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-1 h-1">
            <div className="w-8 bg-barber-red" />
            <div className="w-8 bg-barber-white" />
            <div className="w-8 bg-barber-blue" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground uppercase tracking-wider mb-4 md:mb-6 text-balance px-2">
          A Máxima Conveniência Para Quem Tem Uma Rotina Agitada
        </h1>

        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 text-pretty px-2">
          Experimente a praticidade de um serviço de barbearia no conforto da sua casa
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button 
            size="lg" 
            className="bg-silver text-background hover:bg-silver/90 uppercase tracking-widest font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
          >
            Agendar Agora
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-silver/50 text-foreground hover:bg-silver/10 uppercase tracking-widest px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
          >
            Ver Serviços
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-silver/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-silver rounded-full" />
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"

export function Banner() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070')] bg-cover bg-center opacity-30" />
      </div>

      {/* Barber Pole Stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 z-20">
        <div className="h-full w-full bg-gradient-to-b from-barber-red via-barber-white to-barber-blue" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wide mb-4 md:mb-6 max-w-4xl mx-auto text-balance">
          Experimente o Luxo de um Serviço de Barbearia Exclusivo no Conforto da Sua Casa
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
          Nossos profissionais levam até você toda a experiência de uma barbearia de alto padrão
        </p>
        <Button 
          size="lg"
          className="bg-barber-red text-white hover:bg-barber-red/90 uppercase tracking-widest font-semibold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto"
        >
          Agendar Agora
        </Button>
      </div>
    </section>
  )
}

"use client"

import { Scissors, Baby, CircleDot, Sparkles, Droplets, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Scissors,
    name: "Corte Adulto",
    description: "Corte masculino tradicional ou moderno com acabamento premium",
    price: "R$39",
  },
  {
    icon: Baby,
    name: "Corte Infantil",
    description: "Corte especial para crianças com toda paciência e cuidado",
    price: "R$19",
  },
  {
    icon: CircleDot,
    name: "Aparar Barba",
    description: "Modelagem e aparação de barba com navalha e produtos premium",
    price: "R$29",
  },
  {
    icon: Sparkles,
    name: "Acabamento",
    description: "Neck shave e acabamento com navalha para um visual impecável",
    price: "R$39",
  },
  {
    icon: Droplets,
    name: "Hidratação",
    description: "Tratamento de hidratação profunda do couro cabeludo",
    price: "R$10",
  },
  {
    icon: Star,
    name: "Grooming de Barba",
    description: "Tratamento completo com óleos e produtos especiais para barba",
    price: "R$49",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-12 md:py-20 bg-charcoal scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex justify-center gap-1 h-1 mb-4 md:mb-6">
            <div className="w-6 bg-barber-red" />
            <div className="w-6 bg-barber-white" />
            <div className="w-6 bg-barber-blue" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground uppercase tracking-wide mb-3 md:mb-4">
            Conheça Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Oferecemos uma variedade de serviços de alta qualidade para você ficar no estilo
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <Card 
              key={service.name}
              className="bg-card border-border/50 hover:border-silver/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="p-2 md:p-3 bg-silver/10 rounded-lg group-hover:bg-barber-red/10 transition-colors">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-silver group-hover:text-barber-red transition-colors" />
                  </div>
                  <span className="text-xl md:text-2xl font-bold text-silver">{service.price}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 md:mt-12">
          <Button 
            size="lg"
            className="bg-silver text-background hover:bg-silver/90 uppercase tracking-widest font-semibold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto"
          >
            Agendar Atendimento
          </Button>
        </div>
      </div>
    </section>
  )
}

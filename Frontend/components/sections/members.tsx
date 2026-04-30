"use client"

import { Check, Crown } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Básico",
    price: "R$49",
    period: "/mês",
    features: [
      "2 cortes por mês",
      "Atendimento padrão",
      "Agendamento via WhatsApp",
      "Produtos básicos inclusos",
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "R$89",
    period: "/mês",
    features: [
      "Cortes ilimitados",
      "Prioridade no agendamento",
      "Atendimento VIP",
      "Produtos premium inclusos",
      "Grooming de barba mensal",
      "Hidratação capilar",
    ],
    featured: true,
  },
]

export function Members() {
  return (
    <section id="planos" className="py-12 md:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex justify-center gap-1 h-1 mb-4 md:mb-6">
            <div className="w-6 bg-barber-red" />
            <div className="w-6 bg-barber-white" />
            <div className="w-6 bg-barber-blue" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground uppercase tracking-wide mb-3 md:mb-4">
            Seja um Alabama Member
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-lg">
            Mais estilo, mais praticidade e benefícios exclusivos todos os meses
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                plan.featured 
                  ? 'bg-gradient-to-b from-card to-card border-silver/50 ring-1 ring-silver/20' 
                  : 'bg-card border-border/50'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-3 right-3 md:top-4 md:right-4">
                  <Crown className="w-5 h-5 md:w-6 md:h-6 text-silver" />
                </div>
              )}
              <CardHeader className="text-center pb-1 md:pb-2 pt-4 md:pt-6">
                <h3 className={`text-lg md:text-xl font-bold uppercase tracking-wider ${
                  plan.featured ? 'text-silver' : 'text-foreground'
                }`}>
                  {plan.name}
                </h3>
              </CardHeader>
              <CardContent className="text-center px-4 md:px-6 pb-4 md:pb-6">
                <div className="mb-4 md:mb-6">
                  <span className={`text-3xl md:text-5xl font-bold ${
                    plan.featured ? 'text-silver' : 'text-foreground'
                  }`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm md:text-base">{plan.period}</span>
                </div>

                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 md:gap-3">
                      <Check className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 ${
                        plan.featured ? 'text-silver' : 'text-barber-red'
                      }`} />
                      <span className="text-muted-foreground text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full uppercase tracking-widest font-semibold py-4 md:py-6 text-sm md:text-base ${
                    plan.featured 
                      ? 'bg-silver text-background hover:bg-silver/90' 
                      : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
                  }`}
                >
                  Assinar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

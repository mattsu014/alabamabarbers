import { CheckCircle2 } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-12 md:py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            {/* Barber Pole Accent */}
            <div className="flex gap-1 h-1 mb-6">
              <div className="w-6 bg-barber-red" />
              <div className="w-6 bg-barber-white" />
              <div className="w-6 bg-barber-blue" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground uppercase tracking-wide mb-4 md:mb-6">
              Seu Barbeiro Pessoal no Conforto da Sua Casa
            </h2>

            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Na Alabama Barbers, acreditamos que todo homem merece um corte impecável sem 
              precisar sair de casa. Nossa equipe de profissionais altamente qualificados 
              vai até você, levando toda a experiência de uma barbearia premium.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-1 bg-barber-red/20 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-barber-red" />
                </div>
                <span className="text-foreground">
                  <strong className="text-silver">99%</strong> de satisfação dos clientes
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 bg-barber-blue/20 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-barber-blue" />
                </div>
                <span className="text-foreground">
                  Mais de <strong className="text-silver">10 anos</strong> de experiência
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 bg-silver/20 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-silver" />
                </div>
                <span className="text-foreground">
                  Atendimento <strong className="text-silver">personalizado</strong> e exclusivo
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last">
            <div className="aspect-[4/3] sm:aspect-[4/5] relative rounded-lg overflow-hidden">
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976')] bg-cover bg-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Decorative Element - hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border-2 border-silver/30 rounded-lg -z-10" />
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-2 border-barber-red/30 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

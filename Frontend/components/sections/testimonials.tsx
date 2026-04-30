import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section id="avaliacoes" className="py-12 md:py-20 bg-charcoal scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex justify-center gap-1 h-1 mb-4 md:mb-6">
            <div className="w-6 bg-barber-red" />
            <div className="w-6 bg-barber-white" />
            <div className="w-6 bg-barber-blue" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground uppercase tracking-wide mb-3 md:mb-4">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        {/* Ratings */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto mb-8 md:mb-12">
          {/* Google Rating */}
          <Card className="bg-card border-border/50">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">Google</div>
              <div className="flex justify-center gap-0.5 md:gap-1 mb-1 md:mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-5 md:h-5 fill-silver text-silver" />
                ))}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-silver mb-0.5 md:mb-1">4.9</div>
              <div className="text-xs md:text-sm text-muted-foreground">196 avaliações</div>
            </CardContent>
          </Card>

          {/* TripAdvisor Rating */}
          <Card className="bg-card border-border/50">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">TripAdvisor</div>
              <div className="flex justify-center gap-0.5 md:gap-1 mb-1 md:mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-5 md:h-5 fill-silver text-silver" />
                ))}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-silver mb-0.5 md:mb-1">5.0</div>
              <div className="text-xs md:text-sm text-muted-foreground">196 avaliações</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Testimonial */}
        <Card className="bg-card border-silver/20 max-w-4xl mx-auto">
          <CardContent className="p-5 sm:p-8 md:p-12 text-center relative">
            <Quote className="w-8 h-8 md:w-12 md:h-12 text-silver/20 absolute top-4 left-4 md:top-6 md:left-6" />
            <blockquote className="text-base sm:text-lg md:text-2xl text-foreground italic leading-relaxed mb-4 md:mb-6 pt-6 sm:pt-0">
              &quot;Experiência incrível! O barbeiro veio até minha casa, super pontual e 
              profissional. O corte ficou perfeito e não precisei sair de casa. 
              Recomendo demais a Alabama Barbers!&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-1 mb-2 md:mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-barber-red text-barber-red" />
              ))}
            </div>
            <cite className="text-silver font-semibold not-italic text-sm md:text-base">Carlos Eduardo</cite>
            <p className="text-muted-foreground text-xs md:text-sm">Cliente desde 2022</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

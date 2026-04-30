import { Award, Star, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Award,
    title: "Licenciados",
    description: "Profissionais qualificados e certificados com formação especializada",
    color: "text-barber-red",
    bgColor: "bg-barber-red/10",
  },
  {
    icon: Star,
    title: "Especialistas",
    description: "Alta qualidade em cada corte, com técnicas modernas e tradicionais",
    color: "text-silver",
    bgColor: "bg-silver/10",
  },
  {
    icon: Shield,
    title: "Confiável",
    description: "Mais de centenas de clientes satisfeitos e avaliações positivas",
    color: "text-barber-blue",
    bgColor: "bg-barber-blue/10",
  },
]

export function WhyUs() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex justify-center gap-1 h-1 mb-4 md:mb-6">
            <div className="w-6 bg-barber-red" />
            <div className="w-6 bg-barber-white" />
            <div className="w-6 bg-barber-blue" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground uppercase tracking-wide mb-3 md:mb-4">
            Por Que Escolher a Alabama Barbers
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.title}
              className="bg-card border-border/50 text-center hover:border-silver/30 transition-all duration-300"
            >
              <CardContent className="p-5 md:p-8">
                <div className={`inline-flex p-3 md:p-4 ${feature.bgColor} rounded-full mb-4 md:mb-6`}>
                  <feature.icon className={`w-6 h-6 md:w-8 md:h-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground uppercase tracking-wider mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

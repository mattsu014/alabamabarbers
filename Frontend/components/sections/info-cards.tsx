import { MapPin, Phone, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const infoItems = [
  {
    icon: MapPin,
    title: "Endereço",
    description: "Rua das Barbearias, 123 - Centro",
  },
  {
    icon: Phone,
    title: "Telefone",
    description: "(11) 99999-9999",
  },
  {
    icon: Clock,
    title: "Horário",
    description: "Seg-Sáb: 9h às 20h",
  },
]

export function InfoCards() {
  return (
    <section className="py-8 md:py-16 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
          {infoItems.map((item) => (
            <Card 
              key={item.title} 
              className="bg-card border-border/50 hover:border-silver/30 transition-colors"
            >
              <CardContent className="p-4 md:p-6 flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-silver/10 rounded-lg flex-shrink-0">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-silver" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-0.5 md:mb-1">
                    {item.title}
                  </h3>
                  <p className="text-foreground font-medium text-sm md:text-base truncate">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

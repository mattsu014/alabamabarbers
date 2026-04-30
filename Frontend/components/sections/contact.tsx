"use client"

import { Phone, Mail, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contato" className="py-12 md:py-20 bg-charcoal scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div>
            <div className="flex gap-1 h-1 mb-4 md:mb-6">
              <div className="w-6 bg-barber-red" />
              <div className="w-6 bg-barber-white" />
              <div className="w-6 bg-barber-blue" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground uppercase tracking-wide mb-4 md:mb-6">
              Entre em Contato
            </h2>

            <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              Agende seu atendimento ou tire suas dúvidas. Nossa equipe está pronta para 
              oferecer a melhor experiência em barbearia.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-silver/10 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-silver" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Telefone</p>
                  <p className="text-foreground font-medium text-sm md:text-base">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-silver/10 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-silver" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">E-mail</p>
                  <p className="text-foreground font-medium text-sm md:text-base break-all">contato@alabamabarbers.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-barber-red/10 rounded-lg flex-shrink-0">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-barber-red" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">WhatsApp</p>
                  <p className="text-foreground font-medium text-sm md:text-base">(11) 99999-9999</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border/50">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground uppercase tracking-wider mb-2 block">
                      Nome Completo
                    </label>
                    <Input 
                      placeholder="Seu nome" 
                      className="bg-input border-border focus:border-silver"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground uppercase tracking-wider mb-2 block">
                      Telefone
                    </label>
                    <Input 
                      placeholder="(00) 00000-0000" 
                      className="bg-input border-border focus:border-silver"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground uppercase tracking-wider mb-2 block">
                    E-mail
                  </label>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="bg-input border-border focus:border-silver"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground uppercase tracking-wider mb-2 block">
                    Assunto
                  </label>
                  <Input 
                    placeholder="Motivo do contato" 
                    className="bg-input border-border focus:border-silver"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground uppercase tracking-wider mb-2 block">
                    Mensagem
                  </label>
                  <Textarea 
                    placeholder="Sua mensagem..." 
                    rows={4}
                    className="bg-input border-border focus:border-silver resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-silver text-background hover:bg-silver/90 uppercase tracking-widest font-semibold py-6"
                >
                  Agendar Atendimento
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

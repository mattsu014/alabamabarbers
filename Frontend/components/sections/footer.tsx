import { Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Map Section */}
      <div className="h-64 w-full bg-charcoal relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975449831054!2d-46.65479892487881!3d-23.56149597880067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1703024012345!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Alabama Barbers"
        />
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6jyVWiED2iQRskgwYfoAlCudp1Ogb9.png"
              alt="Alabama Barbers"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <div>
              <span className="text-foreground font-serif font-bold tracking-wider">ALABAMA</span>
              <span className="block text-xs text-muted-foreground tracking-[0.3em]">BARBERS</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="p-2 bg-silver/10 rounded-full hover:bg-silver/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-silver" />
            </a>
            <a 
              href="#" 
              className="p-2 bg-silver/10 rounded-full hover:bg-silver/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-silver" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alabama Barbers. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

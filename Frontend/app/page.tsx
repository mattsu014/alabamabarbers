import { Hero } from "@/components/sections/hero"
import { InfoCards } from "@/components/sections/info-cards"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Banner } from "@/components/sections/banner"
import { WhyUs } from "@/components/sections/why-us"
import { Testimonials } from "@/components/sections/testimonials"
import { Members } from "@/components/sections/members"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <InfoCards />
      <About />
      <Services />
      <Banner />
      <WhyUs />
      <Testimonials />
      <Members />
      <Contact />
      <Footer />
    </main>
  )
}

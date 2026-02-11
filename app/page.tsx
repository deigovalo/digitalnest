import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";
import { Team } from "@/components/team";
import { TrustedBy } from "@/components/trusted-by";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <TrustedBy />
      <Contact />
      <Footer />
    </main>
  );
}

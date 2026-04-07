import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <h1 className="text-4xl font-bold text-center py-8">meme</h1>
      <About />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}

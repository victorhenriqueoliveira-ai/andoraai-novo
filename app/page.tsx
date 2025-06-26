import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Problems } from '@/components/sections/Problems';
import { AiDemo } from '@/components/sections/AiDemo';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <AiDemo />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
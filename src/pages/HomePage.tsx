import { Hero } from '../components/home/Hero';
import { TrustBar } from '../components/home/TrustBar';
import { Services } from '../components/home/Services';
import { HowWeWork } from '../components/home/HowWeWork';
import { Mandates } from '../components/home/Mandates';
import { Testimonials } from '../components/home/Testimonials';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <HowWeWork />
      <Mandates />
      <Testimonials />
    </>
  );
}

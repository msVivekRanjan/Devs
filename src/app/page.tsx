import { Hero } from '@/components/sections/hero';
import { TrustedBy } from '@/components/sections/trusted-by';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Projects } from '@/components/sections/projects';
import { Testimonials } from '@/components/sections/testimonials';
import { Gallery } from '@/components/sections/gallery';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function Home() {
  return (
    <div className="flex flex-col pt-24 md:pt-32">
      <div className="flex flex-col gap-24 md:gap-40">
        <Hero />
        <AnimatedSection id="trusted-by" className="pt-24">
          <TrustedBy />
        </AnimatedSection>
        <AnimatedSection id="about" className="pt-24">
          <About />
        </AnimatedSection>
        <AnimatedSection id="services" className="pt-24">
          <Services />
        </AnimatedSection>
        <AnimatedSection id="projects" className="pt-24">
          <Projects />
        </AnimatedSection>
        <AnimatedSection id="testimonials" className="pt-24">
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection id="gallery" className="pt-24">
          <Gallery />
        </AnimatedSection>
        <AnimatedSection id="faq" className="pt-24">
          <Faq />
        </AnimatedSection>
        <AnimatedSection id="contact" className="pt-24">
          <Contact />
        </AnimatedSection>
      </div>
    </div>
  );
}

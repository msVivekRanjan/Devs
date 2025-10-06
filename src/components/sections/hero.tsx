'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LampContainer } from '@/components/ui/lamp';

export function Hero() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="flex flex-col items-center text-center"
      >
        <h1 className="bg-gradient-to-br from-foreground/90 to-foreground/50 bg-clip-text text-5xl font-medium tracking-tight text-transparent md:text-7xl">
          Build beautiful websites <br /> with DevSpace
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          We are a digital agency that builds beautiful, fast, and reliable
          websites. Join us on our journey to the final frontier of the web.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="#projects">
            <Button size="lg">Our Work</Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </LampContainer>
  );
}

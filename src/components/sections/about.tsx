'use client';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import Image from 'next/image';
import { teamMembers } from '@/app/lib/team-data';

const featuredMembers = teamMembers.slice(0, 4);

export function About() {
  return (
    <section className="space-y-12">
      <SectionHeading title="Who We Are" subtitle="Meet the DevSpace Team" />
      <div className="mx-auto max-w-3xl text-center text-lg text-muted-foreground">
        <p>
          We are DevSpace, a collective of passionate developers, designers, and
          innovators dedicated to crafting next-generation digital experiences.
          Our journey began with a shared vision: to build software that is not
          only functional and robust but also beautiful and a joy to use.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featuredMembers.map((member) => (
          <Link
            key={member.slug}
            href={`/team/${member.slug}`}
            className="group block"
          >
            <Card className="h-full overflow-hidden border-border/30 bg-card/50 transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
              <CardContent className="relative p-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  data-ai-hint={member.hint}
                  className="aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="font-headline text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
                <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-background/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4 text-foreground" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Link href="/team">
          <Button size="lg">View Entire Team</Button>
        </Link>
      </div>
    </section>
  );
}

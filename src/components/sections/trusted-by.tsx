import { SectionHeading } from '@/components/ui/section-heading';
import {
  Code,
  Lightbulb,
  Rocket,
  Shield,
  Zap,
  Layers,
} from 'lucide-react';

const companies = [
  { name: 'QuantumLeap', icon: <Rocket /> },
  { name: 'Bright Ideas', icon: <Lightbulb /> },
  { name: 'CodeCrafters', icon: <Code /> },
  { name: 'Secure Solutions', icon: <Shield /> },
  { name: 'Agile Innovations', icon: <Zap /> },
  { name: 'Layered Reality', icon: <Layers /> },
];

export function TrustedBy() {
  const extendedCompanies = [...companies, ...companies];
  return (
    <section className="space-y-12">
      <SectionHeading
        title="Trusted By"
        subtitle="Powering innovation for leading companies"
      />
      <div
        className="group relative overflow-hidden whitespace-nowrap"
        style={
          {
            '--gap': '1rem',
            '--duration': '40s',
          } as React.CSSProperties
        }
      >
        <div className="flex w-max animate-scroll gap-4 group-hover:[animation-play-state:paused]">
          {extendedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 rounded-lg bg-card/50 p-4"
            >
              <div className="text-primary">{company.icon}</div>
              <span className="text-lg font-semibold text-muted-foreground">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

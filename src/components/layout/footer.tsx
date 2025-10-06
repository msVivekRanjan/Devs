import { CodeXml, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/20 py-10">
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Link href="#" className="flex items-center gap-2" aria-label="Home">
            <CodeXml className="h-7 w-7 text-primary" />
            <span className="font-headline text-xl font-bold text-foreground">
              DevSpace
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Crafting the future of the web, one line of code at a time.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:items-end">
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevSpace Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

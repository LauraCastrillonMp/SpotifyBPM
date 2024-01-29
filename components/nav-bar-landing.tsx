import Link from "next/link";

import { Icons } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "./ui/mode-toogle";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NavBarLanding() {
  return (
    <header className="flex justify-between items-center py-2 px-10 sticky border-b border-white/10 backdrop-blur">
      <span className="text-xl font-bold">Spotify Playlist To</span>
      <nav className="flex items-center gap-1">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-9 px-0"
            )}
          >
            <Icons.gitHub className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-9 px-0"
            )}
          >
            <Icons.twitter className="h-3 w-3 fill-current" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}

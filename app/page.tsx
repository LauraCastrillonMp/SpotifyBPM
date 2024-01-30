import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-2 md:px-8 py-52 md:py-44">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-7">
          <div className="space-y-4 flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Transfer your playlists in seconds
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Easily migrate your music from one platform to another with our
              fast and secure service.
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="#" className={cn(buttonVariants())}>
              Get Started
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <Icons.gitHub className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

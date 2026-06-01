import Image from "next/image";
import { ModeToggle } from "./ui/modetoggle";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[90%] max-w-5xl flex-wrap items-center justify-between gap-2 rounded-xl bg-teal-50/10 px-4 py-2 shadow-lg shadow-neutral-600/5 backdrop-blur-md sm:py-3">
      <Link href="/" className="flex cursor-pointer items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-lg p-2 text-xs font-bold uppercase tracking-widest text-green-200/80 sm:text-sm">
          <Image src="/icon.svg" alt="Lens" width={16} height={16} />
          <svg
            className="h-3 w-3 text-teal-300 sm:h-4 sm:w-4 md:h-5 md:w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="6" />
          </svg>
          Lens
        </span>
      </Link>
      <div className="flex gap-8">
        <Link
          href="https://github.com/ashishxjhaa/lens"
          target="_blank"
          className="group relative mx-4 flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
        >
          <span className="flex items-center gap-2 font-bold transition-transform duration-500 ease-in-out group-hover:-translate-x-2">
            <FaGithub />
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest">
              GitHub
            </div>
          </span>
          <IconArrowUpRight
            size={48}
            strokeWidth={1}
            className="absolute -right-8 h-5.5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          />
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

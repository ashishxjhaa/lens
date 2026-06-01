import Image from "next/image";
import { ModeToggle } from "./ui/modetoggle";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <nav className="fixed max-w-5xl w-[90%] md:w-full h-fit mx-auto top-4 z-50 flex items-center justify-between place-self-center flex-wrap gap-2 px-4 py-2 sm:py-3 mt-4 rounded-xl bg-teal-50/10 shadow-lg shadow-neutral-600/5 backdrop-blur-md">
      <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
        <span className="inline-flex items-center gap-2 text-green-200/80 font-bold rounded-lg uppercase tracking-widest shadow-2xl text-xs sm:text-sm p-2">
          <Image src="/icon.svg" alt="SaveVideo" width={16} height={16} />
          <svg
            className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-teal-300"
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
          className="opacity-70 flex items-center gap-2 mx-4 relative group transition-opacity hover:opacity-100"
        >
          <span className="flex items-center font-bold gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-x-2">
            <FaGithub />
            <div>GitHub</div>
          </span>
          <IconArrowUpRight
            size={48}
            strokeWidth={1}
            className="absolute h-5.5 -right-8 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          />
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

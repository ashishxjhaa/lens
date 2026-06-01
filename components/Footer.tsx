"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full mt-20 mb-8">
      <div className="border-t border-gray-600 mask-[linear-gradient(to_right,transparent,black,transparent)]" />
      <div className="px-4">
        <div className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <Image src="/icon.svg" alt="Lens" width={16} height={16} />
              <span className="text-xl font-bold tracking-tight">Lens</span>
              <span className="text-xs text-teal-400 font-medium bg-teal-400/10 px-2 py-1 rounded-full">
                v0.1
              </span>
            </div>
          </div>

          <Link
            href="https://x.com/ashishxjha"
            className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX className="w-3.5 h-3.5" />
            <span>Twitter</span>
          </Link>

          <div className="flex items-center gap-2 text-sm">
            <span className="opacity-75">© {currentYear} Lens</span>
            <span className="text-teal-400">•</span>
            <span className="opacity-75">Made with</span>
            <Heart className="w-4 h-4 text-teal-400 fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
}

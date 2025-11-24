"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur-sm bg-bg/40 border-b border-[#07120C]">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="RoCart Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="text-lg font-semibold tracking-tight text-white">RoCart</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#06100A]/40 px-4 py-2 rounded-full text-sm text-muted">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90 mr-2">
                <path d="M12 2v20M2 12h20" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Choose a game</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="ml-2">
                <path d="M6 9l6 6 6-6" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center text-sm text-white bg-[#0A1B12] px-5 py-3 rounded-full border border-transparent hover:border-[#0F241A] transition gap-2">
              <Image src="/icons/flag-us.svg" alt="Language" width={16} height={16} className="mr-0" />
              <span className="text-sm">English / USD</span>
            </button>

            <button className="flex items-center rounded-full btn-gradient btn-large btn-glow text-black hover:opacity-100 transition-shadow duration-150 shadow-xl gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="inline-block">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 20c0-2.21 3.58-4 8-4s8 1.79 8 4v1H4v-1z" fill="#04120b" />
              </svg>
              <span>Log In</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? (
              <svg width="26" height="26" stroke="currentColor">
                <path d="M6 6l14 14M6 20L20 6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="26" height="26" stroke="currentColor">
                <path d="M3 6h20M3 12h20M3 18h20" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="flex flex-col gap-4 pb-6 pt-4 md:hidden animate-slideDown">
            <MobileLink href="#home">Home</MobileLink>
            <MobileLink href="#catalog">Catalog</MobileLink>
            <MobileLink href="#pricing">Pricing</MobileLink>
            <MobileLink href="#contact">Contact</MobileLink>

            <button className="mt-2 w-full rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-black">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

/* Reusable component for desktop links */
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-muted hover:text-primary transition"
    >
      {children}
    </a>
  );
}

/* Reusable component for mobile links */
function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm font-medium text-white/90">
      {children}
    </a>
  );
}

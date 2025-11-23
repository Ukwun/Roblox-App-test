"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-[#0B1411] bg-bg/80 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="RoCart Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
            <span className="text-lg font-semibold tracking-tight text-white">
              RoCart
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#catalog">Catalog</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center text-sm text-muted bg-transparent px-3 py-1 rounded-md border border-surface/40">
              <Image
                src="/icons/download 1.png"
                alt="Language"
                width={16}
                height={16}
                className="mr-2"
              />
              English / USD
            </button>

            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition">
              Log In
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

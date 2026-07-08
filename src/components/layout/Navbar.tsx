"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Why Rudhra", href: "/#why-rudhra" },
  { label: "Gallery", href: "/#showcase" },
  { label: "Contact", href: "/contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-out ${
        isScrolled || isOpen
          ? "border-navy/10 bg-white/88 shadow-[0_14px_38px_rgba(47,65,86,0.10)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-soft flex h-[3.25rem] items-center justify-between gap-4 sm:h-14 sm:gap-6 lg:h-16">
        <Link href="/" className="group flex min-w-0 items-center">
          <Image
            src="/images/logos/logo-rcpl-navbar-transparent.png"
            alt="Rudhra Constructions"
            width={623}
            height={250}
            priority
            className="h-8 w-auto max-w-[10.5rem] object-contain sm:h-9 sm:max-w-[12rem] lg:h-10 lg:max-w-[13rem]"
          />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link border-b border-transparent py-2.5 transition duration-200 hover:border-teal">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden btn-primary whitespace-nowrap px-6 py-3 text-[0.94rem] font-semibold tracking-[-0.004em] md:inline-flex">
          Book Site Visit
        </Link>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-navy/15 bg-white/80 text-navy shadow-card lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="grid gap-1">
            <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {isOpen ? (
        <nav className="container-soft grid gap-2 border-t border-navy/10 bg-white/90 py-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link rounded-xl px-3 py-3 transition hover:bg-mist"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-2 justify-center text-center" onClick={() => setIsOpen(false)}>
            Book Site Visit
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

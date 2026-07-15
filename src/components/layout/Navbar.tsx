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
  const isHeroTop = !isScrolled && !isOpen;

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
        isHeroTop
          ? "border-white/10 bg-navy/24 shadow-[0_14px_38px_rgba(0,0,0,0.12)] backdrop-blur-md"
          : "border-navy/14 bg-[linear-gradient(135deg,rgba(211,200,194,0.94),rgba(159,185,199,0.88))] shadow-[0_14px_38px_rgba(47,65,86,0.16)] backdrop-blur-xl"
      }`}
    >
      <div
        className={`container-soft flex items-center justify-between gap-4 transition-[height] duration-300 ease-out sm:gap-6 ${
          isHeroTop ? "h-16 sm:h-20 lg:h-24" : "h-[3.25rem] sm:h-14 lg:h-16"
        }`}
      >
        <Link href="/" className="group flex min-w-0 items-center">
          <Image
            src={isHeroTop ? "/images/logos/logo-white.png" : "/images/logos/logo-rcpl-navbar-transparent.png"}
            alt="Rudhra Constructions"
            width={isHeroTop ? 274 : 623}
            height={isHeroTop ? 68 : 250}
            priority
            className={`w-auto object-contain transition-all duration-300 ease-out ${
              isHeroTop
                ? "h-11 max-w-[12.5rem] drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)] sm:h-14 sm:max-w-[15rem] lg:h-16 lg:max-w-[17rem]"
                : "h-8 max-w-[10.5rem] sm:h-9 sm:max-w-[12rem] lg:h-10 lg:max-w-[13rem]"
            }`}
          />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link border-b border-transparent py-2.5 transition duration-200 ${
                isHeroTop
                  ? "!text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] hover:border-white/80 hover:!text-sky"
                  : "hover:border-teal"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className={`hidden whitespace-nowrap rounded-lg px-6 py-3 text-[0.94rem] font-semibold tracking-[-0.004em] transition md:inline-flex ${
            isHeroTop
              ? "border border-white/28 bg-white/16 text-white shadow-[0_12px_28px_rgba(0,0,0,0.24)] backdrop-blur hover:bg-white hover:text-navy"
              : "btn-primary"
          }`}
        >
          Book Site Visit
        </Link>
        <button
          type="button"
          className={`grid h-10 w-10 place-items-center rounded-lg border shadow-card lg:hidden ${
            isHeroTop ? "border-white/24 bg-navy/35 text-white backdrop-blur" : "border-navy/15 bg-[#d3c8c2]/88 text-navy"
          }`}
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
        <nav className="container-soft grid gap-2 border-t border-navy/12 bg-[linear-gradient(135deg,rgba(211,200,194,0.96),rgba(159,185,199,0.9))] py-4 lg:hidden">
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

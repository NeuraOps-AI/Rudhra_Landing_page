"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    name: "Royal Village 2",
    location: "Gandi Maisamma, Hyderabad",
    tag: "99 majestic triplex villas",
    caption: "A refined villa community shaped for privacy, open space, and a calm everyday rhythm.",
    image: "/images/lifestyle-carousel/01-royal-village-2.jpg"
  },
  {
    name: "Rudhra Estates",
    location: "Bowrampet, Hyderabad",
    tag: "164 flats, 2 BHK and 3 BHK",
    caption: "Vertical living planned with light, views, and the comfort families expect from a modern address.",
    image: "/images/lifestyle-carousel/02-rudhra-estates.jpg"
  },
  {
    name: "",
    location: "",
    tag: "",
    caption: "Upcoming high-rise living envisioned with clarity, convenience, and a future-ready skyline presence.",
    image: "/images/lifestyle-carousel/03-sketch-high-rise.jpg"
  },
  {
    name: "",
    location: "",
    tag: "",
    caption: "A villa vision for families who want more space, more quiet, and a home that feels personal.",
    image: "/images/lifestyle-carousel/04-sketch-villa.jpg"
  },
  {
    name: "Park Avenue",
    location: "Bowrampet, Hyderabad",
    tag: "265 villas",
    caption: "Premium villa living with elegant streetscapes, open spaces, and a composed gated community feel.",
    image: "/images/lifestyle-carousel/05-park-avenue.jpg"
  },
  {
    name: "Hasthina",
    location: "Pragathi Nagar, Hyderabad",
    tag: "Life is a celebration here",
    caption: "A completed community built around connection, daily convenience, and familiar neighborhood comfort.",
    image: "/images/lifestyle-carousel/06-hasthina.jpg"
  },
  {
    name: "Royal Village",
    location: "Pragathi Nagar, Hyderabad",
    tag: "The next dimension of royal life",
    caption: "An established address that reflects Rudhra's early promise of thoughtful family living.",
    image: "/images/lifestyle-carousel/07-royal-village.jpg"
  },
  {
    name: "Bhuvi",
    location: "Pragathi Nagar, Hyderabad",
    tag: "Homes inspired by you",
    caption: "Homes designed around practical layouts, city access, and the everyday needs of growing families.",
    image: "/images/lifestyle-carousel/08-bhuvi.jpg"
  },
  {
    name: "Green Lands",
    location: "Bodhan, Nizamabad",
    tag: "Charming villas for a perfect abode",
    caption: "A peaceful villa setting where green surroundings and independent living come together naturally.",
    image: "/images/lifestyle-carousel/09-green-lands.jpg"
  }
];

export function LifestyleShowcase() {
  const [active, setActive] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [timerKey]);

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      }
      if (event.key === "ArrowLeft") {
        setLightboxIndex((current) => (current === null ? current : (current - 1 + slides.length) % slides.length));
      }
      if (event.key === "ArrowRight") {
        setLightboxIndex((current) => (current === null ? current : (current + 1) % slides.length));
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  const selectSlide = (index: number) => {
    setActive(index);
    setTimerKey((key) => key + 1);
  };

  const goToPrevious = () => {
    selectSlide((active - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    selectSlide((active + 1) % slides.length);
  };

  const goToPreviousLightbox = () => {
    setLightboxIndex((current) => (current === null ? current : (current - 1 + slides.length) % slides.length));
  };

  const goToNextLightbox = () => {
    setLightboxIndex((current) => (current === null ? current : (current + 1) % slides.length));
  };

  const getCoverflowOffset = (index: number) => {
    const raw = index - active;
    if (raw > slides.length / 2) {
      return raw - slides.length;
    }
    if (raw < -slides.length / 2) {
      return raw + slides.length;
    }
    return raw;
  };

  return (
    <section id="showcase" className="overflow-hidden pb-4 pt-8 text-navy sm:pb-4 sm:pt-10 lg:pb-4 lg:pt-12">
      <div className="container-soft">
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Life, in perfect balance</p>
            <h2 className="mt-2 font-sans text-2xl font-semibold leading-tight tracking-[-0.04em] text-navy md:text-3xl lg:whitespace-nowrap">
              A closer look at life with Rudhra.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/55 bg-[#eee7e2]/88 text-navy shadow-[0_12px_28px_rgba(47,65,86,0.18)] transition hover:-translate-y-0.5 hover:border-white/80 hover:bg-[#bacdd6] hover:text-navy"
              aria-label="Previous lifestyle slide"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/55 bg-[#eee7e2]/88 text-navy shadow-[0_12px_28px_rgba(47,65,86,0.18)] transition hover:-translate-y-0.5 hover:border-white/80 hover:bg-[#bacdd6] hover:text-navy"
              aria-label="Next lifestyle slide"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/55 bg-[linear-gradient(145deg,rgba(238,231,226,0.96)_0%,rgba(226,216,210,0.98)_54%,rgba(186,205,214,0.92)_100%)] shadow-[0_24px_58px_rgba(47,65,86,0.2)]">
          <div className="relative h-[19rem] sm:h-[22rem] lg:h-[24rem] xl:h-[26rem]">
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {slides.map((item, index) => (
                <div key={item.image} className="relative h-full w-full shrink-0">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    className="absolute inset-0 cursor-zoom-in"
                    aria-label={`Open ${item.name || "Rudhra project"} image fullscreen`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name || "Rudhra project carousel image"}
                      fill
                      sizes="(max-width: 768px) 100vw, 1180px"
                      className="object-cover object-center"
                      priority={index === 0}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="absolute left-4 top-4 z-10 rounded-full border border-white/30 bg-navy/48 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md sm:left-6 sm:top-6">
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>
          </div>

          <div className="grid border-t border-white/45 bg-[linear-gradient(145deg,rgba(238,231,226,0.96)_0%,rgba(226,216,210,0.98)_54%,rgba(186,205,214,0.92)_100%)] lg:grid-cols-[0.38fr_0.62fr]">
            <div className="border-b border-navy/10 px-5 py-4 sm:px-6 lg:border-b-0 lg:border-r lg:border-navy/10 lg:px-7">
              <div>
                {slides[active].tag ? (
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-teal">{slides[active].tag}</p>
                ) : (
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-teal">Rudhra Vision</p>
                )}
              <h3 className="mt-1.5 font-sans text-xl font-semibold leading-tight tracking-[-0.035em] text-navy sm:text-2xl">
                  {slides[active].name || "Coming Soon"}
                </h3>
                {slides[active].location ? (
                  <p className="mt-2 text-sm font-semibold text-teal">{slides[active].location}</p>
                ) : null}
              </div>
              <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-muted">
                {slides[active].caption}
              </p>
            </div>

          <div className="relative h-[8.75rem] overflow-hidden px-4 py-2 sm:h-[10rem]">
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/55 bg-[#eee7e2]/88 text-navy shadow-[0_12px_28px_rgba(47,65,86,0.18)] backdrop-blur transition hover:border-white/80 hover:bg-[#bacdd6] hover:text-navy"
              aria-label="Previous lifestyle slide"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            {slides.map((item, index) => {
              const offset = getCoverflowOffset(index);
              const visible = Math.abs(offset) <= 2;
              const isActive = offset === 0;

              return (
                <button
                  type="button"
                  key={item.image}
                  onClick={() => selectSlide(index)}
                  className={`absolute left-1/2 top-1/2 h-24 w-[7rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border bg-[#eee7e2] text-left shadow-[0_16px_34px_rgba(47,65,86,0.24)] transition-all duration-500 ease-out sm:h-32 sm:w-[8.75rem] ${
                    isActive ? "border-white ring-2 ring-teal/45" : "border-white/70"
                  } ${visible ? "pointer-events-auto" : "pointer-events-none opacity-0"}`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${offset * 5.2}rem) scale(${isActive ? 1 : 0.82 - Math.min(Math.abs(offset), 2) * 0.06})`,
                    zIndex: 20 - Math.abs(offset),
                    opacity: visible ? (isActive ? 1 : 0.66) : 0,
                    filter: isActive ? "none" : "saturate(0.78) brightness(0.88)"
                  }}
                >
                  <Image src={item.image} alt="" fill sizes="224px" className="object-cover" />
                </button>
              );
            })}
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-3 top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/55 bg-[#eee7e2]/88 text-navy shadow-[0_12px_28px_rgba(47,65,86,0.18)] backdrop-blur transition hover:border-white/80 hover:bg-[#bacdd6] hover:text-navy"
              aria-label="Next lifestyle slide"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
          </div>
        </div>
      </div>

      {lightboxIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] bg-[rgba(13,23,34,0.96)] text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen project image"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute left-4 top-4 z-20 flex h-11 items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 text-sm font-bold text-white shadow-[0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur transition hover:bg-white/18 sm:left-6 sm:top-6"
            aria-label="Back to carousel"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back
          </button>
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/12 text-white shadow-[0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur transition hover:bg-white/18 sm:right-6 sm:top-6"
            aria-label="Close fullscreen image"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goToPreviousLightbox}
            className="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/12 text-white backdrop-blur transition hover:bg-white/18 sm:left-6"
            aria-label="Previous fullscreen image"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goToNextLightbox}
            className="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/12 text-white backdrop-blur transition hover:bg-white/18 sm:right-6"
            aria-label="Next fullscreen image"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="relative h-full w-full px-5 py-20 sm:px-16 sm:py-24">
            <Image
              src={slides[lightboxIndex].image}
              alt={slides[lightboxIndex].name || "Rudhra project fullscreen image"}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute bottom-5 left-1/2 z-20 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-2xl border border-white/15 bg-black/28 px-5 py-3 text-center backdrop-blur sm:bottom-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
              {String(lightboxIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-lg font-semibold">{slides[lightboxIndex].name || "Rudhra Vision"}</h3>
          </div>
        </div>
      ) : null}
    </section>
  );
}

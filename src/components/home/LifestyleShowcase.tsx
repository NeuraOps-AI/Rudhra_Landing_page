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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [timerKey]);

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
    <section id="showcase" className="overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#EEF5F8_100%)] py-8 text-navy sm:py-10 lg:py-12">
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
              className="grid h-10 w-10 place-items-center rounded-full border border-navy/15 bg-white text-navy shadow-card transition hover:-translate-y-0.5 hover:border-teal hover:text-teal"
              aria-label="Previous lifestyle slide"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="grid h-10 w-10 place-items-center rounded-full border border-navy/15 bg-white text-navy shadow-card transition hover:-translate-y-0.5 hover:border-teal hover:text-teal"
              aria-label="Next lifestyle slide"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-[0_28px_80px_rgba(47,65,86,0.14)]">
          <div className="relative h-[19rem] sm:h-[22rem] lg:h-[24rem] xl:h-[26rem]">
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {slides.map((item, index) => (
                <div key={item.image} className="relative h-full w-full shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name || "Rudhra project carousel image"}
                    fill
                    sizes="(max-width: 768px) 100vw, 1180px"
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            <div className="absolute left-4 top-4 z-10 rounded-full border border-navy/10 bg-white/72 px-4 py-2 text-sm font-semibold text-navy/80 backdrop-blur-md sm:left-6 sm:top-6">
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>
          </div>

          <div className="grid border-t border-navy/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(238,245,248,0.9))] lg:grid-cols-[0.38fr_0.62fr]">
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
              className="absolute left-3 top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-navy/12 bg-white/86 text-navy shadow-card backdrop-blur transition hover:border-teal hover:text-teal"
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
                  className={`absolute left-1/2 top-1/2 h-24 w-[7rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border bg-white text-left shadow-[0_14px_30px_rgba(47,65,86,0.16)] transition-all duration-500 ease-out sm:h-32 sm:w-[8.75rem] ${
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
              className="absolute right-3 top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-navy/12 bg-white/86 text-navy shadow-card backdrop-blur transition hover:border-teal hover:text-teal"
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
    </section>
  );
}

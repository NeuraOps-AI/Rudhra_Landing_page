import Link from "next/link";
import { PingPongHeroVideo } from "@/components/home/PingPongHeroVideo";
import { AnimatedHeroTitle } from "@/components/home/AnimatedHeroTitle";

const heroVideoSrc =
  "/images/hero/Firefly%20Use%20the%20three%20uploaded%20images%20as%20sequential%20keyframes%20%28Morning%20%E2%86%92%20Sunset%20%E2%86%92%20Night%29.%20Keep%20the%20h.mp4";

export function Hero() {
  return (
    <section className="p-0">
      <div className="relative isolate min-h-svh overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <PingPongHeroVideo
            src={heroVideoSrc}
            label="Premium Rudhra villa changing from morning to sunset to night"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_44%_66%_at_17%_48%,rgba(8,14,22,0.86)_0%,rgba(18,29,40,0.64)_42%,rgba(18,29,40,0.22)_68%,rgba(18,29,40,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,14,22,0.82)_0%,rgba(20,31,43,0.58)_30%,rgba(20,31,43,0.2)_58%,rgba(20,31,43,0.04)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,14,22,0.22)_0%,rgba(20,31,43,0.02)_38%,rgba(20,31,43,0.42)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[52rem] max-w-[88vw] bg-[linear-gradient(90deg,rgba(8,14,22,0.42)_0%,rgba(8,14,22,0.18)_52%,rgba(8,14,22,0)_100%)]" />

        <div className="container-soft relative z-10 flex min-h-svh flex-col justify-center pb-12 pt-24 sm:pb-14 sm:pt-24 lg:pb-16 lg:pt-24">
          <div className="max-w-[34rem] py-5 sm:max-w-[36rem]">
            <p className="hero-soft-reveal eyebrow text-white/80" style={{ animationDelay: "3040ms" }}>
              Built around your family&apos;s future
            </p>
            <AnimatedHeroTitle />
            <div className="hero-line-reveal mt-5 h-px w-20 bg-gradient-to-r from-white/90 to-transparent sm:mt-6" style={{ animationDelay: "3960ms" }} />
            <p className="hero-copy hero-soft-reveal mt-5 max-w-[29rem] !text-white/90 drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)]" style={{ animationDelay: "4100ms" }}>
              Thoughtfully planned communities and quality homes designed for comfort,
              trust, and long-term value.
            </p>
            <div className="hero-soft-reveal mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ animationDelay: "4280ms" }}>
              <Link href="/projects" className="btn-primary text-center text-sm sm:text-base">
                Explore Projects
              </Link>
              <Link href="/contact" className="btn-secondary border-white/45 bg-white/10 text-center text-sm !text-white backdrop-blur-sm hover:bg-white/18 sm:text-base">
                Schedule Site Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

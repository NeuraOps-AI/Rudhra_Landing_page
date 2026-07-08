import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-[radial-gradient(circle_at_84%_8%,rgba(200,217,230,0.92)_0%,rgba(238,245,248,0.62)_28%,transparent_52%),linear-gradient(135deg,#F5EFEB_0%,#FFFFFF_42%,#EEF5F8_100%)] p-0">
      <div className="relative isolate overflow-hidden bg-[linear-gradient(115deg,#FFFFFF_0%,#F5EFEB_38%,#EEF5F8_100%)]">
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-[76%]"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.04) 10%, rgba(0,0,0,0.32) 24%, rgba(0,0,0,0.82) 38%, #000 52%)",
            maskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.04) 10%, rgba(0,0,0,0.32) 24%, rgba(0,0,0,0.82) 38%, #000 52%)"
          }}
        >
          <Image
            src="/images/hero/hero-villa-visible.png"
            alt="Premium modern Rudhra villa exterior"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 76vw"
            className="object-cover object-[70%_48%] saturate-[1.04] contrast-[1.03] sm:object-[66%_46%] lg:scale-[1.06] lg:object-[61%_43%]"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_48%_72%_at_21%_52%,rgba(255,255,255,0.93)_0%,rgba(255,255,255,0.82)_30%,rgba(245,239,235,0.42)_49%,rgba(245,239,235,0.08)_70%,rgba(245,239,235,0)_88%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_58%_at_39%_54%,rgba(255,255,255,0.22)_0%,rgba(245,239,235,0.12)_48%,rgba(245,239,235,0)_82%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.86)_36%,rgba(245,239,235,0.68)_64%,rgba(245,239,235,0.24)_100%)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.56)_0%,rgba(255,255,255,0.76)_34%,rgba(245,239,235,0.42)_68%,rgba(245,239,235,0.08)_100%)] lg:hidden" />
        <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(ellipse_92%_64%_at_10%_42%,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_34%,rgba(245,239,235,0.54)_58%,rgba(245,239,235,0)_84%)] lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-beige/45 to-transparent" />

        <div className="container-soft relative z-10 flex min-h-svh flex-col justify-center pb-10 pt-20 sm:pb-12 sm:pt-22 lg:min-h-svh lg:pb-14 lg:pt-20 xl:pb-16">
          <div className="max-w-[37rem] py-4 sm:max-w-[39rem]">
            <p className="eyebrow">Built around your family&apos;s future</p>
            <h1 className="hero-heading mt-4">
              More Than Homes.
              <span className="mt-1 block hero-heading-accent">Better Lives.</span>
            </h1>
            <div className="mt-6 h-px w-20 bg-gradient-to-r from-teal to-transparent sm:mt-7" />
            <p className="hero-copy mt-6 max-w-[31rem]">
              Thoughtfully planned communities and quality homes designed for comfort,
              trust, and long-term value.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link href="/projects" className="btn-primary text-center text-sm sm:text-base">
                Explore Projects
              </Link>
              <Link href="/contact" className="btn-secondary text-center text-sm sm:text-base">
                Schedule Site Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

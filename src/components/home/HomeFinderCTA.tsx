import Link from "next/link";

export function HomeFinderCTA() {
  return (
    <section className="bg-white pb-16">
      <div className="container-soft overflow-hidden rounded-2xl bg-navy text-white shadow-soft">
        <div className="grid items-stretch gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky">
              Let&apos;s find your perfect home
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Our team is here to help you find the right home for your family.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/76">
              From first conversation to site visit, expect clear information, patient guidance,
              and practical options based on your needs.
            </p>
            <div className="mt-8 grid gap-4 text-sm font-semibold sm:grid-cols-3">
              <span>Personalized Consultation</span>
              <span>Expert Guidance</span>
              <span>Best Options For You</span>
            </div>
          </div>
          <div className="bg-white p-6 text-ink md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-mist px-4 py-3 text-sm text-muted">Your Name</div>
              <div className="rounded-lg bg-mist px-4 py-3 text-sm text-muted">Mobile Number</div>
              <div className="rounded-lg bg-mist px-4 py-3 text-sm text-muted">Looking For</div>
              <div className="rounded-lg bg-mist px-4 py-3 text-sm text-muted">Preferred Location</div>
            </div>
            <Link href="/contact" className="mt-5 flex justify-center btn-primary">
              Get Project Details
            </Link>
            <p className="mt-4 text-center text-xs text-muted">
              Your information is safe with us. We will never share your details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

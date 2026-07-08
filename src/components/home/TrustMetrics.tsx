const metrics = [
  {
    value: "15+",
    label: "Years",
    detail: "Trusted by families",
    icon: (
      <path d="M12 3.5 4.75 7.25v6.5c0 4.15 3.1 7.85 7.25 8.75 4.15-.9 7.25-4.6 7.25-8.75v-6.5L12 3.5Z" />
    )
  },
  {
    value: "1200+",
    label: "Families",
    detail: "Living with confidence",
    icon: (
      <path d="M8.5 11.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 20c.55-3.25 2.45-5.25 5-5.25s4.45 2 5 5.25m-2.25-5.05c.8-.55 1.75-.85 2.85-.85 2.55 0 4.45 2 5 5.25" />
    )
  },
  {
    value: "25+",
    label: "Projects",
    detail: "Planned and delivered",
    icon: (
      <path d="M4.75 20.5V8.25l7.25-3.5 7.25 3.5V20.5M8.25 20.5v-8h7.5v8M8.5 8.75h.05m3.45 0h.05m3.45 0h.05" />
    )
  },
  {
    value: "100%",
    label: "Clear",
    detail: "Simple, transparent process",
    icon: (
      <path d="m7 12.5 3.25 3.25L17.5 8.5M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z" />
    )
  }
];

export function TrustMetrics() {
  return (
    <section className="relative z-20 -mt-16 sm:-mt-14">
      <div className="container-soft overflow-hidden rounded-[1.5rem] border border-white/80 bg-[radial-gradient(circle_at_14%_0%,rgba(200,217,230,0.76),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(245,239,235,0.9),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.96),rgba(238,245,248,0.9))] shadow-[0_26px_72px_rgba(47,65,86,0.13)] backdrop-blur-xl">
        <div className="grid gap-px bg-navy/8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="group relative flex min-h-[8.5rem] gap-4 bg-white/72 px-5 py-5 transition duration-300 hover:bg-white/88"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#C8D9E6,#F5EFEB)] text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_24px_rgba(47,65,86,0.08)] ring-1 ring-white/70 transition duration-300 group-hover:-translate-y-0.5 group-hover:text-teal">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                >
                  {metric.icon}
                </svg>
              </span>
              <div>
                <p className="font-sans text-[2.1rem] font-semibold leading-none tracking-[-0.055em] text-navy sm:text-[2.25rem]">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-teal">
                  {metric.label}
                </p>
                <p className="mt-2 max-w-[12rem] text-sm font-semibold leading-6 text-muted">
                  {metric.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

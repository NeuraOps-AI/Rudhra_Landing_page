import Image from "next/image";

const statements = [
  {
    title: "Vision",
    copy: "To emerge as a distinguished real estate entity committed to fostering customer loyalty and advancing architectural knowledge through thoughtful innovation."
  },
  {
    title: "Mission",
    copy: "To stand among India's foremost builders by delivering exceptional projects that blend innovation, tradition, and practical solutions for human habitat."
  },
  {
    title: "Objective",
    copy: "To consistently deliver quality products that reflect the significance of each customer's financial investment."
  }
];

export default function AboutPage() {
  return (
    <section className="section-pad bg-mist">
      <div className="container-soft">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft">
            <Image src="/images/showcase/construction-quality.jpg" alt="Rudhra construction quality" fill className="object-cover" />
          </div>
          <div>
            <p className="eyebrow">About Rudhra Harmony</p>
            <h1 className="mt-3 font-serif text-5xl font-semibold text-navy">
              Homes shaped by integrity, comfort, and long-term value.
            </h1>
            <p className="mt-6 leading-8 text-muted">
              Welcome to Rudhra Constructions, where architectural planning meets a commitment
              to excellence. The company has shaped commercial and residential projects across
              Hyderabad with a focus on engineered integrity, practical layouts, green spaces,
              and careful execution.
            </p>
            <p className="mt-4 leading-8 text-muted">
              The journey began in civil construction in 2005 and continued with Rudhra
              Constructions from 2015, crafting homes and communities designed for trust,
              comfort, and family aspirations.
            </p>
          </div>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {statements.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-7 shadow-card">
              <h2 className="font-serif text-2xl font-semibold text-navy">{item.title}</h2>
              <p className="mt-4 leading-7 text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

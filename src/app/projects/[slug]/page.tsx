import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contactDetails, getProjectBySlug, projects } from "@/data/projects";
import type { Project } from "@/types/project";

type FloorPlan = {
  title: string;
  configuration: string;
  area: string;
  price: string;
  image: string;
};

type AmenityIcon = "park" | "clubhouse" | "pool" | "games" | "gym" | "play" | "track" | "security";
type StatIcon = "land" | "homes" | "green" | "location" | "quality";

const amenitySet: { label: string; icon: AmenityIcon }[] = [
  { label: "Central Park", icon: "park" },
  { label: "Clubhouse", icon: "clubhouse" },
  { label: "Swimming Pool", icon: "pool" },
  { label: "Indoor Games", icon: "games" },
  { label: "Gymnasium", icon: "gym" },
  { label: "Children Play Area", icon: "play" },
  { label: "Jogging Track", icon: "track" },
  { label: "24/7 Security", icon: "security" }
];

const connectivity = [
  "5 mins to ORR Exit 7",
  "10 mins to Bowrampet Road",
  "15 mins to JNTU & Miyapur",
  "20 mins to Hitec City",
  "30 mins to Rajiv Gandhi Intl. Airport"
];

const nearby = [
  ["Schools", "5 - 10 mins"],
  ["Hospitals", "10 - 15 mins"],
  ["IT Hubs", "15 - 20 mins"],
  ["Malls & Retail", "10 - 15 mins"]
];

const whyChoose = [
  ["Premium Community", "Spacious homes in a well planned community."],
  ["Lifestyle Amenities", "Daily comforts designed around family living."],
  ["Prime Growth Corridor", "Located in a fast developing real estate hub."],
  ["Trusted Developer", "Delivered with quality, transparency and trust."]
];

const getStatusLabel = (status: Project["status"]) =>
  status.charAt(0).toUpperCase() + status.slice(1);

function StatIconMark({ icon }: { icon: StatIcon }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  const icons: Record<StatIcon, React.ReactNode> = {
    land: (
      <>
        <path {...common} d="M4 18 8 6l5 12 3-8 4 8" />
        <path {...common} d="M3 18h18" />
      </>
    ),
    homes: (
      <>
        <path {...common} d="M4 20V9l8-5 8 5v11" />
        <path {...common} d="M9 20v-6h6v6" />
        <path {...common} d="M8 10h.01" />
        <path {...common} d="M16 10h.01" />
      </>
    ),
    green: (
      <>
        <path {...common} d="M12 20V9" />
        <path {...common} d="M8 11c0-3 2-5 4-7 2 2 4 4 4 7a4 4 0 0 1-8 0Z" />
        <path {...common} d="M5 20h14" />
      </>
    ),
    location: (
      <>
        <path {...common} d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11Z" />
        <circle {...common} cx="12" cy="10" r="2.5" />
      </>
    ),
    quality: (
      <>
        <path {...common} d="M12 3 5 6v5c0 4.2 2.7 8 7 10 4.3-2 7-5.8 7-10V6l-7-3Z" />
        <path {...common} d="m9.5 12 1.8 1.8 3.7-4" />
      </>
    )
  };

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      {icons[icon]}
    </svg>
  );
}

function AmenityIconMark({ icon }: { icon: AmenityIcon }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  const icons: Record<AmenityIcon, React.ReactNode> = {
    park: (
      <>
        <path {...common} d="M12 20V9" />
        <path {...common} d="M8 11c0-3 2-5 4-7 2 2 4 4 4 7a4 4 0 0 1-8 0Z" />
        <path {...common} d="M5 20h14" />
        <path {...common} d="M7 16h10" />
      </>
    ),
    clubhouse: (
      <>
        <path {...common} d="M4 20V9l8-5 8 5v11" />
        <path {...common} d="M8 20v-7h8v7" />
        <path {...common} d="M10 9h4" />
        <path {...common} d="M3 20h18" />
      </>
    ),
    pool: (
      <>
        <path {...common} d="M6 6v7" />
        <path {...common} d="M6 9h5" />
        <path {...common} d="M11 6v7" />
        <path {...common} d="M4 16c2 1.4 4 1.4 6 0 2-1.4 4-1.4 6 0 1.3.9 2.6 1.2 4 .7" />
        <path {...common} d="M4 20c2 1.4 4 1.4 6 0 2-1.4 4-1.4 6 0 1.3.9 2.6 1.2 4 .7" />
      </>
    ),
    games: (
      <>
        <rect {...common} x="5" y="8" width="14" height="9" rx="4" />
        <path {...common} d="M9 12v3" />
        <path {...common} d="M7.5 13.5h3" />
        <path {...common} d="M15 12.5h.01" />
        <path {...common} d="M17 14.5h.01" />
      </>
    ),
    gym: (
      <>
        <path {...common} d="M7 8v8" />
        <path {...common} d="M17 8v8" />
        <path {...common} d="M9 12h6" />
        <path {...common} d="M4 10v4" />
        <path {...common} d="M20 10v4" />
      </>
    ),
    play: (
      <>
        <circle {...common} cx="8" cy="8" r="2" />
        <path {...common} d="M8 10v5l-3 4" />
        <path {...common} d="M8 15l4 4" />
        <path {...common} d="M11 11l4-2 4 2" />
        <path {...common} d="M15 9v10" />
      </>
    ),
    track: (
      <>
        <path {...common} d="M5 18c4-8 10-8 14 0" />
        <path {...common} d="M8 18c2.7-4.8 5.3-4.8 8 0" />
        <path {...common} d="M12 4v4" />
        <path {...common} d="M9 7h6" />
      </>
    ),
    security: (
      <>
        <path {...common} d="M12 3 5 6v5c0 4.2 2.7 8 7 10 4.3-2 7-5.8 7-10V6l-7-3Z" />
        <path {...common} d="m9.5 12 1.8 1.8 3.7-4" />
      </>
    )
  };

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      {icons[icon]}
    </svg>
  );
}

const getStatCards = (project: Project) => {
  const fallback = project.type === "Villa Community"
    ? ["Premium", "Community", "Family", "Address"]
    : ["Modern", "Homes", "Prime", "Location"];
  const icons: StatIcon[] = ["land", "homes", "green", "location", "quality"];

  return [...project.highlights, ...fallback].slice(0, 5).map((item) => {
    const parts = item.split(" ");
    const value = parts[0];
    const label = parts.slice(1).join(" ") || project.type;

    return {
      value,
      label,
      caption: value === "Near" ? "Connected location" : "Project highlight",
      icon: icons[Math.min([...project.highlights, ...fallback].indexOf(item), icons.length - 1)]
    };
  });
};

const getFloorPlans = (project: Project): FloorPlan[] => {
  if (project.slug === "rudhra-estates") {
    return [
      {
        title: "Premium Apartment - Type A",
        configuration: "2 BHK",
        area: "1185 sq.ft.",
        price: "On Request",
        image: "/assets/images/estates/home-plan.png"
      },
      {
        title: "Premium Apartment - Type B",
        configuration: "3 BHK",
        area: "1540 sq.ft.",
        price: "On Request",
        image: "/assets/images/estates/estates_floorplan_low.webp"
      },
      {
        title: "Community Master Plan",
        configuration: "Site Plan",
        area: "8,700 sq.ft. clubhouse",
        price: "On Request",
        image: "/assets/images/estates/master-plan.webp"
      }
    ];
  }

  if (project.slug === "rudhras-bhuvi") {
    return [
      {
        title: "Apartment Plan - Type A",
        configuration: "2 BHK",
        area: "Smart layout",
        price: "Completed",
        image: "/assets/images/bhuvi-floor-plan.jpg"
      },
      {
        title: "Apartment Plan - Type B",
        configuration: "3 BHK",
        area: "Family layout",
        price: "Completed",
        image: "/assets/images/bhuvi-layout-1.jpg"
      },
      {
        title: "Apartment Plan - Type C",
        configuration: "3 BHK",
        area: "Corner layout",
        price: "Completed",
        image: "/assets/images/bhuvi-layout-2.jpg"
      }
    ];
  }

  if (project.slug === "raagam-taanam") {
    return [
      {
        title: "Raagam Floor Plan",
        configuration: "Apartment",
        area: "Family layout",
        price: "Completed",
        image: "/assets/images/raagam-floor-plan.jpg"
      },
      {
        title: "Taanam Floor Plan",
        configuration: "Apartment",
        area: "Family layout",
        price: "Completed",
        image: "/assets/images/taanam-floor-plan.jpg"
      },
      {
        title: "Typical Home Plan",
        configuration: "2 & 3 BHK",
        area: "Efficient layout",
        price: "Completed",
        image: project.image
      }
    ];
  }

  if (project.slug === "soudhamini") {
    return [
      {
        title: "Soudhamini Floor Plan - A",
        configuration: "2 BHK",
        area: "Comfort layout",
        price: "Completed",
        image: "/assets/images/soudamini-floorplan.jpg"
      },
      {
        title: "Soudhamini Floor Plan - B",
        configuration: "3 BHK",
        area: "Family layout",
        price: "Completed",
        image: "/assets/images/soudamini-floorplan1.jpg"
      },
      {
        title: "Typical Home Plan",
        configuration: "Apartment",
        area: "Efficient layout",
        price: "Completed",
        image: project.image
      }
    ];
  }

  if (project.slug === "rudhras-medha") {
    return [
      {
        title: "Medha Floor Plan",
        configuration: "3 BHK",
        area: "Private layout",
        price: "Completed",
        image: "/assets/images/medha-floor-plan.jpg"
      },
      {
        title: "Typical Home Plan",
        configuration: "3 BHK",
        area: "Low-density homes",
        price: "Completed",
        image: project.image
      },
      {
        title: "Premium Layout",
        configuration: "Apartment",
        area: "Natural light",
        price: "Completed",
        image: project.gallery[0] || project.image
      }
    ];
  }

  if (project.type === "Villa Community") {
    return [
      {
        title: "Villa Plan - Type A",
        configuration: "Triplex Villa",
        area: "East facing",
        price: project.status === "completed" ? "Completed" : "On Request",
        image: "/assets/images/reast-floor-plan.webp"
      },
      {
        title: "Villa Plan - Type B",
        configuration: "Triplex Villa",
        area: "North facing",
        price: project.status === "completed" ? "Completed" : "On Request",
        image: "/assets/images/north-floor-plan.webp"
      },
      {
        title: "Villa Plan - Type C",
        configuration: "Triplex Villa",
        area: "West facing",
        price: project.status === "completed" ? "Completed" : "On Request",
        image: "/assets/images/west-floor-plan.webp"
      }
    ];
  }

  return [
    {
      title: `${project.name} Plan - Type A`,
      configuration: project.type,
      area: "Efficient layout",
      price: "On Request",
      image: project.image
    },
    {
      title: `${project.name} Plan - Type B`,
      configuration: project.type,
      area: "Premium layout",
      price: "On Request",
      image: project.gallery[0] || project.image
    },
    {
      title: `${project.name} Plan - Type C`,
      configuration: project.type,
      area: "Family layout",
      price: "On Request",
      image: project.gallery[1] || project.image
    }
  ];
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const stats = getStatCards(project);
  const floorPlans = getFloorPlans(project);
  const gallery = [...project.gallery, project.image].filter((image, index, list) => list.indexOf(image) === index);
  const contactPhone = contactDetails.phonePrimary.replace(/\s/g, "");

  return (
    <article className="bg-white pt-[3.25rem] text-navy sm:pt-14 lg:pt-16">
      <section className="relative min-h-[32rem] overflow-hidden bg-navy pt-16 text-white md:min-h-[35rem] md:pt-20">
        <Image src={project.image} alt={project.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(47,65,86,0.90)_0%,rgba(47,65,86,0.72)_30%,rgba(47,65,86,0.22)_68%,rgba(47,65,86,0.08)_100%)]" />
        <div className="container-soft relative z-10 flex min-h-[25rem] items-center">
          <div className="max-w-2xl py-12">
            <span className="inline-flex rounded-full bg-white/18 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] backdrop-blur">
              {getStatusLabel(project.status)}
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] text-white md:text-7xl">
              {project.name}
            </h1>
            <p className="mt-5 text-base font-bold text-white md:text-lg">
              {project.location}
            </p>
            <p className="mt-5 max-w-md text-sm font-medium leading-7 text-white/86 md:text-base">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary bg-navy text-center">
                Schedule Site Visit
              </Link>
              <a href={`tel:${contactPhone}`} className="rounded-lg border border-white/34 bg-white/10 px-6 py-4 text-center text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-navy">
                Call Sales Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-14">
        <div className="container-soft">
          <div className="grid gap-0 overflow-hidden rounded-2xl border border-navy/12 bg-[linear-gradient(135deg,#FFFFFF_0%,#F5EFEB_54%,#C8D9E6_100%)] px-4 py-5 shadow-[0_24px_60px_rgba(47,65,86,0.16)] sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat, index) => (
              <div
                key={`${stat.value}-${index}`}
                className="flex items-center gap-4 px-4 py-3 sm:border-r sm:border-navy/12 sm:last:border-r-0 lg:px-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-teal shadow-[0_10px_22px_rgba(47,65,86,0.10)] ring-1 ring-navy/10">
                  <StatIconMark icon={stat.icon} />
                </span>
                <div>
                  <p className="text-2xl font-extrabold leading-none tracking-[-0.03em] text-navy">{stat.value}</p>
                  <p className="mt-1 text-xs font-extrabold capitalize leading-4 text-navy">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-soft grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div>
            <p className="eyebrow">{project.type}</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] text-navy md:text-5xl">
              Project Summary
            </h2>
            <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-muted">
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.amenities.slice(0, 4).map((amenity) => (
                <span key={amenity} className="rounded-lg border border-navy/10 bg-beige px-5 py-3 text-sm font-bold text-navy">
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-navy/10 bg-[linear-gradient(180deg,#F5EFEB_0%,#FFFFFF_100%)] p-5 shadow-card">
            <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-navy">Enquire Now</h3>
            <div className="mt-5 grid gap-3">
              <input className="rounded-lg border border-navy/10 bg-white px-4 py-3 text-sm outline-none focus:border-teal" placeholder="Your Name" />
              <input className="rounded-lg border border-navy/10 bg-white px-4 py-3 text-sm outline-none focus:border-teal" placeholder="Mobile Number" />
              <input className="rounded-lg border border-navy/10 bg-white px-4 py-3 text-sm outline-none focus:border-teal" placeholder="Email Address" />
              <select className="rounded-lg border border-navy/10 bg-white px-4 py-3 text-sm outline-none focus:border-teal" defaultValue="">
                <option value="" disabled>I&apos;m interested in</option>
                <option>{project.name}</option>
                <option>Site Visit</option>
                <option>Brochure</option>
              </select>
              <Link href="/contact" className="btn-primary text-center">Schedule Site Visit</Link>
              <a href={`https://wa.me/${contactPhone.replace("+", "")}`} className="rounded-lg border border-teal/35 bg-white px-4 py-3 text-center text-sm font-extrabold text-teal transition hover:bg-teal hover:text-white">
                Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-10">
        <div className="container-soft">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-navy">Amenities</h2>
            <span className="text-sm font-bold text-teal">View All Amenities</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            {amenitySet.map((amenity) => (
              <div key={amenity.label} className="rounded-xl border border-navy/10 bg-white p-4 text-center shadow-[0_10px_26px_rgba(47,65,86,0.07)]">
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-beige text-teal ring-1 ring-navy/8">
                  <AmenityIconMark icon={amenity.icon} />
                </span>
                <p className="mt-3 text-xs font-bold text-navy">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-8">
        <div className="container-soft">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-navy">Gallery</h2>
              <div className="mt-4 flex gap-5 text-sm font-bold text-muted">
                <span className="text-navy underline decoration-teal decoration-2 underline-offset-8">All</span>
                <span>Exterior</span>
                <span>Interior</span>
                <span>Amenities</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="grid h-10 w-10 place-items-center rounded-full border border-navy/10 bg-beige text-navy">‹</button>
              <button className="grid h-10 w-10 place-items-center rounded-full border border-navy/10 bg-beige text-navy">›</button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {gallery.slice(0, 4).map((image) => (
              <div key={image} className="relative aspect-[1.55] overflow-hidden rounded-xl shadow-card">
                <Image src={image} alt={`${project.name} gallery`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="floor-plans" className="pb-12">
        <div className="container-soft">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-navy">Floor Plans</h2>
            <span className="text-sm font-bold text-teal">View All Plans</span>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {floorPlans.map((plan) => (
              <div key={plan.title} className="rounded-2xl border border-navy/10 bg-white p-5 shadow-card">
                <h3 className="text-lg font-extrabold tracking-[-0.02em] text-navy">{plan.title}</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-xs font-bold text-muted">
                  <span>{plan.configuration}</span>
                  <span>{plan.area}</span>
                </div>
                <div className="relative mt-5 aspect-[1.7] overflow-hidden rounded-lg bg-beige">
                  <Image src={plan.image} alt={plan.title} fill className="object-contain p-2" />
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="text-xl font-extrabold text-navy">{plan.price}</p>
                  <Link href="/contact" className="rounded-lg bg-navy px-5 py-3 text-xs font-extrabold text-white transition hover:bg-teal">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[linear-gradient(180deg,#FFFFFF_0%,#EEF5F8_100%)]">
        <div className="container-soft grid gap-8 lg:grid-cols-[0.75fr_1.3fr_0.65fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-navy">
              Prime Location<br />Great Connectivity
            </h2>
            <div className="mt-6 grid gap-4">
              {connectivity.map((item) => (
                <p key={item} className="text-sm font-bold text-muted">{item}</p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card">
            <iframe
              title={`${project.name} map`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(project.location)}&output=embed`}
              className="h-80 w-full border-0"
              loading="lazy"
            />
          </div>
          <div className="grid gap-4">
            {nearby.map(([name, time]) => (
              <div key={name} className="rounded-xl border border-navy/10 bg-white p-5 shadow-[0_10px_26px_rgba(47,65,86,0.08)]">
                <p className="font-extrabold text-navy">{name}</p>
                <p className="text-sm font-bold text-muted">{time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-soft">
          <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-navy">Why Choose {project.name}?</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-4">
            {whyChoose.map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-beige text-sm font-extrabold text-teal">
                  {title.slice(0, 1)}
                </span>
                <h3 className="mt-4 font-extrabold text-navy">{title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-muted">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-10 text-white">
        <Image src={project.image} alt="" fill className="object-cover opacity-20" />
        <div className="container-soft relative z-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-[-0.035em]">Ready To Visit {project.name}?</h2>
            <p className="mt-2 text-sm font-medium text-white/76">Book your site visit and experience the community in person.</p>
          </div>
          <Link href="/contact" className="rounded-lg border border-white/30 px-8 py-4 text-sm font-extrabold text-white transition hover:bg-white hover:text-navy">
            Schedule Site Visit
          </Link>
        </div>
      </section>
    </article>
  );
}

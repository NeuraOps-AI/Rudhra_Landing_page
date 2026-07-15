import { contactDetails } from "@/data/projects";

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-soft">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Contact us</p>
            <h1 className="mt-3 font-serif text-5xl font-semibold text-navy">
              Connect with us today and plan your next step.
            </h1>
            <p className="mt-5 leading-8 text-muted">
              Your dream home deserves a clear conversation. Reach out for project details,
              availability, site visits, and guidance from the Rudhra team.
            </p>
            <div className="mt-8 grid gap-4">
              <a className="rounded-2xl border border-white/55 bg-[linear-gradient(135deg,rgba(238,231,226,0.94),rgba(186,205,214,0.82))] p-5 font-bold text-navy shadow-[0_18px_46px_rgba(47,65,86,0.2)]" href={`tel:${contactDetails.phonePrimary.replace(/\s/g, "")}`}>
                {contactDetails.phonePrimary}
              </a>
              <a className="rounded-2xl border border-white/55 bg-[linear-gradient(135deg,rgba(238,231,226,0.94),rgba(186,205,214,0.82))] p-5 font-bold text-navy shadow-[0_18px_46px_rgba(47,65,86,0.2)]" href={`tel:${contactDetails.phoneSecondary.replace(/\s/g, "")}`}>
                {contactDetails.phoneSecondary}
              </a>
              <a className="rounded-2xl border border-white/55 bg-[linear-gradient(135deg,rgba(238,231,226,0.94),rgba(186,205,214,0.82))] p-5 font-bold text-navy shadow-[0_18px_46px_rgba(47,65,86,0.2)]" href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </a>
              <div className="rounded-2xl border border-white/55 bg-[linear-gradient(135deg,rgba(238,231,226,0.94),rgba(186,205,214,0.82))] p-5 text-sm leading-7 text-muted shadow-[0_18px_46px_rgba(47,65,86,0.2)]">
                {contactDetails.address}
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/55 bg-[linear-gradient(145deg,rgba(238,231,226,0.96),rgba(186,205,214,0.86))] p-6 shadow-[0_24px_64px_rgba(47,65,86,0.24)]">
            <form className="grid gap-4">
              <input className="rounded-2xl border border-white/55 bg-[#f2ece8]/55 px-5 py-4 outline-none focus:border-teal" placeholder="Your Name" />
              <input className="rounded-2xl border border-white/55 bg-[#f2ece8]/55 px-5 py-4 outline-none focus:border-teal" placeholder="Mobile Number" />
              <input className="rounded-2xl border border-white/55 bg-[#f2ece8]/55 px-5 py-4 outline-none focus:border-teal" placeholder="Email Address" />
              <select className="rounded-2xl border border-white/55 bg-[#f2ece8]/55 px-5 py-4 outline-none focus:border-teal" defaultValue="">
                <option value="" disabled>Looking For</option>
                <option>Apartment</option>
                <option>Villa Community</option>
                <option>Commercial Space</option>
              </select>
              <textarea className="min-h-32 rounded-2xl border border-white/55 bg-[#f2ece8]/55 px-5 py-4 outline-none focus:border-teal" placeholder="Message" />
              <button type="button" className="btn-primary">Get Project Details</button>
            </form>
            <iframe
              className="mt-6 h-72 w-full rounded-3xl border-0"
              src={contactDetails.mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rudhra House location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

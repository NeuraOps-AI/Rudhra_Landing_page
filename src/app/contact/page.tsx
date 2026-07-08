import { contactDetails } from "@/data/projects";

export default function ContactPage() {
  return (
    <section className="section-pad bg-mist">
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
              <a className="rounded-2xl bg-white p-5 font-bold text-navy shadow-card" href={`tel:${contactDetails.phonePrimary.replace(/\s/g, "")}`}>
                {contactDetails.phonePrimary}
              </a>
              <a className="rounded-2xl bg-white p-5 font-bold text-navy shadow-card" href={`tel:${contactDetails.phoneSecondary.replace(/\s/g, "")}`}>
                {contactDetails.phoneSecondary}
              </a>
              <a className="rounded-2xl bg-white p-5 font-bold text-navy shadow-card" href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </a>
              <div className="rounded-2xl bg-white p-5 text-sm leading-7 text-muted shadow-card">
                {contactDetails.address}
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-6 shadow-soft">
            <form className="grid gap-4">
              <input className="rounded-2xl border border-[rgba(47,65,86,0.14)] px-5 py-4 outline-none focus:border-teal" placeholder="Your Name" />
              <input className="rounded-2xl border border-[rgba(47,65,86,0.14)] px-5 py-4 outline-none focus:border-teal" placeholder="Mobile Number" />
              <input className="rounded-2xl border border-[rgba(47,65,86,0.14)] px-5 py-4 outline-none focus:border-teal" placeholder="Email Address" />
              <select className="rounded-2xl border border-[rgba(47,65,86,0.14)] px-5 py-4 outline-none focus:border-teal" defaultValue="">
                <option value="" disabled>Looking For</option>
                <option>Apartment</option>
                <option>Villa Community</option>
                <option>Commercial Space</option>
              </select>
              <textarea className="min-h-32 rounded-2xl border border-[rgba(47,65,86,0.14)] px-5 py-4 outline-none focus:border-teal" placeholder="Message" />
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

import Link from "next/link";
import Image from "next/image";
import { contactDetails } from "@/data/projects";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-soft grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image
            src="/images/logos/logo-white.png"
            alt="Rudhra Constructions"
            width={274}
            height={68}
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/74">
            Thoughtfully planned homes and communities designed around comfort, trust, and
            long-term value for families.
          </p>
        </div>
        <div>
          <p className="font-bold">Explore</p>
          <div className="mt-4 grid gap-3 text-sm text-white/74">
            <Link href="/projects" className="hover:text-white">Projects</Link>
            <Link href="/about" className="hover:text-white">About Rudhra</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-white/74">
            <a href={`tel:${contactDetails.phonePrimary.replace(/\s/g, "")}`}>{contactDetails.phonePrimary}</a>
            <a href={`tel:${contactDetails.phoneSecondary.replace(/\s/g, "")}`}>{contactDetails.phoneSecondary}</a>
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        Contents are for general information. Please verify details with an authorized Rudhra representative.
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { MayrExperienceSections } from "@/components/mayr/MayrExperienceSections";
import { SectionIntro } from "@/components/SectionIntro";
import { mayrExperienceIntro, mayrExperienceSections } from "@/lib/mayr-experience-content";

export const metadata: Metadata = {
  title: "MAYR Experience",
  description:
    "Marrakech Alchemy Experience — accommodation, culinary journey, yoga & sound, wellness, workshops, and excursions across Morocco.",
};

export default function BookingPage() {
  return (
    <div className="mx-auto min-w-0 w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          surface="contact"
          titleAs="h1"
          titleScale="page"
          eyebrow={mayrExperienceIntro.eyebrow}
          title={mayrExperienceIntro.title}
          titleHighlight={mayrExperienceIntro.titleHighlight}
          titleRest={mayrExperienceIntro.titleRest}
          description={mayrExperienceIntro.description}
          descriptionClassName="max-w-3xl"
        />
      </div>

      <div className="mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24">
        <MayrExperienceSections sections={mayrExperienceSections} />
      </div>
    </div>
  );
}

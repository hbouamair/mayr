import { SectionIntro } from "@/components/SectionIntro";
import { SITE_SECTION_KICKER } from "@/lib/site";

/** Same contact-hero title treatment as About / Contact — lux-rule, mesh, editorial headline */
export function RetreatsDiscoveryIntro() {
  return (
    <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6">
      <SectionIntro
        surface="contact"
        titleAs="h1"
        titleScale="page"
        eyebrow={SITE_SECTION_KICKER}
        title="Retreat calendar"
        titleHighlight="Retreat calendar"
        titleRest=""
        description="Each card uses a poster from the season. Use the filters below to narrow place, month, or availability — then open a program for the full story, gallery, and how to reserve."
        descriptionClassName="max-w-3xl"
      />
    </div>
  );
}

import { SectionIntro } from "@/components/SectionIntro";

/** Same contact-hero title treatment as About / Contact — lux-rule, mesh, editorial headline */
export function RetreatsDiscoveryIntro() {
  return (
    <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6">
      <SectionIntro
        surface="contact"
        titleAs="h1"
        titleScale="page"
        eyebrow="Retreats"
        title="Our five 2026 programs"
        titleHighlight="Our five 2026 programs"
        titleRest="from Agafay and Marrakech to Essaouira — coaching, retreats, and teacher training."
        description="Each card uses a poster from the season. Use the filters below to narrow place, month, or focus — then open a program for the full story, gallery, and how to reserve."
        descriptionClassName="max-w-3xl"
      />
    </div>
  );
}

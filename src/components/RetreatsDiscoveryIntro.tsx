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
        title="Discover transformative retreat weeks"
        titleHighlight="Discover transformative retreat weeks"
        titleRest="from medina courtyards to Atlas valleys and open desert light."
        description="Use the filters to narrow language, place, month, focus, or availability — then open any week for the full story, activity photography, and how to reserve."
        descriptionClassName="max-w-3xl"
      />
    </div>
  );
}

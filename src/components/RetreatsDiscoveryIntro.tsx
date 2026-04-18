import { SectionIntro } from "@/components/SectionIntro";
import { retreatCalendar2026Intro } from "@/lib/site-content";

/** Same contact-hero title treatment as About / Contact — lux-rule, mesh, editorial headline */
export function RetreatsDiscoveryIntro() {
  const intro = retreatCalendar2026Intro;
  return (
    <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6">
      <SectionIntro
        surface="contact"
        titleAs="h1"
        titleScale="page"
        eyebrow={intro.eyebrow}
        title={intro.titleHighlight}
        titleHighlight={intro.titleHighlight}
        titleRest=""
        description={intro.descriptionProgramPage}
        descriptionClassName="max-w-3xl"
      />
    </div>
  );
}

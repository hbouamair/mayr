import { Footer } from "./Footer";
import { Header } from "./Header";
import { SiteFloatingDock } from "./SiteFloatingDock";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-w-0 flex-1 pt-[var(--main-pt)]" id="main-content">
        {children}
      </main>
      <Footer />
      <SiteFloatingDock />
    </>
  );
}

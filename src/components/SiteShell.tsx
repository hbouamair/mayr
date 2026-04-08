import { BackToTop } from "./BackToTop";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 min-w-0 pt-[6.85rem] sm:pt-[7.1rem] md:pt-[7.35rem] lg:pt-[7.5rem]" id="main-content">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

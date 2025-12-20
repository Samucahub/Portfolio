import { Approach } from "@/components/approach";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { RecentProjects } from "@/components/recent-projects";
import { Cybersecurity } from "@/components/cybersecurity";
import { CybersecurityEncryption } from "@/components/cybersecurity-encryption";
import { LanguageSwitcher } from "@/components/language-switcher";
import { navItems } from "@/data";

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <LanguageSwitcher />
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <CybersecurityEncryption>
          <Cybersecurity />
        </CybersecurityEncryption>
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;

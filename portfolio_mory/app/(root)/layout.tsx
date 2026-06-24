import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";
import ScrollToTop from "@/components/common/scroll-to-top";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border/40">
        <header className="container">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={routesConfig.mainNav}>
              <div className="flex items-center gap-3">
                <ModeToggle />
              </div>
            </MainNav>
            <nav className="flex items-center gap-5">
              <ModeToggle />
            </nav>
          </div>
        </header>
      </div>
      <main className="container flex-1 pt-20">{children}</main>
      <SiteFooter />
+      <ScrollToTop />
    </div>
  );
}
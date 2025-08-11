import { NewHeader } from "./new-header";
import { Footer } from "./footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <NewHeader />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

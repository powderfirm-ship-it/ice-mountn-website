import { NewHeader } from "./new-header";
import { Footer } from "./footer";

interface SiteLayoutServerProps {
  children: React.ReactNode;
}

export default function SiteLayoutServer({ children }: SiteLayoutServerProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero content renders first (server-rendered) */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Client components render after hero */}
      <NewHeader />
      <Footer />
    </div>
  );
}

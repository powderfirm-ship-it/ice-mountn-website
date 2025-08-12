import { NewHeader } from "./new-header";
import { Footer } from "./footer";

interface SiteLayoutServerProps {
  children: React.ReactNode;
}

export default function SiteLayoutServer({ children }: SiteLayoutServerProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header at the top for sticky behavior */}
      <NewHeader />
      
      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

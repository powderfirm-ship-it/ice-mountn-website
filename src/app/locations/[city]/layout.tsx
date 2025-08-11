import { Metadata } from 'next';
import { locations, getLocationBySlug, getCampusLocationBySlug } from '@/data/locations';

interface LocationLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    city: string;
  }>;
}

export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams.city);
  const campus = getCampusLocationBySlug(resolvedParams.city);

  const data = location || campus;

  if (!data) {
    return {
      title: 'Location Not Found',
      description: 'The requested location page could not be found.'
    };
  }

  const isCampus = !!campus;
  const cityName = data.name;

  return {
    title: `TV Mounting in ${cityName}`,
    description: data.metaDescription,
    keywords: `tv mounting ${cityName.toLowerCase()}, ${cityName.toLowerCase()} tv installation, ${cityName.toLowerCase()} tv wall mount, ${cityName.toLowerCase()} home theater, tv mounting service ${cityName.toLowerCase()}`,
    openGraph: {
      title: `TV Mounting in ${cityName} | Ice Mount'n`,
      description: data.metaDescription,
      type: 'website',
      url: `https://icemountn.com/locations/${resolvedParams.city}`,
      images: [
        {
          url: "/images/stock/hero-1.webp",
          width: 1200,
          height: 630,
          alt: `TV mounting service in ${cityName}, Los Angeles`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `TV Mounting in ${cityName} | Ice Mount'n`,
      description: data.metaDescription,
      images: ["/images/stock/hero-1.webp"]
    },
    alternates: {
      canonical: `https://icemountn.com/locations/${resolvedParams.city}`
    }
  };
}

export async function generateStaticParams() {
  // Generate static params for all locations and campuses
  const allLocations = [...locations, ...[]]; // Add campus locations separately if needed
  return allLocations.map((location) => ({
    city: location.slug,
  }));
}

export default function LocationLayout({ children }: LocationLayoutProps) {
  return children;
}

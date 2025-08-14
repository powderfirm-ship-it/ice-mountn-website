import { Metadata } from 'next';
import { canonical } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'TV Mounting Discounts | Student & Military Specials',
  description: 'Save on TV mounting with special discounts for students and military. As low as $50 per TV with customer-provided mount. Valid ID required.',
  keywords: 'tv mounting discount, student tv mounting discount, military tv mounting discount, cheap tv installation, ucla tv mounting, usc tv mounting',
  openGraph: {
    title: 'TV Mounting Discounts | Student & Military Specials | Ice Mount\'n',
    description: 'Save on TV mounting with special discounts for students and military. As low as $50 per TV with customer-provided mount.',
    type: 'website',
    url: canonical('/discounts'),
    images: [
      {
        url: canonical("/images/stock/hero-1.webp"),
        width: 1200,
        height: 630,
        alt: "TV mounting discounts for students and military in Los Angeles"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: 'TV Mounting Discounts | Student & Military Specials',
    description: 'Save on TV mounting with special discounts for students and military. As low as $50 per TV with customer-provided mount.',
    images: [canonical("/images/stock/hero-1.webp")]
  },
  alternates: {
    canonical: canonical('/discounts')
  }
};

export default function DiscountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

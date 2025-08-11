import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Reviews | 4.9★ TV Mounting Service',
  description: 'Read authentic customer reviews for Ice Mount\'n TV mounting service. 4.9-star rating from 150+ satisfied customers across Los Angeles. Same-day service available.',
  keywords: 'tv mounting reviews, customer reviews, ice mountn reviews, tv installation reviews los angeles, tv mounting testimonials',
  openGraph: {
    title: 'Customer Reviews | Ice Mount\'n TV Mounting Los Angeles',
    description: 'Read authentic customer reviews for Ice Mount\'n TV mounting service. 4.9-star rating from 150+ satisfied customers.',
    type: 'website',
    url: 'https://icemountn.com/customer-reviews',
    images: [
      {
        url: "/images/stock/review-01.jpg",
        width: 1200,
        height: 630,
        alt: "Ice Mount'n customer reviews and TV mounting testimonials"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: 'Customer Reviews | Ice Mount\'n TV Mounting',
    description: 'Read authentic customer reviews for Ice Mount\'n TV mounting service. 4.9-star rating from 150+ satisfied customers.',
    images: ["/images/stock/review-01.jpg"]
  },
  alternates: {
    canonical: 'https://icemountn.com/customer-reviews'
  }
};

export default function CustomerReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

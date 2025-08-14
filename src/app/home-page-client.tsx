'use client';

import { useState } from 'react';
import { SiteLayout } from '@/components/site-layout';
import { HeroSection } from '@/components/hero-section';
import { ServicesGrid } from '@/components/services-grid';
import { AreasSection } from '@/components/areas-section';
import { ReviewsSection } from '@/components/reviews-section';
import { FAQSection } from '@/components/faq-section';
import FeaturedProject from '@/components/FeaturedProject';
import { openBooking } from '@/utils/housecall-pro';
import SeoTextBlock from '@/components/seo-text-block';

export default function HomePageClient() {
  return (
    <SiteLayout>
      <HeroSection />
      
      <ServicesGrid />
      
      <AreasSection />
      
      <ReviewsSection />
      
      <FAQSection />
      
      <SeoTextBlock
        title="Professional TV Mounting Services in Los Angeles: What to Expect"
        paragraphs={[
          "When you choose Ice Mount'n for TV mounting services in Los Angeles, you're selecting a team that understands the unique characteristics of Southern California homes and apartments. Our technicians are familiar with local building codes, wall types, and regulations across all Los Angeles County areas, ensuring your installation meets all requirements while maintaining the aesthetic appeal of your space.",
          "Our comprehensive service area covers all residential and commercial properties throughout Los Angeles, from historic homes in Pasadena to modern apartments in Santa Monica. We handle everything from basic mounting to complex installations requiring custom solutions, including over-fireplace mounting, in-wall cable concealment, and specialized Samsung Frame TV installations.",
          "The installation process typically takes 1-4 hours depending on your setup complexity and service type. We arrive on time, work efficiently, and leave your space cleaner than we found it. Our same-day service availability means you can enjoy your new TV setup without waiting weeks for an appointment, regardless of your location in the Greater Los Angeles area."
        ]}
      />
      
      <FeaturedProject />
    </SiteLayout>
  );
}

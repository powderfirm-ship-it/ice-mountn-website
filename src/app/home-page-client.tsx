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

export default function HomePageClient() {
  return (
    <SiteLayout>
      <HeroSection />
      
      <ServicesGrid />
      
      <AreasSection />
      
      <ReviewsSection />
      
      <FAQSection />
      
      <FeaturedProject />
    </SiteLayout>
  );
}

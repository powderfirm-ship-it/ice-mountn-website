'use client';

import { useEffect } from 'react';
import { loadHcpWidget } from '@/utils/housecall-pro';

export default function HcpProvider() {
  useEffect(() => {
    // Defer HCP widget loading until after user interaction to avoid blocking LCP
    const handleUserInteraction = () => {
      loadHcpWidget().catch(console.warn);
      // Remove event listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    // Wait for user interaction before loading HCP
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('scroll', handleUserInteraction, { once: true });
    document.addEventListener('keydown', handleUserInteraction, { once: true });

    // Fallback: load after 5 seconds if no interaction
    const fallbackTimer = setTimeout(() => {
      loadHcpWidget().catch(console.warn);
    }, 5000);

    return () => {
      clearTimeout(fallbackTimer);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  return null; // This component doesn't render anything
}

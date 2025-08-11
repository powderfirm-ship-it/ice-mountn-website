'use client';

import { useEffect } from 'react';
import { loadHcpWidget } from '@/utils/housecall-pro';

export default function HcpProvider() {
  useEffect(() => {
    // Warm the HCP widget on mount for better performance
    loadHcpWidget().catch(console.warn);
  }, []);

  return null; // This component doesn't render anything
}

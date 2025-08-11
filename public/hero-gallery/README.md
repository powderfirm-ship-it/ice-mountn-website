# Hero Gallery Images

This directory should contain 3 images for the hero section carousel:

- `1.webp` - First gallery image (600×340px recommended)
- `2.webp` - Second gallery image (600×340px recommended)
- `3.webp` - Third gallery image (600×340px recommended)

## How to Update

1. Add your professional TV mounting project photos to this directory
2. Name them `1.webp`, `2.webp`, and `3.webp`
3. Recommended dimensions: 600×340 pixels
4. Use WebP format for optimal performance
5. Update the `images` array in `/src/components/hero-section.tsx` to use local paths:

```typescript
const images = [
  '/hero-gallery/1.webp',
  '/hero-gallery/2.webp',
  '/hero-gallery/3.webp'
];
```

## Current Status

Currently using high-quality Unsplash images as placeholders. Replace with actual project photos when available.

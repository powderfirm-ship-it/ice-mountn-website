# Logo Instructions

## Replace the Ice Mount'n Logo

To update the logo on your website:

1. **Prepare your logo:**
   - Save as `ice-mountn-logo.png`
   - Recommended size: 48x40 pixels (or proportional)
   - Use PNG format with transparent background for best results

2. **Upload the logo:**
   - Place the `ice-mountn-logo.png` file in this `/public/images/` folder
   - The logo will automatically appear in both the header and footer

3. **Current logo system:**
   - **Primary logo path:** `/images/ice-mountn-logo.png`
   - **Fallback:** Blue placeholder boxes with "LOGO" text
   - **Auto-switching:** If your logo file doesn't exist, placeholder shows automatically

4. **Logo display sizes:**
   - **Header:** 48px wide × 40px tall
   - **Footer:** 32px wide × 24px tall
   - Your logo will automatically scale to fit these dimensions while maintaining aspect ratio

5. **To use a different filename:**
   - Update the `src` attribute in both:
     - `src/components/header.tsx` (line ~37)
     - `src/components/footer.tsx` (line ~14)

## Current Status
✅ **Placeholder system active** - Blue "LOGO" boxes show until you upload your PNG
✅ **Automatic fallback** - No broken images, always shows something
✅ **Easy replacement** - Just upload `ice-mountn-logo.png` and it appears instantly

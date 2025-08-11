# Test Instructions - Hero Carousel Restoration

## **Local Testing Instructions**

### **1. Build Verification**
```bash
# Ensure no build errors
npm run build

# Expected output: Build successful with no TypeScript errors
```

### **2. Development Server**
```bash
# Start development server
npm run dev

# Expected: Server runs on localhost:3000 without errors
```

### **3. Hero Carousel Functionality Test**

#### **Immediate Display Test**
1. Open localhost:3000 in Chrome
2. **Expected**: Hero section shows immediately with:
   - Left side: Text content (headlines, CTAs, trust badges)
   - Right side: Rounded image card with hero-1.webp
   - No layout shifts or loading delays

#### **Carousel Hydration Test**
1. Wait 1-2 seconds after page load
2. **Expected**: Carousel functionality appears:
   - Navigation arrows (left/right) become visible on hover
   - Dot indicators appear at bottom of image
   - Smooth transitions between images

#### **Carousel Navigation Test**
1. **Arrow Navigation**:
   - Hover over the image area
   - Click left arrow → Image should change to hero-2.webp
   - Click right arrow → Image should change to hero-3.webp
   - **Expected**: Smooth transitions, no layout shifts

2. **Dot Navigation**:
   - Click bottom dot indicators
   - **Expected**: Direct navigation to specific slide
   - Active dot should be highlighted (white vs white/50)

3. **Loop Functionality**:
   - Navigate past last image
   - **Expected**: Smooth loop back to first image

### **4. Performance Verification**

#### **LCP (Largest Contentful Paint)**
1. Open Chrome DevTools (F12)
2. Go to Performance tab
3. Refresh page with "Screenshots" enabled
4. **Expected**: Hero image loads within 2.5 seconds
5. **Expected**: No layout shifts during image loading

#### **CLS (Cumulative Layout Shift)**
1. In Performance tab, look for layout shifts
2. **Expected**: CLS should be near 0.00 above the fold
3. **Expected**: Fixed aspect ratio container prevents shifts

#### **Image Loading Strategy**
1. Go to Network tab
2. Filter by "Img"
3. **Expected**: 
   - Hero-1.webp loads with `priority` (first)
   - Other hero images load progressively
   - Gallery images use `loading="lazy"`

### **5. Visual Design Verification**

#### **Layout Consistency**
- ✅ **Left Side**: Text content unchanged (headlines, CTAs, badges)
- ✅ **Right Side**: Rounded card with gradient background
- ✅ **Image Container**: Fixed aspect ratio (4:5), rounded corners
- ✅ **Floating Tools**: 🔧 and 📏 icons in correct positions
- ✅ **Shadows**: Consistent shadow-xl on card and image

#### **Responsive Behavior**
1. Test on mobile (DevTools device toolbar)
2. **Expected**: 
   - Stacked layout (text above image)
   - Image maintains aspect ratio
   - No horizontal overflow

### **6. Accessibility Verification**

#### **Keyboard Navigation**
1. Tab through page elements
2. **Expected**: 
   - Focus indicators visible on all interactive elements
   - Arrow keys work for carousel navigation
   - Enter/Space activate carousel controls

#### **Screen Reader Support**
1. Use Chrome DevTools Accessibility tab
2. **Expected**: 
   - Proper alt text on all images
   - Carousel region properly labeled
   - Navigation buttons have descriptive labels

## **Performance Benchmarks**

### **Expected Results**
- **LCP**: < 2.5s (hero image loads immediately)
- **CLS**: ~0.00 (fixed aspect ratio prevents shifts)
- **INP**: < 200ms (smooth carousel interactions)
- **Overall Score**: 90+ (maintains performance gains)

### **Success Criteria**
1. ✅ Hero image displays immediately (no loading delay)
2. ✅ Carousel functionality appears within 1-2 seconds
3. ✅ No layout shifts during carousel hydration
4. ✅ Smooth transitions between images
5. ✅ All performance optimizations preserved

## **Troubleshooting**

### **Carousel Not Working**
1. Check browser console for JavaScript errors
2. Verify Embla Carousel is properly imported
3. Check if `useEffect` is running correctly

### **Layout Shifts**
1. Verify aspect ratio container is working
2. Check if fallback component matches carousel dimensions
3. Ensure no conflicting CSS styles

### **Performance Issues**
1. Verify hero image still has `priority` and `fetchPriority="high"`
2. Check that only first image uses priority
3. Ensure dynamic import is working correctly

## **File Changes Summary**

### **New Files Created**
- `src/components/hero-media.tsx` - Client component with carousel
- `src/components/hero-media-fallback.tsx` - Static fallback image
- `docs/TEST-HERO.md` - This test document

### **Files Modified**
- `src/components/hero-section.tsx` - Added dynamic import
- `src/app/page.tsx` - Fixed imports and gallery images

### **Performance Preserved**
- ✅ WebP images maintained
- ✅ Priority loading for hero image
- ✅ Fixed aspect ratios prevent CLS
- ✅ Dynamic imports for below-the-fold sections
- ✅ Server component benefits maintained

---

*Test the hero carousel thoroughly to ensure smooth functionality while maintaining all performance optimizations.*
*Expected result: Functional carousel with no performance regression.*

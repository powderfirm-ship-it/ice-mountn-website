# Test Instructions - Performance & SEO Optimizations

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

### **3. Chrome DevTools Network Analysis**

#### **Font Loading Test**
1. Open Chrome DevTools (F12)
2. Go to Network tab
3. Refresh page
4. **Expected**: No Google Fonts CSS requests
5. **Expected**: Fonts load from `next/font` (local)

#### **Script Loading Test**
1. In Network tab, filter by "JS"
2. **Expected**: No Housecall Pro script loaded initially
3. Click any "Book Online" button
4. **Expected**: Housecall Pro script loads on-demand
5. **Expected**: Modal opens successfully

#### **Image Loading Test**
1. In Network tab, filter by "Img"
2. **Expected**: Hero image loads with `priority` (first)
3. **Expected**: All images use `.webp` format
4. **Expected**: Gallery/review images load with `loading="lazy"`

### **4. Lighthouse Performance Test**

#### **Mobile Performance**
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select "Mobile" device
4. Check "Performance" category
5. Click "Generate report"

#### **Expected Results**
- **LCP**: < 2.5s (was ~4.2s)
- **CLS**: < 0.1 (was high)
- **INP**: < 200ms
- **Overall Score**: 90+ (was ~65)

#### **Core Web Vitals**
- **LCP**: ✅ < 2.5s
- **CLS**: ✅ < 0.1
- **INP**: ✅ < 200ms

### **5. Visual Verification**

#### **Hero Section**
- ✅ Single hero image (no carousel)
- ✅ Fixed aspect ratio (16:9)
- ✅ No layout shifts during load
- ✅ Image loads immediately (priority)

#### **Gallery & Reviews**
- ✅ Fixed aspect ratio containers
- ✅ No layout shifts
- ✅ Images load progressively
- ✅ WebP format used

#### **Accessibility**
- ✅ Button contrast meets WCAG AA
- ✅ Tap targets ≥ 44x44px
- ✅ Meaningful alt text on all images
- ✅ Focus indicators visible

### **6. Code Quality Checks**

#### **Font Usage**
```bash
# Check for Google Fonts imports
grep -r "fonts.googleapis.com" src/
# Expected: No results

# Check for next/font usage
grep -r "next/font" src/
# Expected: Multiple results
```

#### **Image References**
```bash
# Check for JPG references
grep -r "\.jpg" src/
# Expected: No results

# Check for WebP references
grep -r "\.webp" src/
# Expected: Multiple results
```

#### **Housecall Pro Usage**
```bash
# Check for global script tags
grep -r "housecallpro" src/app/layout.tsx
# Expected: No results

# Check for on-demand loading
grep -r "openHcp" src/
# Expected: Multiple results
```

## **Production Testing**

### **1. Deploy to Production**
```bash
# Deploy your changes
npm run build
# Deploy to your hosting platform
```

### **2. PageSpeed Insights Test**
1. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter your production URL
3. Select "Mobile" device
4. Click "Analyze"

#### **Expected Improvements**
- **Mobile PSI**: +20-25 points improvement
- **LCP**: 40% faster loading
- **CLS**: Eliminated above-the-fold
- **INP**: Improved interaction response

### **3. Real User Monitoring**
1. Check Google Analytics Core Web Vitals
2. Monitor Search Console performance
3. Track user engagement metrics

## **Troubleshooting**

### **Build Errors**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### **Font Issues**
```bash
# Check font variables
grep -r "font-family" src/app/globals.css
# Should show var(--font-inter) and var(--font-open-sans)
```

### **Image Loading Issues**
```bash
# Verify WebP files exist
ls -la public/images/stock/*.webp
# Should show all converted images
```

### **Performance Issues**
1. Check Network tab for failed requests
2. Verify image sizes are correct
3. Check for render-blocking resources
4. Ensure lazy loading is working

## **Success Criteria**

### **✅ All Tests Pass When:**
1. `npm run build` completes without errors
2. `npm run dev` runs successfully
3. No Google Fonts requests in Network tab
4. Housecall Pro loads only on button click
5. All images use WebP format
6. No layout shifts above the fold
7. Lighthouse Mobile score ≥ 90
8. LCP < 2.5s
9. CLS < 0.1

### **🎯 Performance Targets**
- **Mobile PSI**: 90+ (was ~65)
- **LCP**: < 2.5s (was ~4.2s)
- **CLS**: < 0.1 (was high)
- **Image savings**: 55% average reduction
- **Font loading**: 200-400ms improvement

---

*Test these optimizations thoroughly before deploying to production.*
*Expected Mobile PSI improvement: +20-25 points*

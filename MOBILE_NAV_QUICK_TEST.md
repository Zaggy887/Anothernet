# Mobile Navigation Quick Test Guide

## How to Test Mobile Navigation

### 1. Open Mobile View
- Chrome DevTools: Press F12 → Click mobile icon (top-left)
- Set device to iPhone 12 Pro or similar
- Width: 390px recommended

### 2. Test Menu Open/Close
1. Click hamburger menu (☰) → Should fade in smoothly
2. Click X → Should close smoothly
3. Menu should not "jump" or flash

### 3. Test All 4 Service Links
Open menu → Click "Services" → Verify each link works:

✅ **💰 Capital Raising** → Should go to `/services/capital-raising`
✅ **🤝 M&A Advisory** → Should go to `/services/ma-advisory`
✅ **🌐 Strategic Partnerships** → Should go to `/services/partnerships`
✅ **🚀 Market Entry** → Should go to `/services/market-entry`

### 4. Test Page Transitions
1. Click any service link
2. **Expected behavior:**
   - Old page fades out FIRST (500ms)
   - Brief white flash (100ms)
   - New page fades in (600ms)
3. **Wrong behavior (what we fixed):**
   - New page appears instantly
   - Then transition plays

### 5. Test Menu Auto-Close
1. Open mobile menu
2. Click any link
3. Menu should close automatically
4. Should not stay open on new page

### 6. Test Different Screen Sizes
- iPhone SE (320px) - Smallest
- iPhone 12 (390px) - Common
- iPhone 14 Pro Max (430px) - Large
- iPad Mini (768px) - Tablet breakpoint

## Expected Results

✅ Smooth fade animations
✅ All 4 service links work
✅ Menu closes after clicking
✅ Page transitions BEFORE content loads
✅ No jumpy behavior
✅ Touch targets are easy to tap (min 44px)

## Common Issues Fixed

❌ **Old:** Content appeared, then transition
✅ **New:** Transition happens, then content appears

❌ **Old:** Menu might stay open after clicking
✅ **New:** Menu auto-closes on navigation

❌ **Old:** Services dropdown had no animation
✅ **New:** Smooth slideDown animation

---

## Quick Debug

If something doesn't work:

1. **Check browser console** for errors
2. **Verify build was successful** (`npm run build`)
3. **Test on real device** if DevTools has issues
4. **Check network tab** to confirm routes load

All service pages should exist:
- /services/capital-raising
- /services/ma-advisory
- /services/partnerships
- /services/market-entry

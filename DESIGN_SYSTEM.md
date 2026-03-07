# ACNDC Website - Modern Design System v2.0

## 📋 Overview

This document outlines the modern design system implemented for the ACNDC website, replacing the previous dated design with a contemporary, professional aesthetic.

## 🎨 Color Palette

### Primary Colors
- **Primary Dark**: `#1a472a` - Deep forest green
- **Primary**: `#2d6a4f` - Main brand green
- **Primary Light**: `#40916c` - Lighter green
- **Primary Lighter**: `#52b788` - Light green

### Secondary Colors
- **Secondary Dark**: `#1d3557` - Deep blue
- **Secondary**: `#2a5f7f` - Slate blue
- **Secondary Light**: `#457b9d` - Light blue
- **Secondary Lighter**: `#a8dadc` - Very light blue

### Accent Colors
- **Warm Accent**: `#f77f00` - Orange
- **Cool Accent**: `#06a77d` - Teal
- **Accent Light**: `#d7f0dc` - Light green

### Neutral Colors
- **White**: `#ffffff`
- **Light Gray**: `#f8f9fa`
- **Gray**: `#e9ecef`
- **Dark Gray**: `#6c757d`
- **Darker**: `#343a40`
- **Black**: `#1a1a1a`

### Semantic Colors
- **Success**: `#06a77d` - Green
- **Warning**: `#f77f00` - Orange
- **Error**: `#d62828` - Red
- **Info**: `#457b9d` - Blue

## 🔤 Typography

### Font Family
- **Base Font**: 'Raleway', 'PT Sans', sans-serif
- **Fallback**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI')
- **Mono Font**: 'Monaco', 'Courier New'

### Font Sizes
```
xs:    0.75rem   (12px)
sm:    0.875rem  (14px)
base:  1rem      (16px)
lg:    1.125rem  (18px)
xl:    1.25rem   (20px)
2xl:   1.5rem    (24px)
3xl:   1.875rem  (30px)
4xl:   2.25rem   (36px)
5xl:   3rem      (48px)
6xl:   3.5rem    (56px)
```

### Font Weights
- **Light**: 300
- **Normal**: 400
- **Semibold**: 600
- **Bold**: 700
- **Black**: 900

## 📐 Spacing Scale

```
xs:    0.25rem   (4px)
sm:    0.5rem    (8px)
md:    1rem      (16px)
lg:    1.5rem    (24px)
xl:    2rem      (32px)
2xl:   2.5rem    (40px)
3xl:   3rem      (48px)
4xl:   3.5rem    (56px)
5xl:   4rem      (64px)
6xl:   4.5rem    (72px)
```

## 🔲 Border Radius

```
sm:    0.375rem  (6px)
md:    0.5rem    (8px)
lg:    0.75rem   (12px)
xl:    1rem      (16px)
2xl:   1.5rem    (24px)
3xl:   2rem      (32px)
full:  9999px    (circular)
```

## 🌟 Shadows

```
sm:    0 1px 2px rgba(0,0,0,0.05)
md:    0 4px 6px -1px rgba(0,0,0,0.1)
lg:    0 10px 15px -3px rgba(0,0,0,0.1)
xl:    0 20px 25px -5px rgba(0,0,0,0.1)
2xl:   0 25px 50px -12px rgba(0,0,0,0.25)
```

## ✨ Gradients

- **Primary Gradient**: `linear-gradient(135deg, #2d6a4f 0%, #40916c 100%)`
- **Secondary Gradient**: `linear-gradient(135deg, #2a5f7f 0%, #457b9d 100%)`
- **Accent Gradient**: `linear-gradient(135deg, #f77f00 0%, #06a77d 100%)`
- **Success Gradient**: `linear-gradient(135deg, #06a77d 0%, #40916c 100%)`

## ⏱️ Transitions

- **Fast**: `all 0.15s ease-out`
- **Base**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Slow**: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1)`

## 🎯 Components

### Buttons
- **.btn-primary**: Gradient primary button with hover effects
- **.btn-secondary**: Secondary button for less important actions
- **.btn-accent**: Orange-to-teal accent button
- **.btn-outline**: Outlined button variant
- **.btn-ghost**: Transparent button with border
- **.btn-sm / .btn-lg**: Size variants
- **.btn-icon**: Circular icon button

**Features:**
- Smooth hover animations (translateY effect)
- Active state compression
- Box shadow elevation changes
- Gradient backgrounds

### Cards
- **.card**: Base card with subtle shadow
- **.card-interactive**: Card with ripple effect on hover
- **.card-gradient**: Gradient background card
- **.card-flat**: Minimal card design

**Features:**
- Hover elevation with shadow change
- Transform animations
- Border transitions
- Accessibility support

### Forms
- **.form-group**: Wrapper for form elements
- **.form-label**: Styled form labels with primary color
- **.form-control**: Input, textarea, select styling
  - Focus states with color-coded borders
  - Accessibility-focused outlines
  - Disabled state styling
  - Smooth transitions

### Badges & Labels
- **.badge-primary / secondary / success / warning / error / light**
- Full-rounded appearance
- Semantic color coding
- Uppercase text with letter spacing

### Alerts
- **.alert-success / warning / error / info**
- Left border accent
- Icon support
- Close button
- Subtle background colors

### Progress & Loading
- **.progress**: Background bar with animated fill
- **.spinner**: Rotating loader animation
- **Sizes**: sm, default, lg

## 📱 Responsive Breakpoints

```
Mobile:       max-width: 480px
Tablet:       480px - 768px
Laptop:       768px - 1200px
Desktop:      1200px - 1400px
Large:        1400px+
```

## 🎬 Key Design Features

### 1. Glassmorphism
- Used in Header with `backdrop-filter: blur(8px)`
- Semi-transparent backgrounds with layered depth
- Modern, sophisticated appearance

### 2. Gradient Overlays
- Subtle gradients on hero sections
- Prevents text overlap with background images
- Improves readability and visual hierarchy

### 3. Micro-interactions
- Button hover states with transform animations
- Card elevation changes
- Smooth transitions between states
- Progress indicators

### 4. Modern Typography
- Increased line-height for readability (1.6-1.8)
- Letter spacing on headings for elegance
- Clear visual hierarchy with size progression
- Semantic HTML with proper heading levels

### 5. Spacing Consistency
- Removed inconsistent padding/margins
- Implemented CSS variables for consistency
- Mobile-first responsive adjustments
- Breathing room around elements

## 🚀 Implementation Guide

### 1. Import in Components
```javascript
@import url('../../../styles/theme.css');
@import url('../../styles/components.css');
```

### 2. Use CSS Variables
```css
.my-element {
  color: var(--primary);
  padding: var(--spacing-lg);
  font-size: var(--font-size-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
}
```

### 3. Apply Button Classes
```html
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary btn-sm">Small Secondary</button>
<button class="btn btn-outline btn-lg">Large Outline</button>
```

### 4. Use Cards
```html
<div class="card card-interactive">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p>Card content here</p>
  </div>
</div>
```

## 📊 Color Swatches Reference

| Name | Hex | RGB | Use Case |
|------|-----|-----|----------|
| Primary | #2d6a4f | 45, 106, 79 | Main brand, buttons, links |
| Primary Light | #40916c | 64, 145, 108 | Hover states, accents |
| Secondary | #2a5f7f | 42, 95, 127 | Alternative actions |
| Accent Warm | #f77f00 | 247, 127, 0 | Call-to-action, highlights |
| Accent Cool | #06a77d | 6, 167, 125 | Success, confirmation |
| Neutral Light | #f8f9fa | 248, 249, 250 | Backgrounds |
| Neutral Dark | #343a40 | 52, 58, 64 | Text, borders |

## ✅ Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS 14+, Android 10+)

**Features used:**
- CSS Custom Properties (Variables)
- Flexbox & Grid
- Backdrop Filter (graceful degradation)
- CSS Gradients
- Animations & Transforms
- Media Queries

## 🔄 Migration Checklist

- [x] Create theme.css with color system
- [x] Create components.css with modern component styles
- [x] Update Header styling with glassmorphism
- [x] Update Landing page with gradients and animations
- [x] Update Footer with modern design
- [x] Update Actualite/News component cards
- [ ] Update remaining page components (Programmes, Commissions, etc.)
- [ ] Add Framer Motion animations for enhanced UX
- [ ] Test responsive design across devices
- [ ] Optimize performance
- [ ] Create design tokens documentation

## 🎓 Best Practices

1. **Always use CSS variables** for consistency
2. **Test hover and focus states** for accessibility
3. **Use semantic HTML** with proper heading hierarchy
4. **Include transitions** for smooth interactions
5. **Test on mobile** - mobile-first approach
6. **Use flexbox/grid** over floats
7. **Maintain color contrast** for accessibility (WCAG AA)
8. **Document custom components** with examples

## 📝 Notes

- All times/transitions use cubic-bezier for professional feel
- Shadows provide depth without being harsh
- Colors are accessible and WCAG AA compliant
- System maintains brand identity while modernizing
- Design is future-proof and scalable

## 👥 Support & Questions

For questions about the design system, refer to the CSS comments in:
- `src/styles/theme.css` - Core design tokens
- `src/styles/components.css` - Reusable components
- Individual component CSS files - Component-specific styles

---

**Last Updated**: February 2026
**Version**: 2.0
**Status**: Active - All new features use this system

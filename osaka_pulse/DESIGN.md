---
name: Osaka Pulse
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#5f3f3b'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#946e69'
  outline-variant: '#e9bcb6'
  surface-tint: '#c0000d'
  primary: '#b7000c'
  on-primary: '#ffffff'
  primary-container: '#e60012'
  on-primary-container: '#fff7f6'
  inverse-primary: '#ffb4aa'
  secondary: '#3f5f92'
  on-secondary: '#ffffff'
  secondary-container: '#a6c4fe'
  on-secondary-container: '#315183'
  tertiary: '#705d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c9a900'
  on-tertiary-container: '#4c3f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#aac7ff'
  on-secondary-fixed: '#001b3e'
  on-secondary-fixed-variant: '#264779'
  tertiary-fixed: '#ffe16d'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Noto Serif
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The brand personality is **"Vibrant Heritage"**—a high-energy, welcoming, and sensory-driven experience that captures Osaka’s reputation as Japan’s kitchen and its most outgoing city. The target audience includes international travelers seeking a mix of culinary exploration, urban neon-lit excitement, and historical depth.

The design style utilizes **Modern Corporate with Glassmorphism accents**. It balances a structured, highly informative information architecture with energetic "pops" of color and motion. Visuals should evoke the physical sensation of walking through Dotonbori at night: bright, layered, and deeply immersive. Traditional Japanese motifs, such as *Seigaiha* (wave) patterns or minimalist brushstroke underlines, are used sparingly as decorative accents to ground the modern UI in cultural context.

## Colors
This design system centers on **Osaka Red** (#E60012), a high-chroma primary color that represents energy, street food, and the lacquer of shrines. This is balanced by **Bay Navy** (#002B5C), a sophisticated deep blue that provides professional contrast and represents Osaka’s harbor and maritime history.

The background uses **Clean White** (#FFFFFF) and **Soft Gray** (#F8F9FA) to ensure readability and allow high-quality photography to shine. **Golden Osaka** (#FFD700) is used as an accent color for highlights, star ratings, and interactive "surprise" moments, echoing the gilded details of Osaka Castle.

## Typography
The typography strategy mixes modern efficiency with refined elegance. **Plus Jakarta Sans** serves as the primary headline typeface, chosen for its friendly, open apertures and geometric modernism. **Be Vietnam Pro** is utilized for body copy to ensure warmth and high legibility for information-heavy travel guides.

**Noto Serif** is reserved for labels, sub-captions, and decorative headers. This serif touch mimics the stroke contrast of Japanese calligraphy, providing a sophisticated cultural bridge. When displaying Japanese characters, use a "Mincho" style font stack to maintain the refined, literary feel of the Noto Serif labels.

## Layout & Spacing
The layout follows a **12-column fixed grid** for desktop, shifting to a fluid single-column layout for mobile. A strict 8px spacing scale ensures a rhythmic vertical flow. Large-scale imagery should often break the grid—using full-bleed sections to showcase landmarks like Osaka Castle—while informational content remains contained within the 1280px central container.

Padding within cards and containers should be generous to maintain a "welcoming" feel, avoiding the cramped aesthetic often found in utilitarian travel portals. Use asymmetrical spacing for decorative elements to create a sense of dynamic movement.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Tonal Layering**. Navigation bars and search overlays should use a background blur (backdrop-filter: blur(12px)) with a 70% white opacity to maintain visibility over vibrant photography.

Interactive elements use **Ambient Shadows**: soft, diffused shadows tinted with a hint of Bay Navy (#002B5C) to prevent them from looking "dirty." Secondary containers use subtle tonal shifts (Soft Gray vs. White) rather than heavy shadows to maintain a clean, modern aesthetic. Interactive cards should slightly lift on hover using a more pronounced, warm shadow to invite engagement.

## Shapes
This design system uses **Rounded** geometry (0.5rem base radius) to evoke a friendly and approachable personality. High-impact elements like primary "Book Now" buttons or featured destination cards use `rounded-xl` (1.5rem) to create a softer, modern silhouette. 

Subtle traditional motifs, like the *Enso* circle or stylized *Hanko* stamps, should be used as background textures or decorative "bullets" in lists. These shapes should remain organic and soft to contrast with the crisp, geometric lines of the modern UI grid.

## Components
- **Buttons:** Primary buttons are "Osaka Red" with white text and a slightly rounded-pill shape. Secondary buttons use "Bay Navy" with a ghost (outlined) style.
- **Chips & Tags:** Use soft-tinted backgrounds (e.g., 10% Osaka Red) with bold red text for categories like "Food," "Nightlife," or "History."
- **Search Bar:** A prominent, centered component with a glassmorphic background and a bold "Osaka Red" search icon.
- **Interactive Maps:** Custom-styled maps using the Bay Navy and Gray palette, with Red markers for points of interest.
- **Cards:** Travel destination cards featuring high-quality imagery, a subtle gradient overlay at the bottom for text legibility, and a 1px soft gray border.
- **Cultural Markers:** Small vertical text labels (using Noto Serif) placed on the edges of sections to act as "bookmarks" for different city districts.
- **Booking Widgets:** Clean, white-background panels with clear typography and high-contrast inputs, ensuring the utility of the site remains professional and reliable.
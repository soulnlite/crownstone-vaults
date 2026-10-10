// /styles/tokens.js
// Crownstone Vaults Limited — Institutional Design Tokens
// Global source of truth for colors, fonts, spacing, shadows, and structural UI rules.

export const colors = {
  // Header + Section Titles
  headerGold: "rgba(201,168,106,0.92)",
  headerGoldSoft: "rgba(201,168,106,0.78)",

  // Body Text
  textPlatinum: "rgba(253,244,227,0.82)",

  // Plaque Borders
  plaqueBorderGold: "rgba(201,168,106,0.35)",

  // Plaque Backgrounds
  plaqueBgDark:
    "linear-gradient(135deg, rgba(10,21,38,0.92), rgba(7,16,31,0.96))",

  // Header Plaque Background
  headerPlaqueBg:
    "linear-gradient(135deg, rgba(201,168,106,0.18) 0%, rgba(10,23,40,0.92) 40%, #07101F 100%)",

  // CTA Button Gradient
  ctaGold:
    "linear-gradient(135deg, #C9A86A 0%, #F3D39A 40%, #9C7C45 100%)",

  // Underline Bar
  underlineGold:
    "linear-gradient(90deg, #C9A86A 0%, rgba(201,168,106,0.4) 70%, transparent 100%)",
};

export const fonts = {
  base: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

export const spacing = {
  // Global Page Spacing
  pageTop: "0.3rem",

  // Header Plaque Internal Padding
  headerPadding: "1.25rem 1.75rem",

  // Header Bottom Margin
  headerMarginBottom: "1.2rem",

  // Section Spacing
  sectionSpacing: "3rem",

  // Plaque Padding
  plaquePadding: "1.6rem 1.5rem",
};

export const shadows = {
  // Header Plaque Shadow
  header: "0 16px 42px rgba(0,0,0,0.58)",

  // Plaque Shadow
  plaque: "0 12px 32px rgba(0,0,0,0.5)",

  // CTA Button Shadow
  cta:
    "0 10px 26px rgba(201,168,106,0.55), 0 0 12px rgba(201,168,106,0.35), inset 0 2px 4px rgba(255,255,255,0.25)",
};

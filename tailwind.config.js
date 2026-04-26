/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./osaka_pulse/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "error": "#ba1a1a",
        "on-secondary-container": "#315183",
        "surface-dim": "#d9dadb",
        "tertiary-container": "#c9a900",
        "secondary-fixed-dim": "#aac7ff",
        "outline": "#946e69",
        "on-surface-variant": "#5f3f3b",
        "surface-tint": "#c0000d",
        "on-error-container": "#93000a",
        "on-secondary-fixed-variant": "#264779",
        "inverse-primary": "#ffb4aa",
        "on-background": "#191c1d",
        "on-tertiary": "#ffffff",
        "surface-container": "#edeeef",
        "on-surface": "#191c1d",
        "primary-container": "#e60012",
        "secondary-fixed": "#d6e3ff",
        "inverse-on-surface": "#f0f1f2",
        "inverse-surface": "#2e3132",
        "on-secondary-fixed": "#001b3e",
        "tertiary-fixed-dim": "#e9c400",
        "primary-fixed": "#ffdad5",
        "on-primary-fixed-variant": "#930007",
        "surface-container-high": "#e7e8e9",
        "on-primary-fixed": "#410001",
        "background": "#f8f9fa",
        "on-error": "#ffffff",
        "tertiary": "#705d00",
        "on-primary-container": "#fff7f6",
        "on-tertiary-fixed": "#221b00",
        "primary-fixed-dim": "#ffb4aa",
        "tertiary-fixed": "#ffe16d",
        "surface-container-highest": "#e1e3e4",
        "on-tertiary-fixed-variant": "#544600",
        "surface-container-lowest": "#ffffff",
        "secondary-container": "#a6c4fe",
        "surface-bright": "#f8f9fa",
        "on-tertiary-container": "#4c3f00",
        "surface": "#f8f9fa",
        "error-container": "#ffdad6",
        "surface-container-low": "#f3f4f5",
        "surface-variant": "#e1e3e4",
        "secondary": "#3f5f92",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "outline-variant": "#e9bcb6",
        "primary": "#b7000c"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "container-max": "1280px",
        "margin-desktop": "64px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "unit": "8px"
      },
      "fontFamily": {
        "headline-xl": ["Plus Jakarta Sans"],
        "display-lg": ["Plus Jakarta Sans"],
        "body-md": ["Be Vietnam Pro"],
        "headline-md": ["Plus Jakarta Sans"],
        "body-lg": ["Be Vietnam Pro"],
        "label-caps": ["Noto Serif"]
      },
      "fontSize": {
        "headline-xl": ["48px", {"lineHeight": "56px", "fontWeight": "700"}],
        "display-lg": ["64px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "800"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "headline-md": ["32px", {"lineHeight": "40px", "fontWeight": "700"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "label-caps": ["14px", {"lineHeight": "20px", "letterSpacing": "0.1em", "fontWeight": "600"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}

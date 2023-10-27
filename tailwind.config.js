/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "animated-gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center"
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center"
          }
        },
        "card-translate-y": {
          "0%": {
            "transform": "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.9, 0, 1, 1)",
          },
          "100%": {
            "transform": "translateY(-0.5%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.1, 1)",
          }
        },
        "card-bounce": {
          "0%, 100%": {
            "transform": "translateY(-0.5%)",
            "animation-timing-function": "cubic-bezier(0.9, 0, 1, 1)",
          },
          "50%" : {
            "transform": "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.1, 1)",
          }
        },
        "scrollMarquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(var(--translation-value))" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        "animated-gradient": "animated-gradient 6s ease infinite alternate",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-xy": "gradient-xy 5s ease infinite",
        "gradient-xy-delay": "gradient-xy 10s ease infinite",
        "card-translate-y": "card-translate-y 0.2s forwards",
        "card-bounce": "card-bounce 1s infinite",
        "scrollMarquee": "scrollMarquee 30s linear infinite",
      },
      transitionProperty: {
        "transform": "transform",
        "transform-opacity": "transform, opacity",
      },
      transitionDuration: {
        "1000": "1000ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      },
      translate: {
        "full": "100%",
        "0": "0",
      },
      boxShadow: {
        glow: '0 0 10px 4px rgba(109, 40, 217, 0.8)',
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}

import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        manrope: ["var(--font-manrope)", ...fontFamily.sans],
        dmSans: ["var(--font-dm-sans)", ...fontFamily.sans],
        bebasNeue: ["var(--font-bebas-neue)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
        kronaOne: ["var(--font-krona-one)", ...fontFamily.sans],
      },
      animation: {
        "fade-in": "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "tilt-in-fwd-tr":
          "tilt-in-fwd-tr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "tilt-in-fwd-tr": {
          " 0%": {
            transform:
              "rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg)",
            opacity: "0",
          },
          " 100% ": {
            transform:
              "rotateY(0) rotateX(0deg) translate(-34px, -50%) skew(0deg, 0deg)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

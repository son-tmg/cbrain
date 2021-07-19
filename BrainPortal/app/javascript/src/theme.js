import { createGlobalStyle } from "styled-components";
import "/home/son/explore/cbrain/BrainPortal/app/javascript/packs/assets/fonts/fonts.css";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
  html{
    min-height: 100%;
    display: flex;
    flex-direction: column;

  }
   body {
    min-height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    #demo {
      display: flex;
      flex-grow: 1;
    }
  }

  html, body{
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

`;

export const theme = {
  breakpoints: ["30em", "48em", "62em", "80em"],
  colors: {
    bg: {
      default: "#FFFFFF",
      alt: "#F7FBFC",
      primary: "#002C47",
      secondary: "#05A3D6",
      light: "#F4F7FA",
      dark: "#050D1D",
      wash: "#CDE9F5",
      border: "#EAEBEC",
      border_lt: "#F4F6F8",
      grey_100: "#F9F9F9",
      grey_200: "#EFEFEF",
      grey_300: "#D0D5E0",
      grey_400: "#56627E",
    },
    text: {
      default: "#000000",
      primary: "#002C47",
      secondary: "#05A3D6",
      dark: "#282B2E",
      reverse: "#FFFFFF",
      grey_200: "#EFEFEF",
      grey_300: "#8995AF",
      grey_400: "#56627E",
    },
    group: {
      everyone: {
        default: "#5DCFAF",
        wash: "#53d6c5",
      },
      site: {
        default: "#696969",
        wash: "#686868",
      },
      user: {
        default: "#5db0d0",
        alt: "#05A3D6",
        wash: "#50bee2",
      },
      work: {
        default: "#5d80d0",
        wash: "#5381d6",
      },
    },
    disabled: {
      default: "#DBDFE6",
    },
    success: {
      default: "#51B83C",
      alt: "#28A833",
      dark: "#00663C",
      wash: "#BBE5B3",
      border: "#7FC572",
    },
    warn: {
      default: "#E6B002",
      alt: "#FFB52F",
      dark: "#825901",
      wash: "#FFF0C4",
      border: "#FFAA0F",
    },
    error: {
      default: "#F07171",
      alt: "#F32527",
      dark: "#85000C",
      wash: "#FCC2C2",
      border: "#E62223",
    },
  },
  text: {
    xs: {
      fontSize: "12px",
    },
    sm: {
      fontSize: "14px",
    },
    md: {
      fontSize: "16px",
    },
    lg: {
      fontSize: "18px",
    },
    xl: {
      fontSize: "20px",
    },
    "2xl": {
      fontSize: "24px",
    },
    "3xl": {
      fontSize: "28px",
    },
    "4xl": {
      fontSize: "36px",
    },
    "5xl": {
      fontSize: "48px",
    },
    "6xl": {
      fontSize: "64px",
    },
  },
  space: [
    "0rem",
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1rem", // equals 16px,
    "1.25rem",
    "1.5rem",
    "2rem",
    "2.5rem",
    "3rem",
    "4rem",
    "5rem",
    "6rem",
    "8rem",
    "10rem",
    "12rem",
    "14rem",
    "16rem",
  ],
  shadows: {
    xlow: "0 1px 2px rgba(0, 0, 0, 0.16)",
    low: "0 2px 4px rgba(0, 0, 0, 0.16)",
    mid: "0 4px 12px rgba(0, 0, 0, 0.26)",
    high: "0 8px 16px rgba(0, 0, 0, 0.26)",
    inset:
      "inset 5px 2px 20px 0px rgb(208, 213, 224,0.5), inset 0px 2px 15px 0px rgb(208, 213, 224,0.5)",
    outset:
      "5px 2px 20px 0px rgb(208, 213, 224,0.5), 0px 2px 15px 0px rgb(208, 213, 224,0.5)",
  },
  transitions: {
    hover: {
      on: "all 0.2s ease-in",
      off: "all 0.2s ease-out",
    },
    drawer: {
      on: "all 0.1s ease-in",
      off: "all 0.1s ease-out",
    },
  },
};

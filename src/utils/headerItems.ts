import { scrollToSection } from "./scrollToSection";

export const headerItems = [
  {
    label: "Features",
    href: "#features",
    onClick: () => scrollToSection("features"),
  },
  {
    label: "Who is it for",
    href: "#who-is-it-for",
    onClick: () => scrollToSection("who-is-it-for"),
  },
  {
    label: "Integration",
    href: "#integration",
    onClick: () => scrollToSection("integration"),
  },
  {
    label: "Contact",
    href: "#contact",
    onClick: () => scrollToSection("contact"),
  },
];

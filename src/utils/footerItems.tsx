import { scrollToSection } from "./scrollToSection";

export const footerItems = [
  {
    label: "About",
    href: "#",
    onClick: () => scrollToSection("features"), // Scroll to top/features as About section
  },
  {
    label: "Features",
    href: "#features",
    onClick: () => scrollToSection("features"),
  },
  {
    label: "Contact",
    href: "#contact",
    onClick: () => scrollToSection("contact"),
  },
];

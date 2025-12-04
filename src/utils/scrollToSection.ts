export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80; // Header height in pixels
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

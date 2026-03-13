export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const reveal = (className: string) => {
      const reveals = document.querySelectorAll(className);
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        }
      }
    };

    // Add event listeners for each reveal class
    ["reveal", "reveal2", "reveal3", "reveal4"].forEach((className) => {
      window.addEventListener("scroll", () => reveal(`.${className}`));
    });
  }
});

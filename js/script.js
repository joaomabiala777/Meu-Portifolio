// Adicionar ano atual automaticamente
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.querySelector(".footer-bottom p");
  const currentYear = new Date().getFullYear();
  yearSpan.innerHTML = yearSpan.innerHTML.replace("2025", currentYear);

  // Efeito smooth scroll para links internos
  document.querySelectorAll(".footer-links a").forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // MENU MOBILE
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");
      document.body.classList.toggle("menu-aberto");
    });
  }

  // DÚVIDAS / FAQ (ACORDION QUE ABRE E FECHA)
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((button) => {
    button.addEventListener("click", function () {
      const faqItem = this.closest(".faq-item");
      
      // Fecha os outros itens que estiverem abertos
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("open");
          const ans = item.querySelector(".faq-answer");
          if (ans) ans.style.maxHeight = null;
        }
      });

      // Alterna o estado do item clicado
      faqItem.classList.toggle("open");
      const answer = faqItem.querySelector(".faq-answer");

      if (faqItem.classList.contains("open")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

  // ANIMAÇÃO SCROLL REVEAL
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 50) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Executa ao carregar a página
});

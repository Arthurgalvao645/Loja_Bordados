document.addEventListener("DOMContentLoaded", function () {
  // 1. MENU MOBILE
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");
      document.body.classList.toggle("menu-aberto");
    });
  }

  // 2. SCROLL REVEAL (MOVIMENTO DAS IMAGENS E TEXTOS)
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
  revealOnScroll(); // Executa no carregamento inicial

  // 3. MODAL FLUTUANTE DE VÍDEO (2inicio.mp4)
  const openVideoBtn = document.getElementById("openVideoModal");
  const videoModal = document.getElementById("videoModal");
  const closeVideoBtn = document.getElementById("closeVideoModal");
  const closeVideoBackdrop = document.getElementById("closeVideoModalBackdrop");
  const modalPlayer = document.getElementById("modalPlayer");

  function openModal() {
    if (videoModal && modalPlayer) {
      videoModal.classList.add("active");
      modalPlayer.currentTime = 0;
      modalPlayer.play();
    }
  }

  function closeModal() {
    if (videoModal && modalPlayer) {
      videoModal.classList.remove("active");
      modalPlayer.pause();
    }
  }

  if (openVideoBtn) openVideoBtn.addEventListener("click", openModal);
  if (closeVideoBtn) closeVideoBtn.addEventListener("click", closeModal);
  if (closeVideoBackdrop) closeVideoBackdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && videoModal && videoModal.classList.contains("active")) {
      closeModal();
    }
  });

  // 4. DÚVIDAS / FAQ
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((button) => {
    button.addEventListener("click", function () {
      const faqItem = this.closest(".faq-item");

      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("open");
          const ans = item.querySelector(".faq-answer");
          if (ans) ans.style.maxHeight = null;
        }
      });

      faqItem.classList.toggle("open");
      const answer = faqItem.querySelector(".faq-answer");

      if (faqItem.classList.contains("open")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
});

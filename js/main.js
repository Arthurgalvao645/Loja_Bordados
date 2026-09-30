document.addEventListener("DOMContentLoaded", function () {
  // 1. Controle do menu mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  // 2. Animação de aparição ao rolar a página (Scroll Reveal)
  const reveals = document.querySelectorAll(".reveal");

  function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100; // Distância do topo para disparar o efeito

    reveals.forEach((element) => {
      const revealTop = element.getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }
    });
  }

  // Executa na abertura e ao rolar a tela
  window.addEventListener("scroll", checkReveal);
  checkReveal();

  // 3. Integração do Formulário de Contato com o WhatsApp
  const form = document.getElementById("orcamento-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = form.querySelector('[name="nome"]').value.trim();
      const whatsapp = form.querySelector('[name="whatsapp"]').value.trim();
      const tipo = form.querySelector('[name="tipo"]').value;
      const quantidade = form.querySelector('[name="quantidade"]').value.trim();
      const mensagem = form.querySelector('[name="mensagem"]').value.trim();

      const numeroEmpresa = "qr/4AI5QYM6GJARD1";

      const textoMensagem = `Olá!! me chamo ${nome}, tenho interesse em ${quantidade} do(a) ${tipo}.\n\n${mensagem}\n\nEsse é o meu contato ${whatsapp}`;

      const textoCodificado = encodeURIComponent(textoMensagem);
      const urlWhatsapp = `https://wa.me/${numeroEmpresa}?text=${textoCodificado}`;

      window.open(urlWhatsapp, "_blank");
    });
  }
});
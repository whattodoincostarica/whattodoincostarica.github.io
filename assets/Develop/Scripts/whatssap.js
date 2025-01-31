document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.querySelector(".whatsapp-float");
    const backToTopButton = document.querySelector(".back-to-top");

    function adjustWhatsAppPosition() {
      if (getComputedStyle(backToTopButton).display === "none") {
        // Flecha oculta: coloca WhatsApp en la posición de la flecha
        whatsappButton.style.bottom = "30px";
      } else {
        // Flecha visible: coloca WhatsApp más arriba
        whatsappButton.style.bottom = "100px";
      }
    }

    // Verifica el estado al cargar la página y durante el scroll
    window.addEventListener("scroll", adjustWhatsAppPosition);
    adjustWhatsAppPosition(); // Ejecuta inmediatamente al cargar
  });
// Función de inicialización de Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,es' }, 'google_translate_element');
}

// Función para cambiar el idioma y almacenar la selección en localStorage
function changeLanguage() {
    const lang = document.getElementById("language-select").value;
    const frame = document.querySelector('.goog-te-combo');
    if (frame) {
        frame.value = lang;
        frame.dispatchEvent(new Event('change')); // Cambia el idioma en Google Translate
        localStorage.setItem('selectedLanguage', lang); // Guarda el idioma seleccionado
    }
}

// Aplicar el idioma guardado al cargar la página y actualizar el selector automáticamente
window.addEventListener('load', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const languageSelect = document.getElementById("language-select");
    
    // Si hay un idioma guardado, seleccionarlo automáticamente
    if (savedLanguage && languageSelect) {
        languageSelect.value = savedLanguage;

        const frame = document.querySelector('.goog-te-combo');
        if (frame) {
            frame.value = savedLanguage;
            frame.dispatchEvent(new Event('change')); // Aplica el idioma guardado
        }
    }
});

// Agregar el script de Google Translate dinámicamente
const googleTranslateScript = document.createElement("script");
googleTranslateScript.type = "text/javascript";
googleTranslateScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.head.appendChild(googleTranslateScript);

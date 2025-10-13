// =========================
// script.js – versión mejorada
// =========================

// Traducciones en Español e Inglés
const translations = {
    es: {
        logo: "MiPortafolio",
        navInicio: "Inicio",
        navSobreMi: "Sobre Mí",
        navProyectos: "Proyectos",
        navContacto: "Contacto",
        heroTitulo: "Hola, soy <span class='highlight'>Jennifer Yamileth Baires Acosta</span>",
        heroAreas: "<h2>Áreas de interés:</h2> Scrum Master, Desarrollador Web & Diseñador UX/UI",
        heroBtnProyectos: "Ver Mis Proyectos",
        heroBtnCV: "Descargar CV",
        sobreMiTitulo: "Sobre <span>Mí</span>",
        sobreMiTexto1: "Persona optimista, responsable y orientada al progreso, con facilidad para trabajar en equipo, adaptarse a nuevos retos y mantener relaciones interpersonales positivas.",
        sobreMiTexto2: "Mi objetivo es crear experiencias digitales que no solo sean visualmente atractivas, sino también intuitivas y accesibles para todos los usuarios.",
        skillsTitulo: "Habilidades",
        skillsFuertes: "Habilidades Fuertes",
        skillGit: "Conocimientos básicos en Git para control de versiones",
        skillAndroidStudio: "Manejo de Android Studio para crear aplicaciones móviles",
        skillApps: "Desarrollo de apps con interfaces gráficas simples",
        skillEmuladores: "Instalación y prueba de apps en emuladores de Android",
        skillProyectos: "Experiencia en proyectos pequeños para reforzar el aprendizaje",
        skillsBlandas: "Habilidades Blandas",
        softResponsable: "Responsable",
        softComunicacion: "Comunicación asertiva",
        softResolucion: "Resolución de problemas",
        softTrabajoEquipo: "Trabajo en equipo",
        softSociabilidad: "Sociabilidad",
        softAdaptabilidad: "Adaptabilidad",
        lenguajesTitulo: "Lenguajes de Programación",
        sobreMiBtnCV: "Descargar CV",
        proyectosTitulo: "Mis <span>Proyectos</span>",
        proj1Titulo: "Adopta a un amigo",
        proj1Desc: "Plataforma web para un refugio de animales, enfocada en promover la adopción responsable de mascotas.",
        proj1Btn: "Ver en GitHub",
        proj2Titulo: "Software Empresarial Artesanías Conchita",
        proj2Desc: "Prototipo de software empresarial que permite llevar el control completo de facturación e inventario de la empresa.",
        proj2Btn: "Ver en GitHub",
        proj3Titulo: "Sitio Web de Artesanías Conchita",
        proj3Desc: "Sitio Web informativo que muestra los productos de la empresa.",
        proj3Btn: "Ver en GitHub",
        proj4Titulo: "Task Planner",
        proj4Desc: "Aplicación móvil para organizar tareas, con almacenamiento local y filtros para una mejor gestión del tiempo.",
        proj4Btn: "Ver en GitHub",
        contactoTitulo: "Contácta<span>me</span>",
        contactoSubtitulo: "Ponte en contacto",
        contactoTexto: "Si estás interesado en trabajar conmigo, no dudes en contactarme."
    },
    en: {
        logo: "MyPortfolio",
        navInicio: "Home",
        navSobreMi: "About Me",
        navProyectos: "Projects",
        navContacto: "Contact",
        heroTitulo: "Hi, I'm <span class='highlight'>Jennifer Yamileth Baires Acosta</span>",
        heroAreas: "<h2>Areas of interest:</h2> Scrum Master, Web Developer & UX/UI Designer",
        heroBtnProyectos: "View My Projects",
        heroBtnCV: "Download CV",
        sobreMiTitulo: "About <span>Me</span>",
        sobreMiTexto1: "Optimistic, responsible, and progress-oriented person, with ease to work in a team, adapt to new challenges, and maintain positive interpersonal relationships.",
        sobreMiTexto2: "My goal is to create digital experiences that are not only visually appealing but also intuitive and accessible for all users.",
        skillsTitulo: "Skills",
        skillsFuertes: "Hard Skills",
        skillGit: "Basic knowledge in Git for version control",
        skillAndroidStudio: "Using Android Studio to create mobile applications",
        skillApps: "Develop apps with simple graphical interfaces",
        skillEmuladores: "Install and test apps on Android emulators",
        skillProyectos: "Experience in small projects to reinforce learning",
        skillsBlandas: "Soft Skills",
        softResponsable: "Responsible",
        softComunicacion: "Assertive Communication",
        softResolucion: "Problem Solving",
        softTrabajoEquipo: "Teamwork",
        softSociabilidad: "Sociability",
        softAdaptabilidad: "Adaptability",
        lenguajesTitulo: "Programming Languages",
        sobreMiBtnCV: "Download CV",
        proyectosTitulo: "My <span>Projects</span>",
        proj1Titulo: "Adopt a Friend",
        proj1Desc: "Web platform for an animal shelter, focused on promoting responsible pet adoption.",
        proj1Btn: "View on GitHub",
        proj2Titulo: "Artesanías Conchita Business Software",
        proj2Desc: "Prototype business software to fully control company invoicing and inventory.",
        proj2Btn: "View on GitHub",
        proj3Titulo: "Artesanías Conchita Website",
        proj3Desc: "Informative website displaying the company's products.",
        proj3Btn: "View on GitHub",
        proj4Titulo: "Task Planner",
        proj4Desc: "Mobile application to organize tasks, with local storage and filters for better time management.",
        proj4Btn: "View on GitHub",
        contactoTitulo: "Contact <span>Me</span>",
        contactoSubtitulo: "Get in touch",
        contactoTexto: "If you are interested in working with me, feel free to contact me."
    }
};

// ==============================
// Estado actual del idioma
// ==============================
let currentLang = 'es';

// ==============================
// Función de traducción mejorada
// ==============================
function translatePage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[lang][key];

        if (translation) {
    if (["heroTitulo", "heroAreas", "proyectosTitulo", "sobreMiTitulo", "contactoTitulo"].includes(key)) {
        el.innerHTML = translation; // Mantiene HTML en títulos con etiquetas internas
    } else {
        // ✅ Si el elemento está dentro de un botón con ícono, solo cambia el texto
        if (el.tagName === "SPAN" && el.closest(".btn")) {
            el.textContent = translation;
        } else {
            el.textContent = translation;
        }
    }
}
    });
}

// ==============================
// Botón de traducción estilizado
// ==============================
const translateBtn = document.getElementById('translateBtn');

// Estructura del botón (se mantiene igual siempre)
translateBtn.innerHTML = `<i class="fa-solid fa-globe"></i> <span class="lang-text">EN</span>`;

// Referencia al texto del botón
const langTextSpan = translateBtn.querySelector(".lang-text");

// Evento al hacer clic
translateBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    translatePage(currentLang);

    // ✅ Actualiza el texto sin cambiar el estilo ni el icono
    langTextSpan.textContent = currentLang === 'es' ? 'EN' : 'ES';

    // ✅ Mantiene animaciones y clases intactas
    document.body.classList.add("language-change");
    setTimeout(() => document.body.classList.remove("language-change"), 400);
});

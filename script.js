// =========================
// script.js – versión COMPLETA Y CORREGIDA
// =========================

// Traducciones COMPLETAS en Español e Inglés
const translations = {
    es: {
        logo: "MiPortafolio",
        navInicio: "Inicio",
        navSobreMi: "Sobre Mí",
        navProyectos: "Proyectos",
        navContacto: "Contacto",
        navMas: "Más",
        navMarca: "Marca Personal",
        navPremios: "Premios",
        navIntereses: "Intereses",
        navTestimonios: "Testimonios",
        
        searchPlaceholder: "Buscar",
        searchResultsTitle: "Resultados de Búsqueda",
        closeResults: "Cerrar resultados",
        noResultsFound: "No se encontraron resultados",
        noResultsText: "Intenta con otras palabras clave o verifica la ortografía.",
        
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
        
        // MARCA PERSONAL
        marcaPersonalTitulo: "Marca Personal",
        marcaPersonalFrase: "“Una mente curiosa, un corazón empático y un espíritu que nunca deja de evolucionar.”",
        marcaPersonalAutor: "- Jennifer Baires",
        
        // PREMIOS Y RECONOCIMIENTOS (CARRUSEL)
        premiosTitulo: "Premios y Reconocimientos",
        premio1Titulo: "Talleres de Desarrollo y Seguridad – Universidad Gerardo Barrios",
        premio1Desc: "Diploma por completar 64 horas de formación en Casos de Prueba, UX/UI, Desarrollo Web, DevOps y Seguridad, dentro del proyecto académico 'Ciclo de vida de software'.",
        premio2Titulo: "CCNA: Introducción a las Redes – Cisco Networking Academy & Universidad Gerardo Barrios",
        premio2Desc: "Diploma por completar satisfactoriamente el curso CCNA: Introducción a las Redes, enfocado en fundamentos de redes, arquitectura, protocolos, conectividad y principios esenciales de infraestructura Cisco.",
        premio3Titulo: "Curso de Maquetación Web con Dreamweaver – OEF de El Salvador",
        premio3Desc: "Diploma por completar un curso de 48 horas en maquetación de páginas web utilizando Adobe Dreamweaver, enfocado en diseño, estructura y construcción de interfaces web.",
        premio4Titulo: "Diplomado de Inglés",
        premio4Desc: "Diploma por completar satisfactoriamente un curso intensivo de inglés de 48 horas, enfocado en habilidades comunicativas y fundamentos del idioma.",
        premio5Titulo: "Diplomado en Gestión de Riesgo y Cambio Climático – MINED & UNES",
        premio5Desc: "Diploma otorgado por completar el diplomado en Gestión Integral para la Reducción de Riesgo y Cambio Climático en El Salvador, enfocado en prevención, preparación y educación ambiental.",
        verDiplomaCompleto: "Ver Diploma Completo",
        
        // MIS INTERESES (CARRUSEL)
        interesesTitulo: "Mis Intereses",
        interes1Titulo: "Creatividad y Arte",
        interes1Desc: "Me encanta explorar el arte digital mediante herramientas como Canva, Procreate e ibisPaint. Disfruto crear diseños simples, ilustraciones y elementos visuales inspirados en el estilo anime, combinando creatividad y expresión personal.",
        interes2Titulo: "Diseño UX/UI",
        interes2Desc: "Me interesa la investigación de usuarios y la creación de casos de prueba para mejorar la experiencia digital. Busco diseñar interfaces intuitivas, accesibles y centradas en las necesidades reales del usuario.",
        interes3Titulo: "Desarrollo Personal",
        interes3Desc: "Me interesa mejorar mi organización y productividad mediante técnicas de gestión del tiempo. También disfruto aprender constantemente a través de cursos gratuitos que fortalecen mis habilidades personales y profesionales.",
        interes4Titulo: "Mundo Literario / Anime",
        interes4Desc: "Me inspiran los universos de anime y la creación de personajes originales. Me interesa escribir mini-historias, desarrollar habilidades narrativas y diseñar personajes con poderes y personalidades únicas.",
        interes5Titulo: "Optimización de Espacios",
        interes5Desc: "Me gusta diseñar y mejorar mi espacio de estudio, buscando un ambiente funcional, organizado y visualmente agradable que potencie mi concentración, creatividad y desempeño.",
        interes6Titulo: "Creación de Contenido Tecnológico",
        interes6Desc: "Me interesa compartir conocimiento con otros estudiantes mediante plantillas, recursos y materiales educativos que faciliten el aprendizaje y fortalezcan habilidades en programación y tecnología.",
        
        // TESTIMONIOS Y RESEÑAS (CARRUSEL)
        testimoniosTitulo: "Testimonios & Reseñas",
        testimonio1Nombre: "Lic. José Ovidio Ramos",
        testimonio1Cargo: "Vicedecano de la Facultad de Ciencia y Tecnología, Universidad Gerardo Barrios",
        testimonio1Texto: "Jennifer Yamileth Baires Acosta es una estudiante responsable y comprometida, con entusiasmo por aprender, creatividad y capacidad de trabajo en equipo, destacando por su perseverancia y potencial para liderar proyectos.",
        testimonio2Nombre: "Lic. Alexia Marcela Martinez Castro",
        testimonio2Cargo: "Docente de Inglés Básico, Universidad Gerardo Barrios",
        testimonio2Texto: "Jennifer es una estudiante responsable y proactiva, con excelente comprensión del inglés. Destaca por su ética, autonomía y capacidad de trabajar en equipo.",
        testimonio3Nombre: "Ing. Marvin Osmaro Parada Benitez",
        testimonio3Cargo: "Docente de Programación III, Universidad Gerardo Barrios",
        testimonio3Texto: "Jennifer Yamileth Baires Acosta es una estudiante responsable, colaboradora y dedicada, con gran capacidad de trabajo en equipo y disposición para enfrentar retos. Su compromiso y habilidades la hacen apta para integrarse y destacar en cualquier entorno profesional.",
        testimonio4Nombre: "Ing. Herbert René Cordero Henríquez",
        testimonio4Cargo: "Docente de Fundamentos de Programación, Universidad Gerardo Barrios",
        testimonio4Texto: "Es una estudiante responsable, dedicada y respetuosa. Trabaja bien en equipo, muestra gran disposición en las actividades académicas y destaca por su carisma, habilidades sociales y pensamiento estratégico. Tiene una actitud positiva y un fuerte deseo de superación, cualidades que le permitirán sobresalir en lo que se proponga.",
        testimonio5Nombre: "Ing. Timotea Guadalupe Menjivar",
        testimonio5Cargo: "Docente de Sistemas Operativos, Universidad Gerardo Barrios",
        testimonio5Texto: "La estudiante Jennifer Yamileth Baires Acosta (USTR012824) destaca por su responsabilidad, compromiso y calidad en sus trabajos. Es organizada, disciplinada y mantiene una ética académica sólida. Además, muestra una actitud proactiva, siempre buscando aprender, mejorar y aportar soluciones creativas a los retos técnicos de su carrera.",
        
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
        verMas: "Ver más",
        
        // MODAL DE PROYECTOS
        modalLenguajes: "Lenguajes de Programación",
        modalRol: "Mi Rol",
        modalDescripcion: "Descripción",
        modalProblema: "PROBLEMA",
        modalSolucion: "SOLUCIÓN",
        modalResultado: "RESULTADO",
        modalGaleria: "Galería del Proyecto",
        modalVerGitHub: "Ver en GitHub",
        
        contactoTitulo: "Contácta<span>me</span>",
        contactoSubtitulo: "Ponte en contacto",
        contactoTexto: "Si estás interesado en trabajar conmigo, no dudes en contactarme.",
        
        darkModeText: "Modo Oscuro",
        modoClaro: "Modo Claro"
    },
    en: {
        logo: "MyPortfolio",
        navInicio: "Home",
        navSobreMi: "About Me",
        navProyectos: "Projects",
        navContacto: "Contact",
        navMas: "More",
        navMarca: "Personal Brand",
        navPremios: "Awards",
        navIntereses: "Interests",
        navTestimonios: "Testimonials",
        
        searchPlaceholder: "Search",
        searchResultsTitle: "Search Results",
        closeResults: "Close results",
        noResultsFound: "No results found",
        noResultsText: "Try with other keywords or check spelling.",
        
        heroTitulo: "Hello, I'm <span class='highlight'>Jennifer Yamileth Baires Acosta</span>",
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
        
        // PERSONAL BRAND
        marcaPersonalTitulo: "Personal Brand",
        marcaPersonalFrase: "“A curious mind, an empathetic heart, and a spirit that never stops evolving.”",
        marcaPersonalAutor: "- Jennifer Baires",
        
        // AWARDS AND RECOGNITION (CAROUSEL)
        premiosTitulo: "Awards and Recognition",
        premio1Titulo: "Development and Security Workshops – Gerardo Barrios University",
        premio1Desc: "Diploma for completing 64 hours of training in Test Cases, UX/UI, Web Development, DevOps and Security, within the academic project 'Software Life Cycle'.",
        premio2Titulo: "CCNA: Introduction to Networks – Cisco Networking Academy & Gerardo Barrios University",
        premio2Desc: "Diploma for successfully completing the CCNA: Introduction to Networks course, focused on network fundamentals, architecture, protocols, connectivity and essential Cisco infrastructure principles.",
        premio3Titulo: "Web Layout Course with Dreamweaver – OEF of El Salvador",
        premio3Desc: "Diploma for completing a 48-hour course in web page layout using Adobe Dreamweaver, focused on design, structure and construction of web interfaces.",
        premio4Titulo: "English Diploma",
        premio4Desc: "Diploma for successfully completing an intensive 48-hour English course, focused on communication skills and language fundamentals.",
        premio5Titulo: "Diploma in Risk Management and Climate Change – MINED & UNES",
        premio5Desc: "Diploma awarded for completing the diploma in Comprehensive Management for Risk Reduction and Climate Change in El Salvador, focused on prevention, preparation and environmental education.",
        verDiplomaCompleto: "View Full Diploma",
        
        // MY INTERESTS (CAROUSEL)
        interesesTitulo: "My Interests",
        interes1Titulo: "Creativity and Art",
        interes1Desc: "I love exploring digital art through tools like Canva, Procreate and ibisPaint. I enjoy creating simple designs, illustrations and visual elements inspired by anime style, combining creativity and personal expression.",
        interes2Titulo: "UX/UI Design",
        interes2Desc: "I am interested in user research and the creation of test cases to improve the digital experience. I seek to design intuitive, accessible interfaces focused on the real needs of the user.",
        interes3Titulo: "Personal Development",
        interes3Desc: "I am interested in improving my organization and productivity through time management techniques. I also enjoy constantly learning through free courses that strengthen my personal and professional skills.",
        interes4Titulo: "Literary World / Anime",
        interes4Desc: "I am inspired by anime universes and the creation of original characters. I am interested in writing mini-stories, developing narrative skills and designing characters with unique powers and personalities.",
        interes5Titulo: "Space Optimization",
        interes5Desc: "I like to design and improve my study space, looking for a functional, organized and visually pleasing environment that enhances my concentration, creativity and performance.",
        interes6Titulo: "Technological Content Creation",
        interes6Desc: "I am interested in sharing knowledge with other students through templates, resources and educational materials that facilitate learning and strengthen programming and technology skills.",
        
        // TESTIMONIALS & REVIEWS (CAROUSEL)
        testimoniosTitulo: "Testimonials & Reviews",
        testimonio1Nombre: "Lic. José Ovidio Ramos",
        testimonio1Cargo: "Vice Dean of the Faculty of Science and Technology, Gerardo Barrios University",
        testimonio1Texto: "Jennifer Yamileth Baires Acosta is a responsible and committed student, with enthusiasm for learning, creativity and teamwork skills, standing out for her perseverance and potential to lead projects.",
        testimonio2Nombre: "Lic. Alexia Marcela Martinez Castro",
        testimonio2Cargo: "Basic English Teacher, Gerardo Barrios University",
        testimonio2Texto: "Jennifer is a responsible and proactive student, with excellent understanding of English. She stands out for her ethics, autonomy and ability to work in a team.",
        testimonio3Nombre: "Ing. Marvin Osmaro Parada Benitez",
        testimonio3Cargo: "Programming III Teacher, Gerardo Barrios University",
        testimonio3Texto: "Jennifer Yamileth Baires Acosta is a responsible, collaborative and dedicated student, with great teamwork skills and willingness to face challenges. Her commitment and skills make her suitable to integrate and stand out in any professional environment.",
        testimonio4Nombre: "Ing. Herbert René Cordero Henríquez",
        testimonio4Cargo: "Programming Fundamentals Teacher, Gerardo Barrios University",
        testimonio4Texto: "She is a responsible, dedicated and respectful student. She works well in a team, shows great willingness in academic activities and stands out for her charisma, social skills and strategic thinking. She has a positive attitude and a strong desire for improvement, qualities that will allow her to excel in whatever she sets out to do.",
        testimonio5Nombre: "Ing. Timotea Guadalupe Menjivar",
        testimonio5Cargo: "Operating Systems Teacher, Gerardo Barrios University",
        testimonio5Texto: "The student Jennifer Yamileth Baires Acosta (USTR012824) stands out for her responsibility, commitment and quality in her work. She is organized, disciplined and maintains a solid academic ethic. In addition, she shows a proactive attitude, always seeking to learn, improve and contribute creative solutions to the technical challenges of her career.",
        
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
        verMas: "View more",
        
        // PROJECT MODAL
        modalLenguajes: "Programming Languages",
        modalRol: "My Role",
        modalDescripcion: "Description",
        modalProblema: "PROBLEM",
        modalSolucion: "SOLUTION",
        modalResultado: "RESULT",
        modalGaleria: "Project Gallery",
        modalVerGitHub: "View on GitHub",
        
        contactoTitulo: "Contact <span>Me</span>",
        contactoSubtitulo: "Get in touch",
        contactoTexto: "If you are interested in working with me, feel free to contact me.",
        
        darkModeText: "Dark Mode",
        modoClaro: "Light Mode"
    }
};

// Idioma inicial
let currentLang = 'es';

// ==============================
// Función de traducción CORREGIDA
// ==============================
function translatePage(lang) {
    currentLang = lang;
    
    console.log(`🌍 Traduciendo a: ${lang}`);
    
    // 1. Traducir elementos con data-i18n (EXCLUYENDO los del carrusel de premios que se manejan manualmente)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        // Excluir elementos dentro del carrusel de premios (los manejamos manualmente)
        const isInPremiosCarousel = el.closest('.premio-card') || el.closest('.carrusel-track');
        
        if (!isInPremiosCarousel) {
            const key = el.getAttribute('data-i18n');
            const translation = translations[lang][key];

            if (translation) {
                if (["heroTitulo", "heroAreas", "proyectosTitulo", "sobreMiTitulo", "contactoTitulo"].includes(key)) {
                    el.innerHTML = translation;
                } else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    el.placeholder = translation;
                } else if (el.tagName === "SPAN" && el.closest(".btn")) {
                    el.textContent = translation;
                } else {
                    el.textContent = translation;
                }
            }
        }
    });
    
    // 2. Traducir títulos de sección que no tienen data-i18n
    const sectionTitles = {
        '#marca-personal .section-title': translations[lang]["marcaPersonalTitulo"],
        '#premios .section-title': translations[lang]["premiosTitulo"],
        '#intereses .section-title': translations[lang]["interesesTitulo"],
        '#testimonios .section-title': translations[lang]["testimoniosTitulo"]
    };
    
    Object.entries(sectionTitles).forEach(([selector, translation]) => {
        const element = document.querySelector(selector);
        if (element && translation) {
            element.textContent = translation;
        }
    });
    
    // 3. Traducir MARCA PERSONAL (manualmente)
    const marcaFrase = document.querySelector('.marca-texto .frase');
    const marcaAutor = document.querySelector('.marca-texto .autor');
    
    if (marcaFrase && translations[lang]["marcaPersonalFrase"]) {
        marcaFrase.textContent = translations[lang]["marcaPersonalFrase"];
    }
    if (marcaAutor && translations[lang]["marcaPersonalAutor"]) {
        marcaAutor.textContent = translations[lang]["marcaPersonalAutor"];
    }
    
    // 4. Traducir CARRUSEL DE PREMIOS MANUALMENTE (para evitar conflictos)
    const premioCards = document.querySelectorAll('.premio-card');
    premioCards.forEach((card, index) => {
        // Solo actualizar el texto, NO la estructura
        const titleElement = card.querySelector('[data-i18n]');
        const descElement = card.querySelector('.premio-desc');
        
        if (titleElement && translations[lang][`premio${index+1}Titulo`]) {
            titleElement.textContent = translations[lang][`premio${index+1}Titulo`];
        }
        
        if (descElement && translations[lang][`premio${index+1}Desc`]) {
            descElement.textContent = translations[lang][`premio${index+1}Desc`];
        }
        
        // Traducir botón "Ver Diploma Completo" sin perder el ícono
        const btn = card.querySelector('.ver-diploma-btn');
        if (btn && translations[lang]["verDiplomaCompleto"]) {
            // Preservar el icono
            const icon = btn.querySelector('i');
            if (icon) {
                btn.innerHTML = icon.outerHTML + ' ' + translations[lang]["verDiplomaCompleto"];
            } else {
                btn.innerHTML = '<i class="fas fa-image"></i> ' + translations[lang]["verDiplomaCompleto"];
            }
        }
    });
    
    // 5. Traducir CARRUSEL DE INTERESES
    const interesCards = document.querySelectorAll('.interes-card');
    interesCards.forEach((card, index) => {
        const titleElement = card.querySelector('h3');
        const descElement = card.querySelector('.interes-desc');
        
        if (titleElement && translations[lang][`interes${index+1}Titulo`]) {
            titleElement.textContent = translations[lang][`interes${index+1}Titulo`];
        }
        
        if (descElement && translations[lang][`interes${index+1}Desc`]) {
            descElement.textContent = translations[lang][`interes${index+1}Desc`];
        }
    });
    
    // 6. Traducir CARRUSEL DE TESTIMONIOS
    const testimonioCards = document.querySelectorAll('.testimonio-card');
    testimonioCards.forEach((card, index) => {
        const nameElement = card.querySelector('[data-i18n]');
        const cargoElement = card.querySelector('.testimonio-cargo');
        const textoElement = card.querySelector('.testimonio-texto');
        
        if (nameElement && translations[lang][`testimonio${index+1}Nombre`]) {
            nameElement.textContent = translations[lang][`testimonio${index+1}Nombre`];
        }
        
        if (cargoElement && translations[lang][`testimonio${index+1}Cargo`]) {
            cargoElement.innerHTML = translations[lang][`testimonio${index+1}Cargo`];
        }
        
        if (textoElement && translations[lang][`testimonio${index+1}Texto`]) {
            textoElement.textContent = translations[lang][`testimonio${index+1}Texto`];
        }
    });
    
    // 7. Botones "Ver más"
    const verMasBtns = document.querySelectorAll('.btn-details');
    verMasBtns.forEach(btn => {
        if (translations[lang]["verMas"]) {
            btn.textContent = translations[lang]["verMas"];
        }
    });
    
    // 8. Modal de proyectos (textos fijos)
    const modalTexts = {
        '#modalLenguajes span': translations[lang]["modalLenguajes"],
        '#modalRol span': translations[lang]["modalRol"],
        '#modalDescripcion span': translations[lang]["modalDescripcion"],
        '#modalProblema span': translations[lang]["modalProblema"],
        '#modalSolucion span': translations[lang]["modalSolucion"],
        '#modalResultado span': translations[lang]["modalResultado"],
        '#modalGaleria span': translations[lang]["modalGaleria"]
    };
    
    Object.entries(modalTexts).forEach(([selector, translation]) => {
        const element = document.querySelector(selector);
        if (element && translation) {
            element.textContent = translation;
        }
    });
    
    // 9. Botón "Ver en GitHub" en el modal
    const modalGitHubBtn = document.querySelector('#modalGitHubLink span');
    if (modalGitHubBtn && translations[lang]["modalVerGitHub"]) {
        modalGitHubBtn.textContent = translations[lang]["modalVerGitHub"];
    }
    
    // 10. Actualizar botón de idioma
    const langTextSpan = document.querySelector('.lang-text');
    if (langTextSpan) {
        langTextSpan.textContent = lang === 'es' ? 'EN' : 'ES';
    }
    
    // 11. Actualizar modo oscuro
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        const textSpan = darkModeToggle.querySelector('.dark-mode-text');
        
        if (textSpan) {
            if (lang === 'en') {
                textSpan.textContent = icon.classList.contains('fa-moon') ? 'Dark Mode' : 'Light Mode';
            } else {
                textSpan.textContent = icon.classList.contains('fa-moon') ? 'Modo Oscuro' : 'Modo Claro';
            }
        }
    }
    
    // 12. Footer
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = lang === 'en' 
            ? "© 2025 Jennifer Baires. All rights reserved." 
            : "© 2025 Jennifer Baires. Todos los derechos reservados.";
    }
    
    // 13. Búsqueda
    const searchTitle = document.getElementById('searchResultsTitle');
    if (searchTitle && translations[lang]["searchResultsTitle"]) {
        searchTitle.textContent = translations[lang]["searchResultsTitle"];
    }
    
    const closeResultsBtn = document.getElementById('closeSearchResults');
    if (closeResultsBtn && translations[lang]["closeResults"]) {
        closeResultsBtn.innerHTML = '<i class="fas fa-times"></i> ' + translations[lang]["closeResults"];
    }
    
    // IMPORTANTE: Forzar redibujado del carrusel de premios después de traducir
    setTimeout(() => {
        restoreCarouselPosition();
    }, 50);
    
    console.log(`✅ Traducción completada para ${lang}`);
}

// ==============================
// Función para restaurar posición del carrusel
// ==============================
function restoreCarouselPosition() {
    const carruselTrack = document.querySelector('.carrusel-track');
    if (!carruselTrack) return;
    
    // Obtener el índice actual del carrusel
    const activeIndicator = document.querySelector('.indicador.active');
    if (!activeIndicator) return;
    
    const currentIndex = parseInt(activeIndicator.getAttribute('data-index')) || 0;
    
    // Restaurar posición
    const translateX = -(currentIndex * 100);
    carruselTrack.style.transform = `translateX(${translateX}%)`;
    
    console.log(`🔄 Carrusel restaurado a posición: ${currentIndex}`);
}

// ===== FUNCIONES DEL MODAL - VERSIÓN COMPLETA =====
function openProjectModal(projectCard) {
    console.log("🎯 Abriendo modal para:", projectCard);
    console.log("🔊 Idioma actual:", currentLang);
    
    try {
        // Obtener el ID del proyecto
        const projectId = projectCard.getAttribute('data-project-id');
        
        // Obtener datos base en español
        const titleEs = projectCard.getAttribute('data-title');
        const roleEs = projectCard.getAttribute('data-role');
        const descriptionEs = projectCard.getAttribute('data-description');
        const problemEs = projectCard.getAttribute('data-problem');
        const solutionEs = JSON.parse(projectCard.getAttribute('data-solution'));
        const resultEs = projectCard.getAttribute('data-result');

        // Usar traducciones si está en inglés
        const title = currentLang === 'en' ? 
            (translations.en[`proj1Title`] || titleEs) : titleEs;
            
        const role = currentLang === 'en' ? 
            (translations.en[`proj1Role`] || roleEs) : roleEs;
            
        const description = currentLang === 'en' ? 
            (translations.en[`proj1Description`] || descriptionEs) : descriptionEs;
            
        const problem = currentLang === 'en' ? 
            (translations.en[`proj1Problem`] || problemEs) : problemEs;
            
        let solution = solutionEs;
        if (currentLang === 'en' && translations.en[`proj1Solution`]) {
            solution = translations.en[`proj1Solution`].split('|');
        }
            
        const result = currentLang === 'en' ? 
            (translations.en[`proj1Result`] || resultEs) : resultEs;

        const languages = JSON.parse(projectCard.getAttribute('data-languages'));
        const images = JSON.parse(projectCard.getAttribute('data-images'));
        const githubLink = projectCard.getAttribute('data-github');

        // Obtener elementos del DOM
        const modal = document.getElementById('projectModal');
        const modalTitle = document.getElementById('modalProjectTitle');
        const modalLanguages = document.getElementById('modalLanguages');
        const modalRole = document.getElementById('modalRole');
        const modalDescription = document.getElementById('modalDescription');
        const modalGallery = document.getElementById('modalGallery');
        const modalGitHubLink = document.getElementById('modalGitHubLink');
        const modalProblem = document.getElementById('modalProblem');
        const modalSolution = document.getElementById('modalSolution');
        const modalResult = document.getElementById('modalResult');

        if (!modal) {
            console.error("❌ Modal no encontrado en el DOM");
            return;
        }

        // Llenar datos básicos
        modalTitle.textContent = title;
        modalRole.textContent = role;
        modalDescription.textContent = description;
        modalGitHubLink.href = githubLink;
        
        // Llenar nuevas secciones
        modalProblem.textContent = problem;
        modalResult.textContent = result;
        
        // Llenar lista de soluciones
        modalSolution.innerHTML = '';
        if (solution && Array.isArray(solution)) {
            solution.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                modalSolution.appendChild(li);
            });
        }

        // Llenar lenguajes
        modalLanguages.innerHTML = '';
        languages.forEach(lang => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag';
            tag.textContent = lang;
            modalLanguages.appendChild(tag);
        });

        // Llenar galería
        modalGallery.innerHTML = '';
        images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `${title} - Imagen ${index + 1}`;
            img.className = 'gallery-image';
            img.onclick = () => openImageModal(image);
            modalGallery.appendChild(img);
        });

        // Mostrar modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log("✅ Modal abierto exitosamente con TRADUCCIONES");
        
    } catch (error) {
        console.error("❌ Error al abrir modal:", error);
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function openImageModal(imageSrc) {
    const imageModal = document.createElement('div');
    imageModal.style.cssText = `
        position: fixed;
        z-index: 2000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `;
    
    const image = document.createElement('img');
    image.src = imageSrc;
    image.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
    `;
    
    imageModal.appendChild(image);
    imageModal.onclick = () => document.body.removeChild(imageModal);
    
    document.body.appendChild(imageModal);
}

// ===== MODO OSCURO =====
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = darkModeToggle.querySelector('i');
    const darkModeText = darkModeToggle.querySelector('.dark-mode-text');
    
    // Verificar preferencia guardada o del sistema
    function initDarkMode() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }
    
    function enableDarkMode() {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeIcon.className = 'fas fa-sun';
        darkModeText.textContent = 'Modo Claro';
    }
    
    function disableDarkMode() {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        darkModeIcon.className = 'fas fa-moon';
        darkModeText.textContent = 'Modo Oscuro';
    }
    
    // Event listener
    darkModeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    // Inicializar
    initDarkMode();
});

// ===== INICIALIZACIÓN CORREGIDA =====
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 DOM cargado - Inicializando modal");
    
    // Cerrar modal con la X
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
        console.log("✅ Botón cerrar configurado");
    } else {
        console.log("❌ Botón cerrar NO encontrado");
    }

    // Cerrar al hacer click fuera del modal
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('projectModal');
        if (event.target === modal) {
            closeProjectModal();
        }
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeProjectModal();
        }
    });

    // Hacer las tarjetas de proyectos clickeables
    const projectCards = document.querySelectorAll('.project-card');
    console.log("🃏 Tarjetas de proyecto encontradas:", projectCards.length);
    
    projectCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        
        // Prevenir que el click en el botón de GitHub abra el modal
        const githubBtn = card.querySelector('.btn');
        if (githubBtn) {
            githubBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log("🔗 Click en botón GitHub - modal evitado");
            });
        }
        
        card.addEventListener('click', function(e) {
            console.log("🖱️ Click en tarjeta:", index + 1);
            // Solo abrir modal si no se hizo click en el botón
            if (!e.target.closest('.btn')) {
                openProjectModal(card);
            }
        });
    });
    
    console.log("✅ Modal completamente inicializado");
});

document.addEventListener('DOMContentLoaded', function() {
  console.log("✅ Script cargado y funcionando...");

  const botones = document.querySelectorAll('.btn-details');
  console.log("🔎 Botones encontrados:", botones.length);

  botones.forEach(boton => {
    boton.addEventListener('click', function(e) {
      e.stopPropagation(); // evita conflicto con el click de la tarjeta
      console.log("🖱️ Click en botón Ver más");

      const card = boton.closest('.project-card');
      if (!card) {
        console.warn("⚠️ No se encontró la tarjeta asociada");
        return;
      }

      // Verificamos si la función del modal existe
      if (typeof openProjectModal === "function") {
        console.log("✅ Llamando a openProjectModal()");
        openProjectModal(card);
      } else {
        console.error("❌ La función openProjectModal no existe. Asegúrate de definirla y exportarla:");
        console.log("👉 Agrega esto al final del archivo donde está definida:");
        console.log("window.openProjectModal = openProjectModal;");
      }
    });
  });
});

// ===== CARRUSEL DE PREMIOS (DESPLAZAMIENTO HORIZONTAL) =====
document.addEventListener('DOMContentLoaded', function () {

    const carruselTrack = document.querySelector('.carrusel-track');
    const premioCards = document.querySelectorAll('.premio-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicadores = document.querySelectorAll('.indicador');
    const verDiplomaBtns = document.querySelectorAll('.ver-diploma-btn');

    const diplomaModal = document.getElementById('diplomaModal');
    const closeModalBtn = document.querySelector('.close-diploma-modal');
    const diplomaModalImage = document.getElementById('diplomaModalImage');
    const diplomaModalTitle = document.getElementById('diplomaModalTitle');
    const diplomaModalDate = document.getElementById('diplomaModalDate');
    const diplomaModalDesc = document.getElementById('diplomaModalDesc');

    let currentIndex = 0;
    const cardCount = premioCards.length;

    // ===== CARRUSEL =====
    function updateCarrusel() {
        if (!carruselTrack) return;
        const translateX = -(currentIndex * 100);
        carruselTrack.style.transform = `translateX(${translateX}%)`;

        updateIndicadores();
        updateButtons();
    }

    function updateIndicadores() {
        indicadores.forEach((indicador, index) => {
            indicador.classList.toggle('active', index === currentIndex);
        });
    }

    function updateButtons() {
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex === cardCount - 1;
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarrusel();
    }

    function nextSlide() {
        if (currentIndex < cardCount - 1) {
            currentIndex++;
            updateCarrusel();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarrusel();
        }
    }

    // ===== MODAL DE DIPLOMAS =====
    function showDiploma(index) {
        const card = premioCards[index];
        if (!card) return;

        const imgSrc = card.querySelector('.premio-imagen img')?.src;
        const desc = card.querySelector('.premio-desc')?.textContent || '';

        const titles = [
            'Talleres de Desarrollo y Seguridad – Universidad Gerardo Barrios',
            'CCNA: Introducción a las Redes – Cisco Networking Academy & Universidad Gerardo Barrios',
            'Curso de Maquetación Web con Dreamweaver – OEF de El Salvador',
            'Diplomado de Inglés – Academia Internacional Idiomas 4U',
            'Diplomado en Gestión de Riesgo y Cambio Climático – MINED & UNES'
        ];

        const dates = [
            'Diciembre 2025',
            'Junio 2025',
            'Febrero 2021',
            'Diciembre 2016',
            'Noviembre 2012'
        ];

        diplomaModalImage.src = imgSrc;
        diplomaModalImage.alt = `Diploma completo: ${titles[index]}`;
        diplomaModalTitle.textContent = titles[index];
        diplomaModalDate.textContent = dates[index];
        diplomaModalDesc.textContent = desc;

        diplomaModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // ===== EVENTOS =====

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    indicadores.forEach(indicador => {
        indicador.addEventListener('click', () => {
            goToSlide(parseInt(indicador.dataset.index));
        });
    });

    verDiplomaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            showDiploma(parseInt(btn.dataset.index));
        });
    });

    // Overlay para ampliar diploma
    premioCards.forEach(card => {
        const overlay = card.querySelector('.premio-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => {
                showDiploma(parseInt(card.dataset.index));
            });
        }
    });

    // Cerrar modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            diplomaModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    diplomaModal.addEventListener('click', (e) => {
        if (e.target === diplomaModal) {
            diplomaModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && diplomaModal.style.display === 'flex') {
            diplomaModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // ===== Swipe para móviles =====
    let startX = 0;
    let endX = 0;
    const carruselContainer = document.querySelector('.carrusel-container');

    if (carruselContainer) {
        carruselContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        carruselContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
    }

    function handleSwipe() {
        const diff = startX - endX;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            diff > 0 ? nextSlide() : prevSlide();
        }
    }

    // Inicializar carrusel
    updateCarrusel();
});

// ===== CARRUSEL DE INTERESES (2 TARJETAS POR VISTA) =====
document.addEventListener('DOMContentLoaded', function() {
    const interesesTrack = document.querySelector('.intereses-track');
    const interesCards = document.querySelectorAll('.interes-card');
    const prevInteresBtn = document.querySelector('.prev-intereses-btn');
    const nextInteresBtn = document.querySelector('.next-intereses-btn');
    const interesIndicadores = document.querySelectorAll('.interes-indicador');

    if (!interesesTrack) return;

    let currentInteresIndex = 0;
    const cardsPerView = 2;
    const totalCards = interesCards.length;
    const totalSlides = Math.ceil(totalCards / cardsPerView);

    // Calcular el ancho de cada grupo de tarjetas
    function getCardWidth() {
        return interesCards[0].offsetWidth + 30; // Ancho + gap
    }

    // Actualizar posición del carrusel
    function updateInteresesCarrusel() {
        const cardWidth = getCardWidth();
        const translateX = -(currentInteresIndex * (cardWidth * cardsPerView));
        interesesTrack.style.transform = `translateX(${translateX}px)`;

        updateInteresIndicadores();
        updateInteresButtons();
    }

    // Actualizar indicadores
    function updateInteresIndicadores() {
        interesIndicadores.forEach((indicador, index) => {
            if (index === currentInteresIndex) {
                indicador.classList.add('active');
            } else {
                indicador.classList.remove('active');
            }
        });
    }

    // Actualizar estado de botones
    function updateInteresButtons() {
        prevInteresBtn.disabled = currentInteresIndex === 0;
        nextInteresBtn.disabled = currentInteresIndex === totalSlides - 1;
    }

    // Ir a slide específico
    function goToInteresSlide(index) {
        currentInteresIndex = index;
        updateInteresesCarrusel();
    }

    // Siguiente slide
    function nextInteresSlide() {
        if (currentInteresIndex < totalSlides - 1) {
            currentInteresIndex++;
            updateInteresesCarrusel();
        }
    }

    // Slide anterior
    function prevInteresSlide() {
        if (currentInteresIndex > 0) {
            currentInteresIndex--;
            updateInteresesCarrusel();
        }
    }

    // Event Listeners
    if (prevInteresBtn && nextInteresBtn) {
        prevInteresBtn.addEventListener('click', prevInteresSlide);
        nextInteresBtn.addEventListener('click', nextInteresSlide);
    }

    // Event listeners para indicadores
    interesIndicadores.forEach(indicador => {
        indicador.addEventListener('click', () => {
            const index = parseInt(indicador.getAttribute('data-index'));
            goToInteresSlide(index);
        });
    });

    // Swipe para móviles
    let startX = 0;
    let endX = 0;
    const interesesContainer = document.querySelector('.intereses-container');

    if (interesesContainer) {
        interesesContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        interesesContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleInteresSwipe();
        });
    }

    function handleInteresSwipe() {
        const diff = startX - endX;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe izquierda - siguiente
                nextInteresSlide();
            } else {
                // Swipe derecha - anterior
                prevInteresSlide();
            }
        }
    }

    // Recalcular en resize
    window.addEventListener('resize', () => {
        setTimeout(updateInteresesCarrusel, 100);
    });

    function updateInteresesCarrusel() {
        const cardWidth = getCardWidth();
        const translateX = -(currentInteresIndex * (cardWidth * cardsPerView));
        interesesTrack.style.transform = `translateX(${translateX}px)`;

        updateActiveInteresCards();  // ← Agregado
        updateInteresIndicadores();
        updateInteresButtons();
    }
    
    // =========================================
    // 🔥 MARCAR TARJETAS ACTIVAS
    // =========================================
    function updateActiveInteresCards() {
        // Limpiar clases activas
        interesCards.forEach(card => card.classList.remove('active'));

        // Marcar las tarjetas visibles según el índice y cardsPerView
        const start = currentInteresIndex * cardsPerView;
        const end = start + cardsPerView;

        for (let i = start; i < end && i < interesCards.length; i++) {
            interesCards[i].classList.add('active');
        }
    }

});

// ===== CARRUSEL DE TESTIMONIOS (SIN AUTO-AVANCE) =====
document.addEventListener('DOMContentLoaded', function() {
    const testimoniosTrack = document.querySelector('.testimonios-track');
    const testimonioCards = document.querySelectorAll('.testimonio-card');
    const prevTestimonioBtn = document.querySelector('.prev-testimonio-btn');
    const nextTestimonioBtn = document.querySelector('.next-testimonio-btn');
    const testimonioIndicadores = document.querySelectorAll('.testimonio-indicador');
    
    if (!testimoniosTrack) return;
    
    let currentTestimonioIndex = 0;
    const totalTestimonios = testimonioCards.length;
    
    // Actualizar posición del carrusel
    function updateTestimoniosCarrusel() {
        const translateX = -(currentTestimonioIndex * 100);
        testimoniosTrack.style.transform = `translateX(${translateX}%)`;
        
        updateTestimonioIndicadores();
        updateTestimonioButtons();
    }
    
    // Actualizar indicadores
    function updateTestimonioIndicadores() {
        testimonioIndicadores.forEach((indicador, index) => {
            if (index < totalTestimonios) {
                if (index === currentTestimonioIndex) {
                    indicador.classList.add('active');
                } else {
                    indicador.classList.remove('active');
                }
            }
        });
    }
    
    // Actualizar estado de botones
    function updateTestimonioButtons() {
        prevTestimonioBtn.disabled = currentTestimonioIndex === 0;
        nextTestimonioBtn.disabled = currentTestimonioIndex === totalTestimonios - 1;
    }
    
    // Ir a slide específico
    function goToTestimonioSlide(index) {
        if (index >= 0 && index < totalTestimonios) {
            currentTestimonioIndex = index;
            updateTestimoniosCarrusel();
        }
    }
    
    // Siguiente slide
    function nextTestimonioSlide() {
        if (currentTestimonioIndex < totalTestimonios - 1) {
            currentTestimonioIndex++;
            updateTestimoniosCarrusel();
        }
    }
    
    // Slide anterior
    function prevTestimonioSlide() {
        if (currentTestimonioIndex > 0) {
            currentTestimonioIndex--;
            updateTestimoniosCarrusel();
        }
    }
    
    // Event Listeners
    if (prevTestimonioBtn && nextTestimonioBtn) {
        prevTestimonioBtn.addEventListener('click', prevTestimonioSlide);
        nextTestimonioBtn.addEventListener('click', nextTestimonioSlide);
    }
    
    // Event listeners para indicadores
    testimonioIndicadores.forEach(indicador => {
        indicador.addEventListener('click', () => {
            const index = parseInt(indicador.getAttribute('data-index'));
            goToTestimonioSlide(index);
        });
    });
    
    // Swipe para móviles
    let startX = 0;
    let endX = 0;
    const testimoniosContainer = document.querySelector('.testimonios-container');
    
    if (testimoniosContainer) {
        testimoniosContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        testimoniosContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleTestimonioSwipe();
        });
    }
    
    function handleTestimonioSwipe() {
        const diff = startX - endX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe izquierda - siguiente
                nextTestimonioSlide();
            } else {
                // Swipe derecha - anterior
                prevTestimonioSlide();
            }
        }
    }
    
    // Inicializar
    updateTestimoniosCarrusel();
});

// ===== FUNCIONALIDAD DE BÚSQUEDA CON RESULTADOS EN PÁGINA =====
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    const searchResults = document.getElementById('searchResults');
    const searchResultsSection = document.getElementById('search-results-section');
    const searchResultsContainer = document.getElementById('searchResultsContainer');
    const noSearchResults = document.getElementById('noSearchResults');
    const searchResultsTitle = document.getElementById('searchResultsTitle');
    const closeSearchResults = document.getElementById('closeSearchResults');
    
    let searchTimeout;
    let allContent = [];
    let currentQuery = '';
    
    // ===== OCULTAR PERMANENTEMENTE EL BOTÓN DE LIMPIAR =====
    if (clearSearchBtn) {
        clearSearchBtn.style.display = 'none';
        clearSearchBtn.style.visibility = 'hidden';
        clearSearchBtn.disabled = true;
    }
    
    // Inicializar contenido buscable (COMPLETO)
    function initializeSearchContent() {
        allContent = [];
        
        // ===== 1. SECCIÓN INICIO =====
        const heroTitle = document.querySelector('.hero-content h1');
        const heroSubtitle = document.querySelector('.hero-areas h2');
        const heroDescription = document.querySelector('.hero-areas');
        
        if (heroTitle) {
            allContent.push({
                id: 'inicio',
                title: 'Inicio - Título',
                content: heroTitle.textContent,
                icon: 'fas fa-home',
                category: 'Inicio',
                section: 'inicio',
                sectionName: 'Inicio',
                element: heroTitle // Guardar referencia al elemento real
            });
        }
        
        if (heroSubtitle) {
            allContent.push({
                id: 'inicio-subtitulo',
                title: 'Inicio - Subtítulo',
                content: heroSubtitle.textContent,
                icon: 'fas fa-star',
                category: 'Inicio',
                section: 'inicio',
                sectionName: 'Inicio',
                element: heroSubtitle
            });
        }
        
        if (heroDescription) {
            const areasText = heroDescription.textContent.replace('Áreas de interés:', '').trim();
            allContent.push({
                id: 'areas-interes',
                title: 'Áreas de Interés',
                content: areasText,
                icon: 'fas fa-bullseye',
                category: 'Inicio',
                section: 'inicio',
                sectionName: 'Inicio',
                element: heroDescription
            });
        }
        
        // ===== 2. SECCIÓN SOBRE MÍ =====
        const aboutTitle = document.querySelector('#sobre-mi .section-title');
        const aboutTexts = document.querySelectorAll('.about-text p');
        
        if (aboutTitle) {
            allContent.push({
                id: 'sobre-mi-titulo',
                title: 'Sobre Mí - Título',
                content: aboutTitle.textContent,
                icon: 'fas fa-user',
                category: 'Sobre Mí',
                section: 'sobre-mi',
                sectionName: 'Sobre Mí',
                element: aboutTitle
            });
        }
        
        aboutTexts.forEach((text, index) => {
            if (text.textContent.trim() && !text.querySelector('a')) {
                allContent.push({
                    id: `sobre-mi-texto-${index}`,
                    title: 'Sobre Mí - Descripción',
                    content: text.textContent,
                    icon: 'fas fa-file-alt',
                    category: 'Sobre Mí',
                    section: 'sobre-mi',
                    sectionName: 'Sobre Mí',
                    element: text
                });
            }
        });
        
        // ===== 3. HABILIDADES =====
        const skillsTitle = document.querySelector('.skills h3');
        const skillsLists = document.querySelectorAll('.skills ul');
        
        if (skillsTitle) {
            allContent.push({
                id: 'habilidades-titulo',
                title: skillsTitle.textContent,
                content: skillsTitle.textContent,
                icon: 'fas fa-code',
                category: 'Habilidades',
                section: 'sobre-mi',
                sectionName: 'Sobre Mí',
                element: skillsTitle
            });
        }
        
        skillsLists.forEach((list, listIndex) => {
            const items = list.querySelectorAll('li');
            items.forEach((item, itemIndex) => {
                allContent.push({
                    id: `habilidad-${listIndex}-${itemIndex}`,
                    title: listIndex === 0 ? 'Habilidad Fuerte' : 'Habilidad Blanda',
                    content: item.textContent,
                    icon: listIndex === 0 ? 'fas fa-check-circle' : 'fas fa-users',
                    category: 'Habilidades',
                    section: 'sobre-mi',
                    sectionName: 'Sobre Mí',
                    element: item
                });
            });
        });
        
        // ===== 4. LENGUAJES DE PROGRAMACIÓN =====
        const languagesTitle = document.querySelector('.habilidad-titulo');
        const languageCards = document.querySelectorAll('.skill-card h3');
        
        if (languagesTitle) {
            allContent.push({
                id: 'lenguajes-titulo',
                title: languagesTitle.textContent,
                content: languagesTitle.textContent,
                icon: 'fas fa-laptop-code',
                category: 'Tecnologías',
                section: 'sobre-mi',
                sectionName: 'Sobre Mí',
                element: languagesTitle
            });
        }
        
        languageCards.forEach((lang, index) => {
            allContent.push({
                id: `lenguaje-${index}`,
                title: 'Lenguaje de Programación',
                content: lang.textContent,
                icon: 'fas fa-code',
                category: 'Tecnologías',
                section: 'sobre-mi',
                sectionName: 'Sobre Mí',
                element: lang
            });
        });
        
        // ===== 5. MARCA PERSONAL =====
        const marcaTitle = document.querySelector('#marca-personal .section-title');
        const marcaFrase = document.querySelector('.marca-texto .frase');
        const marcaAutor = document.querySelector('.marca-texto .autor');
        
        if (marcaTitle) {
            allContent.push({
                id: 'marca-titulo',
                title: 'Marca Personal - Título',
                content: marcaTitle.textContent,
                icon: 'fas fa-certificate',
                category: 'Marca Personal',
                section: 'marca-personal',
                sectionName: 'Marca Personal',
                element: marcaTitle
            });
        }
        
        if (marcaFrase) {
            allContent.push({
                id: 'marca-frase',
                title: 'Frase Personal',
                content: marcaFrase.textContent,
                icon: 'fas fa-quote-left',
                category: 'Marca Personal',
                section: 'marca-personal',
                sectionName: 'Marca Personal',
                element: marcaFrase
            });
        }
        
        if (marcaAutor) {
            allContent.push({
                id: 'marca-autor',
                title: 'Autor de la Frase',
                content: marcaAutor.textContent,
                icon: 'fas fa-user-tag',
                category: 'Marca Personal',
                section: 'marca-personal',
                sectionName: 'Marca Personal',
                element: marcaAutor
            });
        }
        
        // ===== 6. PREMIOS Y RECONOCIMIENTOS =====
        const premiosTitle = document.querySelector('#premios .section-title');
        const premioCards = document.querySelectorAll('.premio-card');
        
        if (premiosTitle) {
            allContent.push({
                id: 'premios-titulo',
                title: 'Premios y Reconocimientos - Título',
                content: premiosTitle.textContent,
                icon: 'fas fa-trophy',
                category: 'Premios',
                section: 'premios',
                sectionName: 'Premios y Reconocimientos',
                element: premiosTitle
            });
        }
        
        premioCards.forEach((premio, index) => {
            const desc = premio.querySelector('.premio-desc');
            if (desc) {
                allContent.push({
                    id: `premio-${index}`,
                    title: 'Premio/Reconocimiento',
                    content: desc.textContent,
                    icon: 'fas fa-award',
                    category: 'Premios',
                    section: 'premios',
                    sectionName: 'Premios y Reconocimientos',
                    diplomaIndex: index,
                    element: premio // Guardar referencia a la tarjeta completa
                });
            }
        });
        
        // ===== 7. MIS INTERESES =====
        const interesesTitle = document.querySelector('#intereses .section-title');
        const interesCards = document.querySelectorAll('.interes-card');
        
        if (interesesTitle) {
            allContent.push({
                id: 'intereses-titulo',
                title: 'Mis Intereses - Título',
                content: interesesTitle.textContent,
                icon: 'fas fa-heart',
                category: 'Intereses',
                section: 'intereses',
                sectionName: 'Mis Intereses',
                element: interesesTitle
            });
        }
        
        interesCards.forEach((interes, index) => {
            const title = interes.querySelector('h3');
            const desc = interes.querySelector('.interes-desc');
            
            if (title && desc) {
                allContent.push({
                    id: `interes-${index}`,
                    title: title.textContent,
                    content: desc.textContent,
                    icon: 'fas fa-star',
                    category: 'Intereses',
                    section: 'intereses',
                    sectionName: 'Mis Intereses',
                    interesIndex: index,
                    element: interes // Guardar referencia a la tarjeta completa
                });
            }
        });
        
        // ===== 8. TESTIMONIOS Y RESEÑAS =====
        const testimoniosTitle = document.querySelector('#testimonios .section-title');
        const testimonioCards = document.querySelectorAll('.testimonio-card');
        
        if (testimoniosTitle) {
            allContent.push({
                id: 'testimonios-titulo',
                title: 'Testimonios y Reseñas - Título',
                content: testimoniosTitle.textContent,
                icon: 'fas fa-quote-left',
                category: 'Testimonios',
                section: 'testimonios',
                sectionName: 'Testimonios y Reseñas',
                element: testimoniosTitle
            });
        }
        
        testimonioCards.forEach((testimonio, index) => {
            const name = testimonio.querySelector('h3');
            const cargo = testimonio.querySelector('.testimonio-cargo');
            const texto = testimonio.querySelector('.testimonio-texto');
            
            if (name && texto) {
                allContent.push({
                    id: `testimonio-${index}`,
                    title: name.textContent + (cargo ? ` - ${cargo.textContent}` : ''),
                    content: texto.textContent,
                    icon: 'fas fa-comment',
                    category: 'Testimonios',
                    section: 'testimonios',
                    sectionName: 'Testimonios y Reseñas',
                    testimonioIndex: index,
                    element: testimonio // Guardar referencia a la tarjeta completa
                });
            }
        });
        
        // ===== 9. PROYECTOS =====
        const proyectosTitle = document.querySelector('#proyectos .section-title');
        const projectCards = document.querySelectorAll('.project-card');
        
        if (proyectosTitle) {
            allContent.push({
                id: 'proyectos-titulo',
                title: 'Mis Proyectos - Título',
                content: proyectosTitle.textContent,
                icon: 'fas fa-project-diagram',
                category: 'Proyectos',
                section: 'proyectos',
                sectionName: 'Proyectos',
                element: proyectosTitle
            });
        }
        
        projectCards.forEach((project, index) => {
            const title = project.querySelector('h3');
            const desc = project.querySelector('p');
            const languages = project.getAttribute('data-languages');
            
            if (title && desc) {
                allContent.push({
                    id: `proyecto-${index}`,
                    title: title.textContent,
                    content: desc.textContent,
                    languages: languages,
                    icon: 'fas fa-code-branch',
                    category: 'Proyectos',
                    section: 'proyectos',
                    sectionName: 'Proyectos',
                    projectId: project.getAttribute('data-project-id'),
                    fullDescription: project.getAttribute('data-description'),
                    problem: project.getAttribute('data-problem'),
                    solution: project.getAttribute('data-solution'),
                    result: project.getAttribute('data-result'),
                    element: project // Guardar referencia a la tarjeta del proyecto
                });
            }
        });
        
        // ===== 10. CONTACTO =====
        const contactoTitle = document.querySelector('#contacto .section-title');
        const contactoInfo = document.querySelector('.contact-info');
        
        if (contactoTitle) {
            allContent.push({
                id: 'contacto-titulo',
                title: 'Contacto - Título',
                content: contactoTitle.textContent,
                icon: 'fas fa-envelope',
                category: 'Contacto',
                section: 'contacto',
                sectionName: 'Contacto',
                element: contactoTitle
            });
        }
        
        if (contactoInfo) {
            const contactoTexto = contactoInfo.querySelector('p');
            const contactoItems = contactoInfo.querySelectorAll('.contact-item p');
            
            if (contactoTexto) {
                allContent.push({
                    id: 'contacto-info',
                    title: 'Información de Contacto',
                    content: contactoTexto.textContent,
                    icon: 'fas fa-address-card',
                    category: 'Contacto',
                    section: 'contacto',
                    sectionName: 'Contacto',
                    element: contactoTexto
                });
            }
            
            contactoItems.forEach((item, index) => {
                allContent.push({
                    id: `contact-item-${index}`,
                    title: 'Detalle de Contacto',
                    content: item.textContent,
                    icon: 'fas fa-phone-alt',
                    category: 'Contacto',
                    section: 'contacto',
                    sectionName: 'Contacto',
                    element: item
                });
            });
            
            // Redes sociales
            const socialLinks = contactoInfo.querySelectorAll('.social-links a');
            socialLinks.forEach((link, index) => {
                const platform = link.querySelector('i').className.includes('linkedin') ? 'LinkedIn' : 'GitHub';
                allContent.push({
                    id: `social-${index}`,
                    title: `Red Social - ${platform}`,
                    content: link.href,
                    icon: 'fas fa-share-alt',
                    category: 'Contacto',
                    section: 'contacto',
                    sectionName: 'Contacto',
                    element: link
                });
            });
        }
        
        console.log(`✅ Sistema de búsqueda inicializado. ${allContent.length} elementos cargados para búsqueda.`);
    }
    
    // Buscar contenido
    function searchContent(query) {
        if (!query.trim()) {
            return [];
        }
        
        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
        const results = [];
        
        allContent.forEach(item => {
            const content = item.content ? item.content.toLowerCase() : '';
            const title = item.title ? item.title.toLowerCase() : '';
            const category = item.category ? item.category.toLowerCase() : '';
            const languages = item.languages ? item.languages.toLowerCase() : '';
            
            // Verificar si alguno de los términos de búsqueda coincide
            const matches = searchTerms.some(term => 
                content.includes(term) || 
                title.includes(term) || 
                category.includes(term) ||
                languages.includes(term)
            );
            
            if (matches) {
                // Calcular relevancia
                let relevance = 0;
                searchTerms.forEach(term => {
                    if (title.includes(term)) relevance += 3;
                    if (category.includes(term)) relevance += 2;
                    if (content.includes(term)) relevance += 1;
                    if (languages && languages.includes(term)) relevance += 2;
                });
                
                results.push({
                    ...item,
                    relevance
                });
            }
        });
        
        // Ordenar por relevancia
        return results.sort((a, b) => b.relevance - a.relevance);
    }
    
    // Resaltar texto en resultados
    function highlightText(text, query) {
        if (!query.trim()) return text;
        
        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
        let highlighted = text;
        
        searchTerms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            highlighted = highlighted.replace(regex, '<span class="search-highlight">$1</span>');
        });
        
        return highlighted;
    }
    
    // Mostrar resultados en tiempo real (dropdown)
    function showRealTimeResults(results, query) {
        searchResults.innerHTML = '';
        
        if (results.length === 0 || !query.trim()) {
            searchResults.classList.remove('active');
            return;
        }
        
        // Mostrar solo los primeros 5 resultados en tiempo real
        const limitedResults = results.slice(0, 5);
        
        limitedResults.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.className = 'search-result-item';
            
            // Preparar snippet
            let snippet = result.content.substring(0, 80);
            if (result.content.length > 80) snippet += '...';
            
            resultElement.innerHTML = `
                <div class="search-result-header">
                    <i class="${result.icon}"></i>
                    <div class="search-result-info">
                        <div class="search-result-title">
                            ${highlightText(result.title, query)}
                        </div>
                        <div class="search-result-category">${result.category}</div>
                    </div>
                </div>
                <div class="search-result-snippet">
                    ${highlightText(snippet, query)}
                </div>
            `;
            
            resultElement.addEventListener('click', () => {
                navigateToResult(result);
                hideSearchResults();
            });
            
            searchResults.appendChild(resultElement);
        });
        
        searchResults.classList.add('active');
    }
    
    // Mostrar resultados en página
    function showPageResults(results, query) {
        searchResultsContainer.innerHTML = '';
        currentQuery = query;
        
        if (results.length === 0) {
            noSearchResults.style.display = 'block';
            searchResultsContainer.style.display = 'none';
            searchResultsTitle.textContent = `No hay resultados para: "${query}"`;
        } else {
            noSearchResults.style.display = 'none';
            searchResultsContainer.style.display = 'grid';
            searchResultsTitle.textContent = `${results.length} resultado${results.length !== 1 ? 's' : ''} para: "${query}"`;
            
            results.forEach((result, index) => {
                const resultElement = document.createElement('div');
                resultElement.className = 'search-result-card';
                resultElement.setAttribute('data-index', index);
                
                // Preparar contenido
                let contentSnippet = result.content.substring(0, 120);
                if (result.content.length > 120) contentSnippet += '...';
                
                // Tecnologías si las hay
                const techHTML = result.languages ? 
                    `<div class="search-result-tech">
                        <i class="fas fa-tools"></i>
                        <span>${JSON.parse(result.languages).join(', ')}</span>
                    </div>` : '';
                
                resultElement.innerHTML = `
                    <div class="search-result-card-header">
                        <div class="search-result-card-icon">
                            <i class="${result.icon}"></i>
                        </div>
                        <div class="search-result-card-title">
                            <h3>${highlightText(result.title, query)}</h3>
                            <span class="search-result-card-category">${result.category}</span>
                        </div>
                    </div>
                    <div class="search-result-card-content">
                        ${highlightText(contentSnippet, query)}
                    </div>
                    ${techHTML}
                    <div class="search-result-card-footer">
                        <span class="search-result-card-section">
                            <i class="fas fa-folder"></i> ${result.sectionName}
                        </span>
                        <a href="#${result.section}" class="search-result-card-link" data-result-id="${result.id}">
                            Ir a sección <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                `;
                
                resultElement.addEventListener('click', (e) => {
                    if (!e.target.closest('.search-result-card-link')) {
                        navigateToResult(result);
                    }
                });
                
                // Event listener para el enlace
                const link = resultElement.querySelector('.search-result-card-link');
                if (link) {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        navigateToResult(result);
                    });
                }
                
                searchResultsContainer.appendChild(resultElement);
            });
        }
        
        // Mostrar la sección de resultados
        searchResultsSection.style.display = 'block';
        
        // Desplazarse a la sección de resultados
        setTimeout(() => {
            searchResultsSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
    
    // Navegar al resultado (CORREGIDO)
    function navigateToResult(result) {
        // Ocultar resultados de búsqueda
        hideSearchResults();
        
        // Cerrar todos los modales abiertos primero
        const projectModal = document.getElementById('projectModal');
        const diplomaModal = document.getElementById('diplomaModal');
        
        if (projectModal) projectModal.style.display = 'none';
        if (diplomaModal) diplomaModal.style.display = 'none';
        
        // Si tenemos una referencia directa al elemento
        if (result.element && result.element instanceof HTMLElement) {
            // Desplazarse al elemento
            result.element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center' 
            });
            
            // Resaltar el elemento
            highlightElement(result.element);
            
            // Si es un proyecto, abrir su modal
            if (result.projectId) {
                setTimeout(() => {
                    const detailsBtn = result.element.querySelector('.btn-details');
                    if (detailsBtn) detailsBtn.click();
                }, 800);
            }
            
            // Si es un premio, abrir el modal del diploma
            if (typeof result.diplomaIndex !== 'undefined') {
                setTimeout(() => {
                    const diplomaBtn = result.element.querySelector('.ver-diploma-btn');
                    if (diplomaBtn) diplomaBtn.click();
                }, 800);
            }
        } 
        // Si no tenemos referencia directa, intentar navegar a la sección
        else if (result.section) {
            const section = document.getElementById(result.section);
            if (section) {
                section.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start' 
                });
                
                // Intentar encontrar el elemento específico en la sección
                setTimeout(() => {
                    if (result.elementSelector) {
                        const elementInSection = section.querySelector(result.elementSelector);
                        if (elementInSection) {
                            highlightElement(elementInSection);
                        }
                    } else {
                        // Resaltar toda la sección si no encontramos el elemento específico
                        highlightElement(section);
                    }
                }, 300);
            }
        }
    }
    
    // Función para resaltar elementos temporalmente
    function highlightElement(element) {
        if (!element) return;
        
        // Guardar el estilo original
        const originalBorder = element.style.border;
        const originalBoxShadow = element.style.boxShadow;
        const originalTransition = element.style.transition;
        
        // Aplicar resaltado
        element.style.transition = 'all 0.5s ease';
        element.style.border = '2px solid #4CAF50';
        element.style.boxShadow = '0 0 15px rgba(76, 175, 80, 0.5)';
        
        // Remover el resaltado después de 3 segundos
        setTimeout(() => {
            element.style.border = originalBorder;
            element.style.boxShadow = originalBoxShadow;
            element.style.transition = originalTransition;
        }, 3000);
    }
    
    // Ocultar resultados de búsqueda
    function hideSearchResults() {
        searchResultsSection.style.display = 'none';
        searchResults.classList.remove('active');
        searchInput.value = '';
        searchInput.blur();
    }
    
    // Event Listeners
    searchInput.addEventListener('input', function() {
        const query = this.value;
        
        // Debounce para búsqueda en tiempo real
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (query.trim().length >= 2) {
                const results = searchContent(query);
                showRealTimeResults(results, query);
            } else {
                searchResults.classList.remove('active');
            }
        }, 300);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                const results = searchContent(query);
                showPageResults(results, query);
                searchResults.classList.remove('active');
            }
        }
    });
    
    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length >= 2) {
            const results = searchContent(this.value);
            showRealTimeResults(results, this.value);
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!searchResults.contains(e.target) && !searchInput.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
    
    closeSearchResults.addEventListener('click', hideSearchResults);
    
    // Inicializar
    initializeSearchContent();
});

// ===== SUBMENÚ SIMPLE - NO AFECTA NADA MÁS =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Solo inicializar si existe el submenú
    const navMore = document.querySelector('.nav-more');
    if (!navMore) return;
    
    const moreToggle = navMore.querySelector('.more-toggle');
    const moreDropdown = navMore.querySelector('.more-dropdown');
    const moreArrow = navMore.querySelector('.more-arrow');
    
    // Para desktop: hover
    if (window.innerWidth > 768) {
        let hoverTimeout;
        
        navMore.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            moreDropdown.style.opacity = '1';
            moreDropdown.style.visibility = 'visible';
            moreDropdown.style.transform = 'translateY(0)';
            if (moreArrow) moreArrow.style.transform = 'rotate(180deg)';
        });
        
        navMore.addEventListener('mouseleave', function() {
            hoverTimeout = setTimeout(function() {
                moreDropdown.style.opacity = '0';
                moreDropdown.style.visibility = 'hidden';
                moreDropdown.style.transform = 'translateY(10px)';
                if (moreArrow) moreArrow.style.transform = '';
            }, 200);
        });
        
        moreDropdown.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
        });
        
        moreDropdown.addEventListener('mouseleave', function() {
            hoverTimeout = setTimeout(function() {
                moreDropdown.style.opacity = '0';
                moreDropdown.style.visibility = 'hidden';
                moreDropdown.style.transform = 'translateY(10px)';
                if (moreArrow) moreArrow.style.transform = '';
            }, 150);
        });
    }
    
    // Para móvil: click
    moreToggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = navMore.classList.contains('active');
            
            if (!isActive) {
                navMore.classList.add('active');
                if (moreArrow) moreArrow.style.transform = 'rotate(180deg)';
            } else {
                navMore.classList.remove('active');
                if (moreArrow) moreArrow.style.transform = '';
            }
        }
    });
    
    // Navegación suave
    const dropdownLinks = moreDropdown.querySelectorAll('a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            
            // Cerrar dropdown
            if (window.innerWidth > 768) {
                moreDropdown.style.opacity = '0';
                moreDropdown.style.visibility = 'hidden';
                moreDropdown.style.transform = 'translateY(10px)';
                if (moreArrow) moreArrow.style.transform = '';
            } else {
                navMore.classList.remove('active');
                if (moreArrow) moreArrow.style.transform = '';
            }
            
            // Desplazamiento suave
            setTimeout(() => {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const navHeight = document.querySelector('nav').offsetHeight || 80;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        });
    });
    
    // Traducción simple
    function updateMoreText() {
        const isEnglish = document.documentElement.lang === 'en';
        
        if (isEnglish) {
            // Textos en inglés
            moreToggle.querySelector('span').textContent = 'More';
            
            const texts = ['Personal Brand', 'Awards', 'Interests', 'Testimonials'];
            dropdownLinks.forEach((link, index) => {
                const icon = link.querySelector('i').cloneNode(true);
                link.innerHTML = '';
                link.appendChild(icon);
                link.appendChild(document.createTextNode(' ' + texts[index]));
            });
        } else {
            // Textos en español
            moreToggle.querySelector('span').textContent = 'Más';
            
            const texts = ['Marca Personal', 'Premios', 'Intereses', 'Testimonios'];
            dropdownLinks.forEach((link, index) => {
                const icon = link.querySelector('i').cloneNode(true);
                link.innerHTML = '';
                link.appendChild(icon);
                link.appendChild(document.createTextNode(' ' + texts[index]));
            });
        }
    }
    
    // Integrar con tu botón de traducción
    const translateBtn = document.getElementById('translateBtn');
    if (translateBtn) {
        translateBtn.addEventListener('click', function() {
            setTimeout(updateMoreText, 100);
        });
    }
    
    // Inicializar
    updateMoreText();
});

// ==============================
// BOTÓN DE TRADUCCIÓN CORREGIDO (AGREGADO AL FINAL)
// ==============================
document.addEventListener('DOMContentLoaded', function() {
    console.log("🌍 Inicializando botón de traducción...");
    
    const translateBtn = document.getElementById('translateBtn');
    if (translateBtn) {
        console.log("✅ Botón de traducción encontrado");
        
        // Solo si no tiene contenido, lo inicializamos
        if (!translateBtn.innerHTML.trim()) {
            translateBtn.innerHTML = `<i class="fa-solid fa-globe"></i> <span class="lang-text">EN</span>`;
            console.log("✨ Botón inicializado con HTML");
        } else {
            console.log("📝 Botón ya tiene contenido:", translateBtn.innerHTML.substring(0, 50) + "...");
        }
        
        // Referencia al texto del botón
        const langTextSpan = translateBtn.querySelector(".lang-text");
        
        if (langTextSpan) {
            console.log("✅ Span de texto encontrado en el botón");
            
            // Evento al hacer clic
            translateBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log("🖱️ Botón de traducción clickeado");
                console.log("🌐 Idioma actual ANTES del cambio:", currentLang);
                
                // Cambiar idioma
                currentLang = currentLang === 'es' ? 'en' : 'es';
                console.log("🌐 Idioma DESPUÉS del cambio:", currentLang);
                
                // Traducir página
                translatePage(currentLang);
                
                // Actualizar texto del botón
                if (langTextSpan) {
                    const newText = currentLang === 'es' ? 'EN' : 'ES';
                    console.log("🔄 Cambiando texto del botón a:", newText);
                    langTextSpan.textContent = newText;
                }
                
                // Animación
                document.body.classList.add("language-change");
                setTimeout(() => document.body.classList.remove("language-change"), 400);
                
                console.log("✅ Traducción completada");
            });
            
            // Inicializar con idioma actual
            const initialText = currentLang === 'es' ? 'EN' : 'ES';
            langTextSpan.textContent = initialText;
            console.log("🏁 Botón inicializado con texto:", initialText);
            
        } else {
            console.error("❌ No se encontró el span .lang-text dentro del botón");
            console.log("🔍 Contenido del botón:", translateBtn.innerHTML);
        }
        
        console.log("🎉 Botón de traducción completamente inicializado");
        
    } else {
        console.error("❌ No se encontró el botón de traducción con id='translateBtn'");
        console.log("🔍 Elementos con id translateBtn en la página:", document.querySelectorAll('[id*="translate"]').length);
    }
    
    // Inicializar traducción al cargar la página
    translatePage(currentLang);
    console.log("🌐 Página traducida al idioma inicial:", currentLang);
});
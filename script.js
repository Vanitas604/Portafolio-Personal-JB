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

// ===== FUNCIÓN MEJORADA PARA MANEJAR IMÁGENES =====
function openProjectModal(projectCard) {
    console.log("🎯 Abriendo modal para:", projectCard);
    
    try {
        const title = projectCard.getAttribute('data-title');
        const languages = JSON.parse(projectCard.getAttribute('data-languages'));
        const role = projectCard.getAttribute('data-role');
        const description = projectCard.getAttribute('data-description');
        const images = JSON.parse(projectCard.getAttribute('data-images'));
        const githubLink = projectCard.getAttribute('data-github');

        const modal = document.getElementById('projectModal');
        const modalTitle = document.getElementById('modalProjectTitle');
        const modalLanguages = document.getElementById('modalLanguages');
        const modalRole = document.getElementById('modalRole');
        const modalDescription = document.getElementById('modalDescription');
        const modalGallery = document.getElementById('modalGallery');
        const modalGitHubLink = document.getElementById('modalGitHubLink');

        if (!modal) {
            console.error("❌ Modal no encontrado en el DOM");
            return;
        }

        // Llenar datos
        modalTitle.textContent = title;
        modalRole.textContent = role;
        modalDescription.textContent = description;
        modalGitHubLink.href = githubLink;

        // Llenar lenguajes
        modalLanguages.innerHTML = '';
        languages.forEach(lang => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag';
            tag.textContent = lang;
            modalLanguages.appendChild(tag);
        });

        // 🔹 MEJORADO: Llenar galería con manejo de imágenes faltantes
        modalGallery.innerHTML = '';
        
        images.forEach((image, index) => {
            const imgContainer = document.createElement('div');
            imgContainer.style.position = 'relative';
            imgContainer.style.borderRadius = '8px';
            imgContainer.style.overflow = 'hidden';
            
            const img = document.createElement('img');
            img.src = image;
            img.alt = `${title} - Imagen ${index + 1}`;
            img.className = 'gallery-image';
            
            // 🔹 Manejar imágenes que no cargan
            img.onerror = function() {
                console.log(`❌ Imagen no encontrada: ${image}`);
                this.src = 'https://via.placeholder.com/300x200/ffeaea/333333?text=Imagen+No+Disponible';
                this.alt = 'Imagen no disponible';
            };
            
            img.onload = function() {
                console.log(`✅ Imagen cargada: ${image}`);
            };
            
            img.onclick = () => openImageModal(img.src);
            
            imgContainer.appendChild(img);
            modalGallery.appendChild(imgContainer);
        });

        // Mostrar modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log("✅ Modal abierto exitosamente");
        
    } catch (error) {
        console.error("❌ Error al abrir modal:", error);
    }
}
// ===== FUNCIONES DEL MODAL - VERSIÓN COMPLETA =====
function openProjectModal(projectCard) {
    console.log("🎯 Abriendo modal para:", projectCard);
    
    try {
        // Obtener todos los datos de la tarjeta
        const title = projectCard.getAttribute('data-title');
        const languages = JSON.parse(projectCard.getAttribute('data-languages'));
        const role = projectCard.getAttribute('data-role');
        const description = projectCard.getAttribute('data-description');
        const images = JSON.parse(projectCard.getAttribute('data-images'));
        const githubLink = projectCard.getAttribute('data-github');
        const problem = projectCard.getAttribute('data-problem');
        const solution = JSON.parse(projectCard.getAttribute('data-solution'));
        const result = projectCard.getAttribute('data-result');

        console.log("📊 Datos obtenidos:", { 
            title, languages, role, description, images, githubLink,
            problem, solution, result 
        });

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
        } else {
            console.warn("⚠️ No se encontraron datos de solución o no es un array:", solution);
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
        console.log("✅ Modal abierto exitosamente con nuevas secciones");
        
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

// Event Listeners (agrega esto al final de tu JavaScript)
document.addEventListener('DOMContentLoaded', function() {
    // Cerrar modal al hacer clic en la X
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }
    
    // Cerrar modal al hacer clic fuera del contenido
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
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
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
        contactoTexto: "Si estás interesado en trabajar conmigo, no dudes en contactarme.",
        
        // NUEVAS TRADUCCIONES PARA EL MODAL
        modalLenguajes: "Lenguajes de Programación",
        modalRol: "Mi Rol",
        modalDescripcion: "Descripción",
        modalGaleria: "Galería del Proyecto",
        modalVerGitHub: "Ver en GitHub",
        // Títulos del modal (nuevos)
        modalProblema: "PROBLEMA",
        modalSolucion: "SOLUCIÓN", 
        modalResultado: "RESULTADO",
        // Marca Personal (nuevo)
        marcaPersonalTitulo: "Marca Personal",
        marcaPersonalFrase: "“Una mente curiosa, un corazón empático y un espíritu que nunca deja de evolucionar.”",
        marcaPersonalAutor: "- Jennifer Baires",
        // Modo oscuro
        darkModeText: "Modo Oscuro"
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
        contactoTexto: "If you are interested in working with me, feel free to contact me.",
        
        // NUEVAS TRADUCCIONES PARA EL MODAL
        modalLenguajes: "Programming Languages",
        modalRol: "My Role",
        modalDescripcion: "Description",
        modalGaleria: "Project Gallery",
        modalVerGitHub: "View on GitHub",
        // Títulos del modal (nuevos)
        modalProblema: "PROBLEM",
        modalSolucion: "SOLUTION",
        modalResultado: "RESULT",
        // Marca Personal (nuevo)
        marcaPersonalTitulo: "Personal Brand",
        marcaPersonalFrase: "“A curious mind, an empathetic heart, and a spirit that never stops evolving.”",
        marcaPersonalAutor: "- Jennifer Baires",
        // Modo oscuro
        darkModeText: "Dark Mode",
        
        // === TRADUCCIONES PARA EL MODAL DE PROYECTOS ===
        // Proyecto 1: Adopta a un amigo
        proj1Title: "Adopt a Friend",
        proj1Role: "Full Stack Developer and Scrum Master",
        proj1Description: "Complete web platform for an animal shelter, focused on promoting responsible adoption. Includes pet management system, adoption forms and administrative panel.",
        proj1Problem: "Animal shelters faced difficulties in managing adoptions efficiently, with manual processes that caused delays and lack of follow-up on applications.",
        proj1Solution: "User registration system|Catalog of animals available for adoption|Filters by type, size and age of animal|Adoption application form|Administrative panel for the shelter",
        proj1Result: "The system increased adoptions by 40%, reduced application processing time from 5 days to 24 hours, and significantly improved the experience for both adopters and shelter staff.",

        // Proyecto 2: Artesanías Software
        proj2Title: "Business Software Artesanías Conchita",
        proj2Role: "Scrum Master", 
        proj2Description: "Business software prototype that allows complete control of billing, inventory, customers and suppliers of the Artesanías Conchita company.",
        proj2Problem: "The Artesanías Conchita company managed its billing and inventory processes manually, which generated errors, loss of information and difficulties in accessing historical data.",
        proj2Solution: "Automated billing system|Real-time inventory control|Centralized management of customers and suppliers|Sales reports and statistics|Automatic data backup",
        proj2Result: "80% reduction in billing errors, 60% optimization in inventory management time and immediate access to financial reports.",

        // Proyecto 3: Artesanías Web
        proj3Title: "Artesanías Conchita Website",
        proj3Role: "Scrum Master, Full Stack Developer and Web Designer",
        proj3Description: "Informative website and online catalog showing the company's artisan products, with responsive design and SEO optimized.",
        proj3Problem: "The company had no digital presence, which limited its reach to potential customers and made it difficult to disseminate its artisan products to a broader market.",
        proj3Solution: "Responsive web design adapted to all devices|Digital product catalog organized by categories|SEO optimization for better positioning|Integrated contact form|High quality image gallery",
        proj3Result: "200% increase in online visibility, generation of qualified leads and establishment of professional digital presence for the company.",

        // Proyecto 4: Task Planner
        proj4Title: "Task Planner", 
        proj4Role: "Scrum Master and Full Stack Developer",
        proj4Description: "Mobile application for organizing daily tasks, with reminder system, categories, priorities and local storage for better time management.",
        proj4Problem: "Users needed an efficient tool to organize their daily tasks, as existing applications did not offer an intuitive experience or adequate customization features.",
        proj4Solution: "Intuitive and easy-to-use interface|Customizable categories and tags system|Reminders and push notifications|Offline synchronization with SQLite|Filters by priority and due date",
        proj4Result: "75% improvement in user productivity, reduction of task organization stress and high rating on Google Play Store (4.5/5)."
    }
};

// ==============================
// Traducciones para el modal de proyectos
// ==============================
// Estado actual del idioma
// ==============================
let currentLang = 'es';

// ==============================
// Función de traducción mejorada
// ==============================
function translatePage(lang) {
     currentLang = lang;
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

    // Inicializar
    updateInteresesCarrusel();
});

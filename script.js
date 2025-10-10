document.addEventListener("DOMContentLoaded", () => {

  // ========== SISTEMA DE TRADUCCIÓN ==========
  const translations = {
    es: {
      logoTitle: "Mi<span>Portafolio</span>",
      navHome: "Inicio",
      navAbout: "Sobre Mí",
      navInterests: "Intereses",
      navProjects: "Proyectos",
      navTestimonials: "Testimonios",
      navContact: "Contacto",

      heroGreeting: "Hola, soy <span class='highlight'>Jennifer Yamileth Baires Acosta</span>",
      interestTitle: "Áreas de Interés:",
      interestAreas: "Scrum Master | Desarrolladora Web | Diseñadora UX/UI",
      viewProjects: "Ver Mis Proyectos",
      downloadCV: "<i class='fas fa-download'></i> Descargar CV",

      aboutSectionTitle: "Sobre <span>Mí</span>",
      aboutParagraph1:
        "Soy una persona optimista, responsable y orientada al progreso, con facilidad para trabajar en equipo, adaptarme a nuevos retos y mantener relaciones interpersonales positivas.",
      aboutParagraph2:
        "Mi objetivo es crear experiencias digitales que no solo sean visualmente atractivas, sino también intuitivas y accesibles para todos los usuarios.",
      downloadFullCV: "<i class='fas fa-download'></i> Descargar CV Completo",

      "skills-title": "Mis <span>Habilidades</span>",
      "technical-skills-title": "<i class='fas fa-laptop-code'></i> Habilidades Técnicas",
      "soft-skills-title": "<i class='fas fa-user-friends'></i> Habilidades Blandas",
      frontend: "Desarrollo Front-End (HTML, CSS, JavaScript)",
      programming: "Programación en Python, C#, Java",
      design: "Diseño UX/UI con Figma y Canva",
      database: "Manejo de bases de datos SQL Server y SQLite",
      git: "Control de versiones con Git y GitHub",
      leadership: "Liderazgo y trabajo en equipo",
      communication: "Comunicación efectiva",
      adaptability: "Adaptabilidad y aprendizaje continuo",
      "critical-thinking": "Pensamiento crítico y resolución de problemas",
      "time-management": "Gestión del tiempo y organización",

      "interests-title": "Mis <span>Intereses</span>",
      "scrum-title": "Scrum Master",
      "scrum-text": "Me apasiona facilitar procesos ágiles y ayudar a los equipos a alcanzar su máximo potencial mediante metodologías Scrum.",
      "webdev-title": "Desarrollo Web",
      "webdev-text": "Disfruto crear aplicaciones web modernas, responsivas y accesibles utilizando las últimas tecnologías.",
      "uxui-title": "Diseño UX/UI",
      "uxui-text": "Me encanta diseñar interfaces intuitivas y experiencias de usuario que sean tanto funcionales como estéticamente agradables.",
      "apps-title": "Apps Móviles",
      "apps-text": "Me interesa el desarrollo de aplicaciones móviles nativas e híbridas que resuelvan problemas reales.",

      "projects-title": "Mis <span>Proyectos</span>",
      "project1-title": "Adopta a un amigo",
      "project1-text": "Plataforma web para un refugio de animales, enfocada en promover la adopción responsable de mascotas.",
      "project2-title": "Software Artesanías Conchita",
      "project2-text": "Prototipo de software empresarial que permite llevar el control completo de facturación e inventario.",
      "project3-title": "Sitio Web Artesanías Conchita",
      "project3-text": "Sitio Web informativo que muestra los productos de la empresa.",
      "project4-title": "Task Planner",
      "project4-text": "Aplicación móvil para organizar tareas, con almacenamiento local y filtros para una mejor gestión del tiempo.",
      "github-link": "<i class='fab fa-github'></i> Ver en GitHub",

      "testimonials-title": "Testi<span>monios</span>",
      "testimonial1-text": "Jennifer demostró una gran capacidad de liderazgo como Scrum Master en nuestro último proyecto. Su habilidad para facilitar las reuniones y mantener al equipo enfocado fue fundamental para nuestro éxito.",
      "testimonial1-name": "Carlos Rodríguez",
      "testimonial1-role": "Team Lead en TechSolutions",
      "testimonial2-text": "El trabajo de Jennifer en el diseño UX/UI de nuestra aplicación fue excepcional. Logró crear una interfaz intuitiva y atractiva que nuestros usuarios han elogiado constantemente.",
      "testimonial2-name": "María López",
      "testimonial2-role": "Product Manager en DesignCo",
      "testimonial3-text": "Como desarrolladora, Jennifer tiene una gran atención al detalle y siempre entrega código limpio y bien documentado. Es un placer trabajar con ella en cualquier proyecto.",
      "testimonial3-name": "Roberto Sánchez",
      "testimonial3-role": "Senior Developer en CodeWorks",

      "contact-title": "Contácta<span>me</span>",
      "contact-subtitle": "Ponte en contacto",
      "contact-text": "Si estás interesado en trabajar conmigo, no dudes en contactarme.",
      "contact-email": "jennferbaires@gmail.com",
      "contact-location": "Usulután - Usulután, El Salvador",

      "footer-text": "&copy; 2025 Jennifer Baires. Todos los derechos reservados."
    },

    en: {
      logoTitle: "My<span>Portfolio</span>",
      navHome: "Home",
      navAbout: "About Me",
      navInterests: "Interests",
      navProjects: "Projects",
      navTestimonials: "Testimonials",
      navContact: "Contact",

      heroGreeting: "Hi, I'm <span class='highlight'>Jennifer Yamileth Baires Acosta</span>",
      interestTitle: "Areas of Interest:",
      interestAreas: "Scrum Master | Web Developer | UX/UI Designer",
      viewProjects: "View My Projects",
      downloadCV: "<i class='fas fa-download'></i> Download CV",

      aboutSectionTitle: "About <span>Me</span>",
      aboutParagraph1:
        "I am an optimistic, responsible person oriented to progress, with strong teamwork, adaptability, and positive interpersonal skills.",
      aboutParagraph2:
        "My goal is to create digital experiences that are visually appealing, intuitive, and accessible for all users.",
      downloadFullCV: "<i class='fas fa-download'></i> Download Full CV",

      "skills-title": "My <span>Skills</span>",
      "technical-skills-title": "<i class='fas fa-laptop-code'></i> Technical Skills",
      "soft-skills-title": "<i class='fas fa-user-friends'></i> Soft Skills",
      frontend: "Front-End Development (HTML, CSS, JavaScript)",
      programming: "Programming in Python, C#, Java",
      design: "UX/UI Design with Figma and Canva",
      database: "Database management with SQL Server and SQLite",
      git: "Version control with Git and GitHub",
      leadership: "Leadership and teamwork",
      communication: "Effective communication",
      adaptability: "Adaptability and continuous learning",
      "critical-thinking": "Critical thinking and problem solving",
      "time-management": "Time management and organization",

      "interests-title": "My <span>Interests</span>",
      "scrum-title": "Scrum Master",
      "scrum-text": "I love facilitating agile processes and helping teams reach their full potential.",
      "webdev-title": "Web Development",
      "webdev-text": "I enjoy creating modern, responsive and accessible web applications.",
      "uxui-title": "UX/UI Design",
      "uxui-text": "I love designing intuitive and aesthetically pleasing user experiences.",
      "apps-title": "Mobile Apps",
      "apps-text": "I am interested in developing native and hybrid mobile applications that solve real-world problems.",

      "projects-title": "My <span>Projects</span>",
      "project1-title": "Adopt a Friend",
      "project1-text": "Web platform for an animal shelter focused on promoting responsible pet adoption.",
      "project2-title": "Conchita Crafts Software",
      "project2-text": "Business software prototype for full billing and inventory management.",
      "project3-title": "Conchita Crafts Website",
      "project3-text": "Informative website displaying the company’s products.",
      "project4-title": "Task Planner",
      "project4-text": "Mobile app for organizing tasks with local storage and filters for better time management.",
      "github-link": "<i class='fab fa-github'></i> View on GitHub",

      "testimonials-title": "Testi<span>monials</span>",
      "testimonial1-text": "Jennifer showed great leadership as Scrum Master in our last project. Her ability to facilitate meetings and keep the team focused was key to our success.",
      "testimonial1-name": "Carlos Rodríguez",
      "testimonial1-role": "Team Lead at TechSolutions",
      "testimonial2-text": "Jennifer’s UX/UI design work for our app was outstanding. She created an intuitive and attractive interface that users constantly praise.",
      "testimonial2-name": "María López",
      "testimonial2-role": "Product Manager at DesignCo",
      "testimonial3-text": "As a developer, Jennifer delivers clean, well-documented code and pays great attention to detail. A pleasure to work with her.",
      "testimonial3-name": "Roberto Sánchez",
      "testimonial3-role": "Senior Developer at CodeWorks",

      "contact-title": "Contact <span>Me</span>",
      "contact-subtitle": "Get in Touch",
      "contact-text": "If you’re interested in working with me, feel free to reach out.",
      "contact-email": "jennferbaires@gmail.com",
      "contact-location": "Usulután - Usulután, El Salvador",

      "footer-text": "&copy; 2025 Jennifer Baires. All rights reserved."
    }
  };

  // ====== FUNCIÓN DE APLICAR IDIOMA ======
  function applyLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(el => {
      const key = el.getAttribute("data-translate");
      const translation = translations[lang][key];
      if (translation) el.innerHTML = translation;
    });
    localStorage.setItem("language", lang);
  }

  // ====== SELECTOR DE IDIOMA ======
  const languageSelect = document.getElementById("languageSelect");
  const savedLang = localStorage.getItem("language") || "es";
  applyLanguage(savedLang);
  languageSelect.value = savedLang;

  languageSelect.addEventListener("change", e => {
    applyLanguage(e.target.value);
  });
});

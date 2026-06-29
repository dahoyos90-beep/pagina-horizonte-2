/* =========================================================
   SERVICIOS.JS — Tabs de navegación y animaciones
========================================================= */


// =========================================================
// TABS DE CATEGORÍAS
// =========================================================
function iniciarTabs() {
    const tabs    = document.querySelectorAll(".srv-tab");
    const cats    = document.querySelectorAll(".srv-cat");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            // 1. Activar tab clickeado
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // 2. Mostrar categoría correspondiente
            const cat = tab.dataset.cat;
            cats.forEach(c => c.classList.remove("active"));
            const catTarget = document.getElementById("cat-" + cat);
            if (catTarget) {
                catTarget.classList.add("active");

                // 3. Hacer scroll suave a la sección
                catTarget.scrollIntoView({ behavior: "smooth", block: "start" });

                // 4. Animar las tarjetas de la nueva categoría
                animarTarjetas(catTarget);
            }
        });
    });
}


// =========================================================
// ANIMACIÓN DE ENTRADA DE TARJETAS (INTERSECTION OBSERVER)
// =========================================================
function animarTarjetas(contenedor) {
    const cards = contenedor.querySelectorAll(".srv-card");

    // Resetear para re-animar
    cards.forEach(c => {
        c.classList.remove("visible");
        c.style.transitionDelay = "0ms";
    });

    // Pequeño delay para que el reset se procese
    requestAnimationFrame(() => {
        cards.forEach((card, i) => {
            card.style.transitionDelay = (i * 80) + "ms";
            setTimeout(() => card.classList.add("visible"), 50);
        });
    });
}


// =========================================================
// OBSERVER GLOBAL — anima tarjetas al entrar en viewport
// =========================================================
function iniciarObserver() {
    if (!("IntersectionObserver" in window)) {
        // Fallback: mostrar todo
        document.querySelectorAll(".srv-card").forEach(c => c.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    // Observar solo las tarjetas de la categoría activa inicial
    const catActiva = document.querySelector(".srv-cat.active");
    if (catActiva) {
        catActiva.querySelectorAll(".srv-card").forEach((card, i) => {
            card.style.transitionDelay = (i * 80) + "ms";
            observer.observe(card);
        });
    }
}


// =========================================================
// ANIMACIÓN DE PASOS AL HACER SCROLL
// =========================================================
function iniciarPasos() {
    if (!("IntersectionObserver" in window)) return;

    const pasos = document.querySelectorAll(".srv-paso");
    pasos.forEach(p => {
        p.style.opacity = "0";
        p.style.transform = "translateY(25px)";
        p.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                const i = Array.from(pasos).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, i * 120);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    pasos.forEach(p => observer.observe(p));
}


// =========================================================
// TABS STICKY — resalta el tab al hacer scroll (opcional)
// =========================================================
function iniciarScrollSpy() {
    if (!("IntersectionObserver" in window)) return;

    const cats = document.querySelectorAll(".srv-cat");
    const tabs = document.querySelectorAll(".srv-tab");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                const id = entry.target.id.replace("cat-", "");
                tabs.forEach(t => {
                    t.classList.toggle("active", t.dataset.cat === id);
                });
            }
        });
    }, { threshold: 0.3, rootMargin: "-100px 0px -40% 0px" });

    cats.forEach(c => observer.observe(c));
}


// =========================================================
// INICIALIZACIÓN
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
    iniciarTabs();
    iniciarObserver();
    iniciarPasos();
    iniciarScrollSpy();
});

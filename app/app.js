/* =========================================================
   APP.JS — Index principal
   Carrusel, buscador, tarjetas y modal de propiedades
========================================================= */


// =========================================================
// BASE DE DATOS DE PROPIEDADES
// =========================================================
const propiedades = [
    {
        id: 1,
        titulo: "Casa Campestre",
        ciudad: "Armenia",
        departamento: "Quindío",
        tipo: "Casa",
        operacion: "Venta",
        precio: 450000000,
        habitaciones: 4,
        banos: 3,
        area: 280,
        garaje: 2,
        estrato: 4,
        descripcion: "Hermosa casa campestre ubicada en las afueras de Armenia, rodeada de naturaleza y con vista panorámica a las montañas del Quindío. Cuenta con amplios espacios, cocina integral, zona BBQ, piscina y jardín privado.",
        fotos: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
        ]
    },
    {
        id: 2,
        titulo: "Apartamento Moderno",
        ciudad: "Pereira",
        departamento: "Risaralda",
        tipo: "Apartamento",
        operacion: "Venta",
        precio: 280000000,
        habitaciones: 3,
        banos: 2,
        area: 95,
        garaje: 1,
        estrato: 5,
        descripcion: "Moderno apartamento en conjunto cerrado con excelente ubicación en Pereira. Acabados de lujo, cocina abierta, balcón con vista a la ciudad y acceso a zonas comunes: gimnasio, salón comunal y parque infantil.",
        fotos: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80",
            "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=900&q=80"
        ]
    },
    {
        id: 3,
        titulo: "Local Comercial",
        ciudad: "Cali",
        departamento: "Valle del Cauca",
        tipo: "Local",
        operacion: "Arriendo",
        precio: 2500000,
        habitaciones: 0,
        banos: 1,
        area: 180,
        garaje: 3,
        estrato: 0,
        descripcion: "Amplio local comercial en zona de alto flujo peatonal en el centro de Cali. Vitrina, bodega, baño y zona de cargue y descargue. Ideal para comercio, restaurante o servicios. Entrega inmediata.",
        fotos: [
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
            "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=900&q=80"
        ]
    },
    {
        id: 4,
        titulo: "Casa Familiar",
        ciudad: "Armenia",
        departamento: "Quindío",
        tipo: "Casa",
        operacion: "Arriendo",
        precio: 1800000,
        habitaciones: 3,
        banos: 2,
        area: 130,
        garaje: 1,
        estrato: 3,
        descripcion: "Acogedora casa familiar en Armenia con amplio patio, zona de lavandería, sala-comedor independiente y tres habitaciones con closets. Barrio tranquilo, cerca del parque principal y colegios.",
        fotos: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
        ]
    },
    {
        id: 5,
        titulo: "Apartamento Centro",
        ciudad: "Armenia",
        departamento: "Quindío",
        tipo: "Apartamento",
        operacion: "Venta",
        precio: 195000000,
        habitaciones: 2,
        banos: 1,
        area: 68,
        garaje: 1,
        estrato: 3,
        descripcion: "Cómodo apartamento en el centro de Armenia, a pasos de centros comerciales, universidades y zonas gastronómicas. Incluye cocina equipada, parqueadero cubierto y vigilancia 24 horas.",
        fotos: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80",
            "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=900&q=80",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80"
        ]
    },
    {
        id: 6,
        titulo: "Finca Recreacional",
        ciudad: "Montenegro",
        departamento: "Quindío",
        tipo: "Casa",
        operacion: "Venta",
        precio: 680000000,
        habitaciones: 5,
        banos: 4,
        area: 8500,
        garaje: 4,
        estrato: 0,
        descripcion: "Magnífica finca recreacional en Montenegro, Quindío, en pleno corazón del Eje Cafetero. Rodeada de guaduales y plantaciones de café. Incluye casa principal, cabaña de huéspedes, piscina y cancha.",
        fotos: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80"
        ]
    }
];


// =========================================================
// UTILIDADES
// =========================================================
function formatearPrecio(precio) {
    return "$" + precio.toLocaleString("es-CO");
}

function labelOperacion(op) {
    return op === "Arriendo" ? "En Arriendo" : "En Venta";
}


// =========================================================
// RENDERIZAR TARJETAS EN EL CONTENEDOR
// =========================================================
function cargarPropiedades(lista) {
    const contenedor = document.getElementById("contenedorPropiedades");
    if (!contenedor) return;

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <p class="sin-resultados">
                No se encontraron propiedades con los filtros seleccionados.<br>
                Intenta con otros criterios de búsqueda.
            </p>`;
        return;
    }

    contenedor.innerHTML = lista.map(p => {
        const badgeClass = p.operacion === "Arriendo" ? "badge-arriendo" : "badge-venta";
        const habsLine = p.habitaciones > 0
            ? `<p>&#x1F6CF; ${p.habitaciones} hab. &nbsp;&middot;&nbsp; &#x1F6BF; ${p.banos} ba&ntilde;os &nbsp;&middot;&nbsp; &#x1F4D0; ${p.area} m&sup2;</p>`
            : `<p>&#x1F4D0; ${p.area} m&sup2;</p>`;

        return `
        <div class="property" onclick="abrirModal(${p.id})" style="cursor:pointer; position:relative;">
            <span class="prop-badge-index ${badgeClass}">${labelOperacion(p.operacion)}</span>
            <img src="${p.fotos[0]}"
                 alt="${p.titulo}"
                 loading="lazy"
                 onerror="this.src='https://picsum.photos/600/400'">
            <div class="contenido">
                <h3>${p.titulo}</h3>
                <p>&#x1F4CD; ${p.ciudad} &mdash; ${p.departamento}</p>
                <p style="color:#2E7D32; font-size:1.1rem; font-weight:800; margin:6px 0;">
                    ${formatearPrecio(p.precio)}
                </p>
                <p>&#x1F3E0; ${p.tipo} &nbsp;|&nbsp; ${p.operacion}</p>
                ${habsLine}
                <button class="boton" onclick="event.stopPropagation(); abrirModal(${p.id})">
                    Ver Detalles
                </button>
            </div>
        </div>`;
    }).join("");
}


// =========================================================
// MODAL — GALERÍA
// =========================================================
let fotoActual = 0;
let fotosModal = [];

function actualizarFoto(indice) {
    fotoActual = indice;
    const img = document.getElementById("modalFotoActiva");
    if (img) img.src = fotosModal[fotoActual];

    document.querySelectorAll(".gal-punto").forEach((p, i) => {
        p.classList.toggle("activo", i === fotoActual);
    });
}

function iniciarGaleria(fotos) {
    fotosModal = fotos;
    fotoActual = 0;

    const puntosEl = document.getElementById("galPuntos");
    if (puntosEl) {
        puntosEl.innerHTML = fotos.map((_, i) =>
            `<span class="gal-punto ${i === 0 ? "activo" : ""}"
                   onclick="actualizarFoto(${i})"></span>`
        ).join("");
    }

    actualizarFoto(0);

    const mostrar = fotos.length > 1 ? "flex" : "none";
    const prev = document.getElementById("galPrev");
    const next = document.getElementById("galNext");
    if (prev) prev.style.display = mostrar;
    if (next) next.style.display = mostrar;
}


// =========================================================
// MODAL — ABRIR
// =========================================================
function abrirModal(id) {
    const p = propiedades.find(x => x.id === id);
    if (!p) return;

    iniciarGaleria(p.fotos);

    // Badge
    const badge = document.getElementById("modalBadge");
    if (badge) {
        badge.textContent = labelOperacion(p.operacion);
        badge.className = "modal-badge " + (p.operacion === "Arriendo" ? "badge-arriendo" : "badge-venta");
    }

    // Textos
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set("modalTitulo",      p.titulo);
    set("modalUbicacion",   `${p.ciudad}, ${p.departamento}`);
    set("modalPrecio",      formatearPrecio(p.precio));
    set("modalDescripcion", p.descripcion);

    // Chips
    const chips = [];
    if (p.habitaciones > 0) chips.push(`<span class="chip"><i class="fas fa-bed"></i> ${p.habitaciones} Habitaciones</span>`);
    if (p.banos > 0)        chips.push(`<span class="chip"><i class="fas fa-bath"></i> ${p.banos} Baños</span>`);
    if (p.area > 0)         chips.push(`<span class="chip"><i class="fas fa-ruler-combined"></i> ${p.area.toLocaleString()} m²</span>`);
    if (p.garaje > 0)       chips.push(`<span class="chip"><i class="fas fa-car"></i> ${p.garaje} Garaje(s)</span>`);
    const chipsEl = document.getElementById("modalChips");
    if (chipsEl) chipsEl.innerHTML = chips.join("");

    // Características
    const caracts = [
        `<div class="caract-item"><span class="caract-label">Tipo</span><span class="caract-valor">${p.tipo}</span></div>`,
        `<div class="caract-item"><span class="caract-label">Operación</span><span class="caract-valor">${p.operacion}</span></div>`,
        `<div class="caract-item"><span class="caract-label">Ciudad</span><span class="caract-valor">${p.ciudad}</span></div>`,
        `<div class="caract-item"><span class="caract-label">Departamento</span><span class="caract-valor">${p.departamento}</span></div>`,
    ];
    if (p.area > 0)    caracts.push(`<div class="caract-item"><span class="caract-label">Área</span><span class="caract-valor">${p.area.toLocaleString()} m²</span></div>`);
    if (p.estrato > 0) caracts.push(`<div class="caract-item"><span class="caract-label">Estrato</span><span class="caract-valor">${p.estrato}</span></div>`);
    if (p.habitaciones > 0) caracts.push(`<div class="caract-item"><span class="caract-label">Habitaciones</span><span class="caract-valor">${p.habitaciones}</span></div>`);
    if (p.banos > 0)   caracts.push(`<div class="caract-item"><span class="caract-label">Baños</span><span class="caract-valor">${p.banos}</span></div>`);
    if (p.garaje > 0)  caracts.push(`<div class="caract-item"><span class="caract-label">Garaje</span><span class="caract-valor">${p.garaje}</span></div>`);
    const caractEl = document.getElementById("modalCaracteristicas");
    if (caractEl) caractEl.innerHTML = caracts.join("");

    // WhatsApp con mensaje personalizado
    const msg = encodeURIComponent(
        `Hola, estoy interesado en: *${p.titulo}* en ${p.ciudad} por ${formatearPrecio(p.precio)}. ¿Me pueden dar más información?`
    );
    const waBtn = document.getElementById("modalWhatsapp");
    if (waBtn) waBtn.href = `https://wa.me/573186566817?text=${msg}`;

    // Abrir overlay
    const overlay = document.getElementById("modalOverlay");
    if (overlay) overlay.classList.add("abierto");
    document.body.style.overflow = "hidden";
}


// =========================================================
// MODAL — CERRAR
// =========================================================
function cerrarModal() {
    const overlay = document.getElementById("modalOverlay");
    if (overlay) overlay.classList.remove("abierto");
    document.body.style.overflow = "";
}


// =========================================================
// FILTRAR / BUSCAR PROPIEDADES
// =========================================================
function buscarPropiedades() {
    const ciudad       = document.getElementById("ciudad")?.value.trim().toLowerCase()  || "";
    const tipo         = document.getElementById("tipo")?.value                          || "";
    const operacion    = document.getElementById("operacion")?.value                     || "";
    const habitaciones = parseInt(document.getElementById("habitaciones")?.value)        || 0;
    const precioDesde  = parseInt(document.getElementById("precioDesde")?.value)         || 0;
    const precioHasta  = parseInt(document.getElementById("precioHasta")?.value)         || Infinity;

    const resultado = propiedades.filter(p => {
        const cumpleCiudad      = ciudad === ""       || p.ciudad.toLowerCase().includes(ciudad);
        const cumpleTipo        = tipo === ""         || p.tipo === tipo;
        const cumpleOperacion   = operacion === ""    || p.operacion === operacion;
        const cumpleHabitaciones= habitaciones === 0  || p.habitaciones >= habitaciones;
        const cumpleDesde       = p.precio >= precioDesde;
        const cumpleHasta       = p.precio <= precioHasta;
        return cumpleCiudad && cumpleTipo && cumpleOperacion
            && cumpleHabitaciones && cumpleDesde && cumpleHasta;
    });

    cargarPropiedades(resultado);

    // Scroll suave a propiedades
    document.getElementById("propiedades")?.scrollIntoView({ behavior: "smooth" });
}


// =========================================================
// CARRUSEL AUTOMÁTICO DEL HERO
// =========================================================
function iniciarCarruselHero() {
    const slides = document.querySelectorAll(".hero-slides img");
    if (slides.length === 0) return;

    let indice = 0;
    setInterval(() => {
        slides[indice].classList.remove("active");
        indice = (indice + 1) % slides.length;
        slides[indice].classList.add("active");
    }, 4000);
}


// =========================================================
// INICIALIZACIÓN
// =========================================================
document.addEventListener("DOMContentLoaded", () => {

    // 1. Mostrar solo las primeras 3 propiedades como destacadas
    cargarPropiedades(propiedades.slice(0, 3));

    // 2. Carrusel
    iniciarCarruselHero();

    // 3. Botón buscar
    document.getElementById("btnBuscar")?.addEventListener("click", buscarPropiedades);

    // 4. Enter en campos del buscador
    document.querySelectorAll(".grid-form input, .grid-form select").forEach(campo => {
        campo.addEventListener("keydown", e => {
            if (e.key === "Enter") buscarPropiedades();
        });
    });

    // 5. Cerrar modal — botón X
    document.getElementById("modalCerrar")?.addEventListener("click", cerrarModal);

    // 6. Cerrar modal — clic en overlay
    document.getElementById("modalOverlay")?.addEventListener("click", function(e) {
        if (e.target === this) cerrarModal();
    });

    // 7. Cerrar modal — tecla Escape
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") cerrarModal();
    });

    // 8. Flechas galería
    document.getElementById("galPrev")?.addEventListener("click", () => {
        actualizarFoto((fotoActual - 1 + fotosModal.length) % fotosModal.length);
    });

    document.getElementById("galNext")?.addEventListener("click", () => {
        actualizarFoto((fotoActual + 1) % fotosModal.length);
    });

});

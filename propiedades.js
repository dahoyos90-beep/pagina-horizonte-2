/* =========================================================
   PROPIEDADES.JS — Datos, tarjetas, filtros, tabs y modal
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
        descripcion: "Hermosa casa campestre ubicada en las afueras de Armenia, rodeada de naturaleza y con vista panorámica a las montañas del Quindío. Cuenta con amplios espacios, cocina integral, zona BBQ, piscina y jardín privado. Perfecta para familias que buscan tranquilidad sin alejarse de la ciudad.",
        fotos: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80"
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
        descripcion: "Moderno apartamento en conjunto cerrado con excelente ubicación en Pereira. Acabados de lujo, cocina abierta, balcón con vista a la ciudad y acceso a zonas comunes como gimnasio, salón comunal y parque infantil. Ideal para familias o inversión.",
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
        precio: 4500000,
        habitaciones: 0,
        banos: 1,
        area: 180,
        garaje: 3,
        estrato: 0,
        descripcion: "Amplio local comercial en zona de alto flujo peatonal en el centro de Cali. Cuenta con vitrina, bodega, baño, zona de cargue y descargue. Ideal para comercio, restaurante o servicios. Disponible para entrega inmediata.",
        fotos: [
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
            "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=900&q=80"
        ]
    },
    {
        id: 4,
        titulo: "Casa de Lujo",
        ciudad: "Medellín",
        departamento: "Antioquia",
        tipo: "Casa",
        operacion: "Venta",
        precio: 650000000,
        habitaciones: 5,
        banos: 4,
        area: 420,
        garaje: 3,
        estrato: 6,
        descripcion: "Espectacular casa de lujo en uno de los sectores más exclusivos de Medellín. Diseño arquitectónico contemporáneo, materiales importados, piscina climatizada, jacuzzi, home theater, cuarto de servicio y jardín con iluminación paisajística. Una joya inmobiliaria.",
        fotos: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
            "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=900&q=80"
        ]
    },
    {
        id: 5,
        titulo: "Apartamento Centro",
        ciudad: "Armenia",
        departamento: "Quindío",
        tipo: "Apartamento",
        operacion: "Arriendo",
        precio: 1800000,
        habitaciones: 2,
        banos: 1,
        area: 68,
        garaje: 1,
        estrato: 3,
        descripcion: "Cómodo apartamento en el centro de Armenia, a pasos de centros comerciales, universidades y zonas gastronómicas. Incluye cocina equipada, parqueadero cubierto y vigilancia 24 horas. Perfecto para profesionales o parejas.",
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
        tipo: "Finca",
        operacion: "Venta",
        precio: 680000000,
        habitaciones: 5,
        banos: 4,
        area: 8500,
        garaje: 4,
        estrato: 0,
        descripcion: "Magnifica finca recreacional en Montenegro, Quindío, en pleno corazón del Eje Cafetero. Rodeada de guaduales, plantaciones de café y con impresionantes vistas al paisaje cultural cafetero. Incluye casa principal, cabaña de huéspedes, piscina, cancha y zona de camping.",
        fotos: [
            "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=900&q=80",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80"
        ]
    },
    {
        id: 7,
        titulo: "Lote Urbanizable",
        ciudad: "Calarcá",
        departamento: "Quindío",
        tipo: "Lote",
        operacion: "Venta",
        precio: 120000000,
        habitaciones: 0,
        banos: 0,
        area: 600,
        garaje: 0,
        estrato: 3,
        descripcion: "Lote plano en zona de expansión urbana de Calarcá con todos los servicios públicos disponibles en el perímetro. Excelente oportunidad para constructores o inversionistas. Cerca de vías principales, colegio y supermercado.",
        fotos: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80",
            "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=900&q=80"
        ]
    },
    {
        id: 8,
        titulo: "Casa Familiar",
        ciudad: "La Tebaida",
        departamento: "Quindío",
        tipo: "Casa",
        operacion: "Arriendo",
        precio: 1500000,
        habitaciones: 3,
        banos: 2,
        area: 130,
        garaje: 1,
        estrato: 3,
        descripcion: "Acogedora casa familiar en La Tebaida con amplio patio, zona de lavandería, sala-comedor independiente y tres habitaciones con closets. Barrio tranquilo, cerca del parque principal y colegios. Disponible de inmediato.",
        fotos: [
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
        ]
    }
];


// =========================================================
// UTILIDADES
// =========================================================
function formatPrecio(precio) {
    return "$" + precio.toLocaleString("es-CO");
}

function labelOperacion(op) {
    return op === "Arriendo" ? "En Arriendo" : "En Venta";
}


// =========================================================
// CONSTRUIR TARJETA
// =========================================================
function crearTarjeta(p) {
    const badgeClass = p.operacion === "Arriendo" ? "badge-arriendo" : "badge-venta";

    const detalles = [];
    if (p.habitaciones > 0) detalles.push(`<span class="prop-detalle-item"><i class="fas fa-bed"></i> ${p.habitaciones} hab.</span>`);
    if (p.banos > 0)        detalles.push(`<span class="prop-detalle-item"><i class="fas fa-bath"></i> ${p.banos} baños</span>`);
    if (p.area > 0)         detalles.push(`<span class="prop-detalle-item"><i class="fas fa-ruler-combined"></i> ${p.area.toLocaleString()} m²</span>`);
    if (p.garaje > 0)       detalles.push(`<span class="prop-detalle-item"><i class="fas fa-car"></i> ${p.garaje} gar.</span>`);

    return `
    <div class="prop-card" onclick="abrirModal(${p.id})">
        <span class="prop-badge ${badgeClass}">${labelOperacion(p.operacion)}</span>
        <img src="${p.fotos[0]}" alt="${p.titulo}" loading="lazy"
             onerror="this.src='https://picsum.photos/600/400'">
        <div class="prop-card-body">
            <div class="prop-precio">${formatPrecio(p.precio)}</div>
            <div class="prop-titulo">${p.titulo}</div>
            <div class="prop-ubicacion">
                <i class="fas fa-map-marker-alt"></i>
                ${p.ciudad} - ${p.departamento}
            </div>
            <div class="prop-detalles">${detalles.join("")}</div>
            <button class="btn-ver-detalle" onclick="event.stopPropagation(); abrirModal(${p.id})">
                <i class="fas fa-eye"></i> Ver Detalles
            </button>
        </div>
    </div>`;
}


// =========================================================
// RENDERIZAR LISTA
// =========================================================
function renderizar(lista) {
    const grid = document.getElementById("gridPropiedades");
    const contador = document.getElementById("contadorResultados");

    contador.textContent = lista.length;

    if (lista.length === 0) {
        grid.innerHTML = `
            <div class="sin-prop">
                <i class="fas fa-search"></i>
                <p>No se encontraron propiedades con esos criterios.<br>
                   Intenta con otros filtros.</p>
            </div>`;
        return;
    }

    grid.innerHTML = lista.map(crearTarjeta).join("");
}


// =========================================================
// FILTROS
// =========================================================
let tabActual = "todos";

function obtenerFiltros() {
    return {
        ciudad:      document.getElementById("f-ciudad").value.trim().toLowerCase(),
        depto:       document.getElementById("f-departamento").value.trim().toLowerCase(),
        tipo:        document.getElementById("f-tipo").value,
        operacion:   document.getElementById("f-operacion").value,
        habitaciones:parseInt(document.getElementById("f-habitaciones").value) || 0,
        precioMin:   parseInt(document.getElementById("f-precio-min").value)   || 0,
        precioMax:   parseInt(document.getElementById("f-precio-max").value)   || Infinity
    };
}

function aplicarFiltros() {
    const f = obtenerFiltros();

    const resultado = propiedades.filter(p => {
        if (tabActual !== "todos" && p.operacion !== tabActual) return false;
        if (f.ciudad && !p.ciudad.toLowerCase().includes(f.ciudad))           return false;
        if (f.depto  && !p.departamento.toLowerCase().includes(f.depto))      return false;
        if (f.tipo   && p.tipo !== f.tipo)                                     return false;
        if (f.operacion && p.operacion !== f.operacion)                        return false;
        if (f.habitaciones && p.habitaciones < f.habitaciones)                 return false;
        if (p.precio < f.precioMin || p.precio > f.precioMax)                 return false;
        return true;
    });

    renderizar(resultado);
}

function limpiarFiltros() {
    document.getElementById("f-ciudad").value       = "";
    document.getElementById("f-departamento").value = "";
    document.getElementById("f-tipo").value         = "";
    document.getElementById("f-operacion").value    = "";
    document.getElementById("f-habitaciones").value = "";
    document.getElementById("f-precio-min").value   = "";
    document.getElementById("f-precio-max").value   = "";
    aplicarFiltros();
}


// =========================================================
// TABS
// =========================================================
function iniciarTabs() {
    document.querySelectorAll(".tab").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
            btn.classList.add("active");
            tabActual = btn.dataset.tab;
            aplicarFiltros();
        });
    });
}


// =========================================================
// MODAL — GALERÍA
// =========================================================
let fotoActual = 0;
let fotosModal = [];

function actualizarFoto(indice) {
    fotoActual = indice;
    document.getElementById("modalFotoActiva").src = fotosModal[fotoActual];

    // Puntos
    document.querySelectorAll(".gal-punto").forEach((p, i) => {
        p.classList.toggle("activo", i === fotoActual);
    });
}

function iniciarGaleria(fotos) {
    fotosModal = fotos;
    fotoActual = 0;

    // Puntos
    const puntosEl = document.getElementById("galPuntos");
    puntosEl.innerHTML = fotos.map((_, i) =>
        `<span class="gal-punto ${i === 0 ? "activo" : ""}" onclick="actualizarFoto(${i})"></span>`
    ).join("");

    actualizarFoto(0);

    // Mostrar/ocultar flechas si solo hay 1 foto
    const mostrar = fotos.length > 1 ? "flex" : "none";
    document.getElementById("galPrev").style.display = mostrar;
    document.getElementById("galNext").style.display = mostrar;
}


// =========================================================
// MODAL — ABRIR
// =========================================================
function abrirModal(id) {
    const p = propiedades.find(x => x.id === id);
    if (!p) return;

    // Galería
    iniciarGaleria(p.fotos);

    // Badge
    const badge = document.getElementById("modalBadge");
    badge.textContent = labelOperacion(p.operacion);
    badge.className = "modal-badge " + (p.operacion === "Arriendo" ? "badge-arriendo" : "badge-venta");

    // Texto
    document.getElementById("modalTitulo").textContent    = p.titulo;
    document.getElementById("modalUbicacion").textContent = `${p.ciudad}, ${p.departamento}`;
    document.getElementById("modalPrecio").textContent    = formatPrecio(p.precio);
    document.getElementById("modalDescripcion").textContent = p.descripcion;

    // Chips rápidos
    const chips = [];
    if (p.habitaciones > 0) chips.push(`<span class="chip"><i class="fas fa-bed"></i> ${p.habitaciones} Habitaciones</span>`);
    if (p.banos > 0)        chips.push(`<span class="chip"><i class="fas fa-bath"></i> ${p.banos} Baños</span>`);
    if (p.area > 0)         chips.push(`<span class="chip"><i class="fas fa-ruler-combined"></i> ${p.area.toLocaleString()} m²</span>`);
    if (p.garaje > 0)       chips.push(`<span class="chip"><i class="fas fa-car"></i> ${p.garaje} Garaje(s)</span>`);
    document.getElementById("modalChips").innerHTML = chips.join("");

    // Tabla de características
    const caracts = [];
    caracts.push(`<div class="caract-item"><span class="caract-label">Tipo</span><span class="caract-valor">${p.tipo}</span></div>`);
    caracts.push(`<div class="caract-item"><span class="caract-label">Operación</span><span class="caract-valor">${p.operacion}</span></div>`);
    caracts.push(`<div class="caract-item"><span class="caract-label">Ciudad</span><span class="caract-valor">${p.ciudad}</span></div>`);
    caracts.push(`<div class="caract-item"><span class="caract-label">Departamento</span><span class="caract-valor">${p.departamento}</span></div>`);
    if (p.area > 0)     caracts.push(`<div class="caract-item"><span class="caract-label">Área</span><span class="caract-valor">${p.area.toLocaleString()} m²</span></div>`);
    if (p.estrato > 0)  caracts.push(`<div class="caract-item"><span class="caract-label">Estrato</span><span class="caract-valor">${p.estrato}</span></div>`);
    if (p.habitaciones > 0) caracts.push(`<div class="caract-item"><span class="caract-label">Habitaciones</span><span class="caract-valor">${p.habitaciones}</span></div>`);
    if (p.banos > 0)    caracts.push(`<div class="caract-item"><span class="caract-label">Baños</span><span class="caract-valor">${p.banos}</span></div>`);
    if (p.garaje > 0)   caracts.push(`<div class="caract-item"><span class="caract-label">Garaje</span><span class="caract-valor">${p.garaje}</span></div>`);
    document.getElementById("modalCaracteristicas").innerHTML = caracts.join("");

    // WhatsApp con mensaje personalizado
    const msg = encodeURIComponent(`Hola, estoy interesado en la propiedad: *${p.titulo}* en ${p.ciudad} - ${p.departamento} por ${formatPrecio(p.precio)}. ¿Podría darme más información?`);
    document.getElementById("modalWhatsapp").href = `https://wa.me/573186566817?text=${msg}`;

    // Abrir overlay
    document.getElementById("modalOverlay").classList.add("abierto");
    document.body.style.overflow = "hidden";
}


// =========================================================
// MODAL — CERRAR
// =========================================================
function cerrarModal() {
    document.getElementById("modalOverlay").classList.remove("abierto");
    document.body.style.overflow = "";
}


// =========================================================
// INICIALIZACIÓN
// =========================================================
document.addEventListener("DOMContentLoaded", () => {

    // 1. Renderizar todas las propiedades al inicio
    renderizar(propiedades);

    // 2. Iniciar tabs
    iniciarTabs();

    // 3. Botón Buscar
    document.getElementById("btnFiltrar").addEventListener("click", aplicarFiltros);

    // 4. Botón Limpiar
    document.getElementById("btnLimpiar").addEventListener("click", limpiarFiltros);

    // 5. Enter en cualquier campo de filtro
    document.querySelectorAll(".filtros-grid input, .filtros-grid select").forEach(el => {
        el.addEventListener("keydown", e => { if (e.key === "Enter") aplicarFiltros(); });
    });

    // 6. Cerrar modal con botón X
    document.getElementById("modalCerrar").addEventListener("click", cerrarModal);

    // 7. Cerrar modal al hacer clic en el overlay (fuera del box)
    document.getElementById("modalOverlay").addEventListener("click", function(e) {
        if (e.target === this) cerrarModal();
    });

    // 8. Cerrar modal con tecla Escape
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") cerrarModal();
    });

    // 9. Flechas de la galería
    document.getElementById("galPrev").addEventListener("click", () => {
        const nuevo = (fotoActual - 1 + fotosModal.length) % fotosModal.length;
        actualizarFoto(nuevo);
    });

    document.getElementById("galNext").addEventListener("click", () => {
        const nuevo = (fotoActual + 1) % fotosModal.length;
        actualizarFoto(nuevo);
    });
});

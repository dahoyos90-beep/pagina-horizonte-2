/* =========================
   DASHBOARD JS
========================= */

// =========================
// TOGGLE SIDEBAR (MÓVIL)
// =========================

const toggleBtn = document.querySelector("#toggleSidebar");
const sidebar = document.querySelector(".sidebar");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}

// =========================
// DATOS SIMULADOS
// =========================

const data = {
    usuarios: 120,
    propiedades: 45,
    ventas: 18,
    mensajes: 7
};

// =========================
// CARGAR ESTADÍSTICAS
// =========================

function loadStats() {
    const usuariosEl = document.querySelector("#stat-usuarios");
    const propiedadesEl = document.querySelector("#stat-propiedades");
    const ventasEl = document.querySelector("#stat-ventas");
    const mensajesEl = document.querySelector("#stat-mensajes");

    if (usuariosEl) usuariosEl.textContent = data.usuarios;
    if (propiedadesEl) propiedadesEl.textContent = data.propiedades;
    if (ventasEl) ventasEl.textContent = data.ventas;
    if (mensajesEl) mensajesEl.textContent = data.mensajes;
}

// =========================
// BOTONES DE ACCIÓN
// =========================

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-danger")) {
        const confirmDelete = confirm("¿Seguro que deseas eliminar este elemento?");
        if (confirmDelete) {
            e.target.closest("tr")?.remove();
        }
    }
});

// =========================
// SIMULAR NOTIFICACIÓN
// =========================

function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// =========================
// INICIALIZAR DASHBOARD
// =========================

document.addEventListener("DOMContentLoaded", () => {
    loadStats();
    showNotification("Dashboard cargado correctamente");
});
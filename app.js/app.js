// ======================================
// PROPIEDADES DE EJEMPLO
// ======================================

const propiedades = [
{
    id: 1,
    titulo: "Casa Campestre",
    ciudad: "Armenia",
    tipo: "Casa",
    operacion: "Venta",
    precio: 450000000,
    habitaciones: 4,
    banos: 3,
    imagen: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
},

{
    id: 2,
    titulo: "Apartamento Moderno",
    ciudad: "Pereira",
    tipo: "Apartamento",
    operacion: "Venta",
    precio: 280000000,
    habitaciones: 3,
    banos: 2,
    imagen: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
},

{
    id: 3,
    titulo: "Local Comercial",
    ciudad: "Cali",
    tipo: "Local",
    operacion: "Arriendo",
    precio: 2500000,
    habitaciones: 0,
    banos: 1,
    imagen: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
}
];

// ======================================
// MOSTRAR PROPIEDADES
// ======================================

function cargarPropiedades(lista) {

    const contenedor =
    document.getElementById("contenedorPropiedades");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    lista.forEach(propiedad => {

        contenedor.innerHTML += `

        <div class="propiedad">

            <img src="${propiedad.imagen}"
            alt="${propiedad.titulo}">

            <div class="contenido">

                <h3>${propiedad.titulo}</h3>

                <p>
                    📍 ${propiedad.ciudad}
                </p>

                <p>
                    💰 ${propiedad.precio.toLocaleString()}
                </p>

                <p>
                    🏠 ${propiedad.tipo}
                </p>

                <button
                onclick="verDetalle(${propiedad.id})"
                class="boton">

                    Ver Detalles

                </button>

            </div>

        </div>

        `;
    });

}

// ======================================
// DETALLE
// ======================================

function verDetalle(id){

    const propiedad =
    propiedades.find(p => p.id === id);

    if(!propiedad){
        return;
    }

    alert(
`Propiedad: ${propiedad.titulo}

Ciudad: ${propiedad.ciudad}

Precio: ${propiedad.precio.toLocaleString()}

Tipo: ${propiedad.tipo}

Operación: ${propiedad.operacion}`
    );
}

// ======================================
// FILTRO
// ======================================

function buscarPropiedades(){

    const ciudad =
    document.getElementById("ciudad")
    ?.value.toLowerCase() || "";

    const tipo =
    document.getElementById("tipo")
    ?.value || "";

    const operacion =
    document.getElementById("operacion")
    ?.value || "";

    const resultado = propiedades.filter(p => {

        const cumpleCiudad =
        ciudad === "" ||
        p.ciudad.toLowerCase().includes(ciudad);

        const cumpleTipo =
        tipo === "" ||
        tipo === "Tipo de inmueble" ||
        p.tipo === tipo;

        const cumpleOperacion =
        operacion === "" ||
        operacion === "Operación" ||
        p.operacion === operacion;

        return (
            cumpleCiudad &&
            cumpleTipo &&
            cumpleOperacion
        );

    });

    cargarPropiedades(resultado);

}

// ======================================
// EVENTOS
// ======================================

document.addEventListener(
"DOMContentLoaded",
() => {

    cargarPropiedades(propiedades);

    const botonBuscar =
    document.getElementById("btnBuscar");

    if(botonBuscar){

        botonBuscar.addEventListener(
        "click",
        buscarPropiedades
        );

    }

});

//!carrito 

//?productos

// main-plants.js

// Variables para almacenar el carrito y el contador
let carrito = [];
const contadorProductos = document.getElementById('contador-productos');
const carritoProductos = document.querySelector('.conteiner-cart-products');
const totalPagar = document.querySelector('.total-pagar');

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    let total = 0;
    carritoProductos.innerHTML = '';
    
    carrito.forEach((producto, index) => {
        total += producto.precio * producto.cantidad;

        const productoCarrito = document.createElement('div');
        productoCarrito.classList.add('cart-product');
        
        productoCarrito.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-product-carrito">${producto.cantidad}</span>
                <p class="titulo-producto-carrito">${producto.nombre}</p>
                <span class="precio-producto-carrito">${producto.precio}€</span>
                <button class="restar" data-index="${index}">-</button>
                <button class="sumar" data-index="${index}">+</button>
                <button class="eliminar" data-index="${index}">Eliminar</button>
            </div>
        `;
        
        carritoProductos.appendChild(productoCarrito);
    });
    
    contadorProductos.textContent = carrito.length;
    totalPagar.textContent = total.toFixed(2) + '€';
}

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    const productoExistente = carrito.find(producto => producto.nombre === nombre);
    
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    
    actualizarCarrito();
}

// Función para manejar los eventos de los botones del carrito
function manejarEventosCarrito(event) {
    if (event.target.classList.contains('restar')) {
        const index = event.target.dataset.index;
        if (carrito[index].cantidad > 1) {
            carrito[index].cantidad--;
        } else {
            carrito.splice(index, 1);
        }
        actualizarCarrito();
    } else if (event.target.classList.contains('sumar')) {
        const index = event.target.dataset.index;
        carrito[index].cantidad++;
        actualizarCarrito();
    } else if (event.target.classList.contains('eliminar')) {
        const index = event.target.dataset.index;
        carrito.splice(index, 1);
        actualizarCarrito();
    }
}

// Función para cargar los productos desde el servidor
function cargarProductos() {
    return fetch('URL_DE_TU_API_O_JSON')
        .then(response => response.json())
        .then(data => {
            data.forEach(producto => {
                agregarAlCarrito(producto.nombre, producto.precio);
            });
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
}

// Agregar event listeners a los botones de agregar al carrito
document.querySelectorAll('.agregar1, .agregar2, .agregar3, .agregar4').forEach(boton => {
    boton.addEventListener('click', (event) => {
        const plantaId = event.target.classList[0].replace('agregar', '');
        const nombre = document.getElementById(`nombre-planta${plantaId}`).textContent;
        const precio = parseFloat(document.getElementById(`precioplanta${plantaId}`).textContent.replace('€', ''));
        
        agregarAlCarrito(nombre, precio);
    });
});

// Agregar event listener a los botones del carrito
document.querySelector('.conteiner-cart-products').addEventListener('click', manejarEventosCarrito);

// Event listener para inicializar la carga de productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
});

const btnCart = document.querySelector('.conteiner-icon');
const conteinerCartProducts = document.querySelector('.conteiner-cart-products');

btnCart.addEventListener('click', ()=> {
 conteinerCartProducts.classList.toggle('hidden-cart');
});

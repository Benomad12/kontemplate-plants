
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



document.addEventListener('DOMContentLoaded', () => {
    const carrito = {
        productos: [],
        total: 0
    };

    // Función para actualizar el total del carrito
    function actualizarTotal() {
        const totalPagarElement = document.getElementById('total-pagar');
        carrito.total = carrito.productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
        totalPagarElement.textContent = `${carrito.total}€`;
    }

    // Función para agregar productos al carrito
    function agregarProducto(nombre, precio) {
        // Buscar el producto en el carrito
        const productoExistente = carrito.productos.find(p => p.nombre === nombre);
        
        // Usar el operador ternario para decidir si se incrementa la cantidad o se agrega un nuevo producto
        productoExistente 
            ? productoExistente.cantidad += 1 
            : carrito.productos.push({ nombre, precio, cantidad: 1 });
        
        // Actualizar el total
        actualizarTotal();
    }
    

    // Función para manejar el clic en los botones de agregar al carrito
    function manejarAgregarAlCarrito(event) {
        const button = event.target;
        const item = button.closest('.item');
        const nombre = item.querySelector('.name-plant').textContent;
        const precio = parseFloat(item.querySelector('.price').textContent.replace('€', ''));
        agregarProducto(nombre, precio);
    }

    // Agregar eventos a los botones de agregar al carrito
    document.querySelectorAll('.agregar1, .agregar2, .agregar3, .agregar4').forEach(button => {
        button.addEventListener('click', manejarAgregarAlCarrito);
    });

    // Función para manejar la suma y resta de cantidades en el carrito
    function manejarCambiosCantidad(event) {
        const button = event.target;
        const cartProduct = button.closest('.cart-product');
        const nombre = cartProduct.querySelector('.titulo-producto-carrito').textContent;
        const producto = carrito.productos.find(p => p.nombre === nombre);
        
        if (button.classList.contains('sumar')) {
            producto.cantidad += 1;
        } else if (button.classList.contains('restar')) {
            producto.cantidad = Math.max(1, producto.cantidad - 1);
        } else if (button.classList.contains('eliminar')) {
            carrito.productos = carrito.productos.filter(p => p.nombre !== nombre);
            cartProduct.remove();
        }
        actualizarTotal();
    }

    // Agregar eventos a los botones de suma, resta y eliminar en el carrito
    document.querySelectorAll('.cart-product button').forEach(button => {
        button.addEventListener('click', manejarCambiosCantidad);
    });

    // Inicialización del carrito
    actualizarTotal();
});



























const btnCart = document.querySelector('.conteiner-icon')

const conteinerCartProducts = document.querySelector('.conteiner-cart-products')

btnCart.addEventListener('click', ()=> {
 conteinerCartProducts.classList.toggle('hidden-cart')
})
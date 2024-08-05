
//!carrito 

//?productos

let PlantaRoja = document.querySelector('#nombre-planta1');
let PrecioPlanta1 = document.querySelector('#precioplanta1')

let PlantaCat = document.querySelector('#nombre-planta2');
let PrecioPlanta2 = document.querySelector('precioplanta2')

let PlantaDog= document.querySelector('#nombre-planta3');
let PrecioPlanta3 = document.querySelector('precioplanta3')

let PlantaMono = document.querySelector('#nombre-planta4');
let PrecioPlanta4 = document.querySelector('precioplanta4')




function products(titulo, precio){
    this.titulo = titulo;
    this.precio = precio;

}

const producto1 = new products (PlantaRoja, PrecioPlanta1 )












const TituloProductoCarrito = document.querySelector('.titulo-producto-carrito')
const AgregarAlCarrito = document.querySelector('.agregar1')
const NombreProductos = document.querySelector('.name-plant')



// AgregarAlCarrito.addEventListener('click', ()=> {
//     AgregarAlCarrito .classList.toggle ('titulo-producto-carrito')
// })





























const btnCart = document.querySelector('.conteiner-icon')

const conteinerCartProducts = document.querySelector('.conteiner-cart-products')

btnCart.addEventListener('click', ()=> {
 conteinerCartProducts.classList.toggle('hidden-cart')
})
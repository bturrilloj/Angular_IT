var data = [{precio: 12}, {precio: 34}, {precio: 19}];

//ES5
//data.forEach(function(elem) {elem.precio++})

// Ejemplo de código en ES6
//data.forEach(elem => elem.precio++)


data.forEach( elem =>{
if(true) {
const iva = 1.16
let precioFinal = elem.precio * iva
console.log(`
Oferta:
El precio final es ${precioFinal}`);
}
// console.log (iva)
});
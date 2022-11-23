//Notaciones

/*; Sirve apra delimitar el final de una linea
sin embargo no es necesario*/
const b = 4;

/* . -> El punto se utiliza en los objetos
    para acceder a los atributos
*/

// [] -> Corchetes cuadrados: listas, arreglos o arrays
const array = [1, 2, 3, 4, 5]
console.log(array[2])

// () -> Parentesis: Se utilizan para las funciones
function suma(a, b) {
    return a + b
}
console.log(suma(10, 20))

// {} -> Llaves: Para objetos, funciones y estructuras de control
const obj = {
    altura: 10,
    ancho: 5,
    color: "Verde"
}
console.log(obj.color)

for (let a = 0; a < 10; a++) {
    console.log(a)
}

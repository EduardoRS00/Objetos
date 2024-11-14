// Agregamos el método `media` al prototipo de Array
Array.prototype.media = function () {
  return (
    this.reduce((acumulador, valorActual) => acumulador + valorActual, 0) /
    this.length
  );
};

// Creamos un array de ejemplo
const numeros = [1, 2, 3, 4, 5];

// Calculamos y mostramos la media
console.log('Media:', numeros.media()); // Debería mostrar: 3

// Ejemplo de array vacío
const vacio = [100, -100];
console.log('Media del array :', vacio.media());

// Ejemplo de array con valores negativos y positivos
const mixto = [-5, 10, 15, -10, 20];
console.log('Media del array :', mixto.media());

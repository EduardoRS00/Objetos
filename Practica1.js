// Definimos el constructor
function Punto(x, y) {
    // Asignamos valores verificando si son números
    this.x = typeof x === 'number' ? x : 0;
    this.y = typeof y === 'number' ? y : 0;
}

// cambiar las coordenadas del punto
Punto.prototype.cambiar = function(nuevaX, nuevaY) {
    this.x = typeof nuevaX === 'number' ? nuevaX : 0;
    this.y = typeof nuevaY === 'number' ? nuevaY : 0;
};

// Devolvemos una copia del objeto actual
Punto.prototype.copia = function() {
    return new Punto(this.x, this.y);
};

// Método para sumar y devolver un nuevo punto sin modificar los originales
Punto.prototype.suma = function(otroPunto) {
    return new Punto(this.x + otroPunto.x, this.y + otroPunto.y);
};

// Crear dos puntos
let p1 = new Punto(3, 4);
let p2 = new Punto(1, 2);

// Mostrar los puntos creados
console.log("Punto 1:", p1); 
console.log("Punto 2:", p2); 

// Cambiar las coordenadas de p1
p1.cambiar(5, 6);
console.log("Punto 1 después de cambiar:", p1); 

// Crear una copia de p1
let copiaP1 = p1.copia();
console.log("Copia de Punto 1:", copiaP1); 

// Sumar p1 y p2
let sumaP1P2 = p1.suma(p2);
console.log("Suma de Punto 1 y Punto 2:", sumaP1P2); 

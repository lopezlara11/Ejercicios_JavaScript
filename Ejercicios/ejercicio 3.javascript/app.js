var valor1 = parseFloat(window.prompt("Ingrese el primer número"));
var valor2 = parseFloat(window.prompt("Ingrese el segundo número"));

// Determinar el mayor
if (valor1 > valor2) {
    alert("El mayor es el valor: " + valor1);
} else if (valor2 > valor1) {
    alert("El mayor es el valor: " + valor2);
} else {
    alert("Los valores son iguales");
}

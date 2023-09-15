var num = parseFloat(prompt("Ingresa un número"));
var total = 1;

for (var i = 1; i <= num; i++) {
    total = total * i;
}

alert("El factorial del número " + num + " es: " + total);

function quienespalindromo(cadena)
{
    let array = cadena.split("");
    let reverse = array.reverse();

    if (cadena === reverse.join("")) {
        return `La palabra ${cadena} es un palíndromo`;
    } else {
        return `La palabra ${cadena} no es un palíndromo`;
    }
}

console.log(quienespalindromo(`aviva`))
console.log(quienespalindromo(`perro`))
console.log(quienespalindromo(`madam`))
console.log(quienespalindromo(`casa`))

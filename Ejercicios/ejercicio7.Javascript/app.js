function sumadeN() {
    let acumulador = 0;
    for (let index = 1; index <= 150; index++) {
        acumulador += index;
    }
    return `La suma del 1 al 150 es ${acumulador}`;
}

console.log(sumadeN());

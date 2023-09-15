let numeroprimo = 11;

let esnumeroprimo = true;

for (let i = 2; i < numeroprimo/2; i++) { 



if(numeroprimo % i === 0) {
    esnumeroprimo = false;
 }  

 }
 
 if (esnumeroprimo) { 
    console.log ("Si es un numero primo", numeroprimo); 
 } 
 
 else { 
    console.log ("No es un numero primo", numeroprimo); 
 } 
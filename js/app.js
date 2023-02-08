// 1. Per ricavare i numeri dispari dall'utente useremo il ciclo while
// 1.1 Creiamo un array vuoto dove salveremo i nostri numeri dispari
let numeriDispari = [];
console.log(numeriDispari);

// // 1.2 Creiamo una variabile numero
let numeroUtente = ''

// 1.3 Creiamo un ciclo - while -
do{
    // 1.3.1 Creiamo una variabile numero
    numeroUtente = parseInt(prompt('Inserisci un numero a piacere'));

    // // 1.3.2 Creiamo una variabile resto
    let resto = numeroUtente % 2;
    // console.log(numeroUtente, resto);
    
    // 1.3.3 Creiamo un - if else -
    if (resto !== 0  || isNaN(numeroUtente)){
        numeriDispari.push(numeroUtente);

        // 2. Stampare a uno a uno i numeri dispari nella console
        console.log(numeroUtente);
    }else {
        console.log('scarto');
    };

} while(numeriDispari.length < 10);

console.log('finalmente usciti dal ciclo while');


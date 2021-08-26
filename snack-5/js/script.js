// 1. Crea un array vuoto.
var numbers = [];
// 2. Chiedi per 6 volte all’utente di inserire un numero.
for (i = 0; i < 6; i++) {
    var userNumber = parseInt(prompt("inserisci un numero"));
    // 2a. Se è dispari inseriscilo nell’array.
    if (userNumber % 2 == 1) {
        numbers.push(userNumber);
    }
}

document.getElementById('dispari').innerHTML = numbers;

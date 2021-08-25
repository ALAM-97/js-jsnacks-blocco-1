//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var numbers = [];

for (i = 0; i < 6; i++) {
    var userNumber = parseInt(prompt("inserisci un numero"));
    if (userNumber % 2 == 1) {
        numbers.push(userNumber);
    } else {

    }
}

document.getElementById('dispari').innerHTML = numbers;

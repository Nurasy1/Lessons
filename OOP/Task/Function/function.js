function showMessage(from, text) {

    from = '*' + from + '*'; // немного украсим "from"

    console.log( from + ': ' + text );
}

let from = "Аня";

showMessage(from, "Привет"); // *Аня*: Привет

// значение "from" осталось прежним, функция изменила значение локальной переменной
console.log( from ); // Аня
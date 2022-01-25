let calculation = document.querySelector("#calculation");
let keyboard = document.querySelector("#keyboard");

let operation = ""

function number(elem) {
        operation += elem.value
        calculation.innerHTML += elem.value
}

function operator(elem) {
        operation += elem.value
        calculation.innerHTML += ' ' + elem.value + ' '
}

function ce(elem) {
    calculation.innerHTML = ""
    operation = ""
}

function equal(elem) {
    operation = operation.replace('x', '*'); // remplace le x par * pour que "eval" puisse faire l'opération
        calculation.innerHTML = eval(operation) // fonction JS native qui remplace un string par un tableau et le traduit en calcul
}



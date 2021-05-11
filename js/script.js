let power = 2;
let number = Number(prompt('Введите число для возведения'));
alert(number ** power);
// -----------------------------------------------
let firstNumber = +prompt('введите первое число');
let secondNumber = +prompt('введите второе число');
alert((firstNumber + secondNumber) / 2);
// -----------------------------------------------
let logNum = +prompt('введите длину квадрата для расчета площади');
alert(logNum * logNum);
// -----------------------------------------------
let num1;
let num2;
let out = document.getElementById('out');

function plus() {
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)

    out.innerHTML = num1 + num2;
}

function minus() {
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)

    out.innerHTML = num1 - num2;
}

function multiplication() {
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)

    out.innerHTML = num1 * num2;
}

function division() {
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)

    out.innerHTML = num1 / num2;
}
// -----------------------------------------------
function LengthConverter(valNum) {
    document.getElementById("outputMiles").innerHTML = valNum * 0.62137;
}
// -----------------------------------------------
let a = +prompt('введите первое число для расчета X');
let b = +prompt('введите второе число для расчета X');
if (a === 0) {
    alert('невозможно');
}
else {
    alert(x = + (-b / a));
}
// -----------------------------------------------
let clock = +prompt('введите кол-во часов');
let minutes = +prompt('введите кол-во минут');
alert('До завтра:' + (24 - clock) + 'часов' + (60 - minutes) + 'минут');
// -----------------------------------------------
let l = +prompt('Введите любое трехзначное число');
alert(((l % 100) - (l % 10)) / 10);
// -----------------------------------------------
let p = Number(prompt('ведите 5 значное'));
let j = p % 10;
alert(j * 10000 + (p - j) / 10);
// -----------------------------------------------
let sum = prompt('введите общую сумму продаж');
if (isNaN(+sum)) {
    alert('Ошибка введенных данных');
}
else {
    alert('Зарплата:' + ((+sum) / 10 + 250) + '$');
}






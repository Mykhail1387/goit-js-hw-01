'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let message;

let userChoice = prompt('Какое количество дроидов вы хотите купить?');
let totalPrice = userChoice * 3000;
let userRemaind = credits - totalPrice;

if (userChoice === null) {
    message = 'Отменено пользователем!';
} else if (credits <= totalPrice) {
    message = 'Недостаточно средств на счету!';
}
else if (credits >= totalPrice) {
    message = `Вы купили ${userChoice} дроидов, на счету осталось ${userRemaind} кредитов.`;
}

console.log(message);
'use strict';

let total = 0;
let input;

do {
	input = Number(prompt('Дорогой посетитель введите несколько чисел, и узнаете сумуму ваших чисел!'));
	total += input;
}
while (input);
alert(`Общая сумма чисел равна [ ${total} ]`);
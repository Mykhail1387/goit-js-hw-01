'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let userInput = prompt('Введите ваш пароль!');

if (userInput === null) {
    message = 'Отменено пользователем!';
} else {

    switch (userInput) {
        case ADMIN_PASSWORD:
            message = 'Добро пожаловать!';
            break;

        default:
            message = 'Доступ запрещен, неверный пароль!'
    }
}

alert(message);
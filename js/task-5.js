'use strict';

const ENTER_COUNTRY = 'Напишите название страны в которую нужно доставить товар';
const CANCEL = 'Отмена пользователем!';
const NOT_DELIVERY = 'В вашей стране доставка не доступна';

let message = prompt(ENTER_COUNTRY);
let price = 0;
let countryName;

if (message === null) {
    message = CANCEL;
} else {
    countryName = message[0].toUpperCase() + message.slice(1).toLowerCase();

    switch (countryName) {
        case 'Китай':
            price = 100;
            break;

        case 'Чили':
            price = 250;
            break;

        case 'Австралия':
            price = 170;
            break;

        case 'Индия':
            price = 80;
            break;

        case 'Ямайка':
            price = 120;
            break;

        default:
            message = NOT_DELIVERY;
    }
}
if (price > 0) {
    message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
}
console.log(message);
alert(message);





//======мій попередній варіант========

// const CHINA = 'КИТАЙ';
// const CHILE = 'ЧИЛИ';
// const AUSTRALIA = 'АВСТРАЛИЯ';
// const INDIA = 'ИНДИЯ';
// const JAMAICA = 'ЯМАЙКА';

// const priceChina = 100;
// const priceChile = 250;
// const priceAustralia = 170;
// const priceIndia = 80;
// const priceJamaica = 120;

// let message;

// let userChoiceCountry = prompt('Выбери страну для доставки!');

// if (userChoiceCountry === null) {
//     message = 'отмена пользователем!';
// } else {

//     switch (userChoiceCountry !== null && userChoiceCountry.toUpperCase()) {
//         case CHINA:
//             message = `Доставка в ${CHINA} будет стоить ${priceChina} кредитов`
//             break;

//         case CHILE:
//             message = `Доставка в ${CHILE} будет стоить ${priceChile} кредитов`
//             break;

//         case AUSTRALIA:
//             message = `Доставка в ${AUSTRALIA} будет стоить ${priceAustralia} кредитов`
//             break;

//         case INDIA:
//             message = `Доставка в ${INDIA} будет стоить ${priceIndia} кредитов`
//             break;

//         case JAMAICA:
//             message = `Доставка в ${JAMAICA} будет стоить ${priceJamaica} кредитов`
//             break;

//         default:
//             message = 'В вашей стране доставка не доступна!';
//     }
// }
// console.log(message);
// alert(message);
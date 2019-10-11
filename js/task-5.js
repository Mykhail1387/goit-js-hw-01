const CHINA = 'КИТАЙ';
const CHILE = 'ЧИЛИ';
const AUSTRALIA = 'АВСТРАЛИЯ';
const INDIA = 'ИНДИЯ';
const JAMAICA = 'ЯМАЙКА';

const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

let message;

let userChoiceCountry = prompt('Выбери страну для доставки!');

if (userChoiceCountry === null) {
    message = 'отмена пользователем!';
} else {

    switch (userChoiceCountry !== null && userChoiceCountry.toUpperCase()) {
        case CHINA:
            message = `Доставка в ${CHINA} будет стоить ${priceChina} кредитов`
            break;

        case CHILE:
            message = `Доставка в ${CHILE} будет стоить ${priceChile} кредитов`
            break;

        case AUSTRALIA:
            message = `Доставка в ${AUSTRALIA} будет стоить ${priceAustralia} кредитов`
            break;

        case INDIA:
            message = `Доставка в ${INDIA} будет стоить ${priceIndia} кредитов`
            break;

        case JAMAICA:
            message = `Доставка в ${JAMAICA} будет стоить ${priceJamaica} кредитов`
            break;

        default:
            message = 'В вашей стране доставка не доступна!';
    }
}
console.log(message);
alert(message);
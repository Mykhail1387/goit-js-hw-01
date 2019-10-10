'use strict';

const total = 100;
const ordered = 50;

const isEnough = ordered >= 1 && ordered <= 100;

if(isEnough) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
    console.log('На складе недостаточно товаров!');
}
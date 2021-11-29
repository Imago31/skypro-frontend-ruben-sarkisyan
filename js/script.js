'use strict';
let itemName = 'Кресло';
let itemPrice = '1000';
let itemResoult = `${itemName}, цена ${itemPrice} рублей`;
alert(itemResoult);

function creatrandomNumber(min,max){
  //  let random_number = Math.random() * (max - min) + min;
  min = Math.round(min);
  max = Math.round(max);
  if( min < max){
    let random_number = Math.floor(Math.random() * (max - min + 1)) + min;
    // eslint-disable-next-line
    console.log(random_number);
  }
  else{
         // eslint-disable-next-line
    console.log('Минимальное значение не должно быть больше или равняться максимуму');
  }
}
creatrandomNumber(10,70);

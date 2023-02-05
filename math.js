// math power

const result = Math.pow(3,4)
console.log(result);
// math abstract
const num1 = 25;
const num2 = 45;

const ageGap = Math.abs (num1 - num2);
console.log(ageGap);
if (ageGap < 5 ) {
    console.log('you guys can be friends');
} else{
    console.log('you guys cannot be friends');
}
// math round

const number = 2.5236;
const fullNumber  = Math.round(number)
console.log(fullNumber);

// math ceil

const num = 3.901
ceiling = Math.ceil(num)
console.log(ceiling);

// math floor
flooring = Math.floor(num)
console.log(flooring);

// random

const randomNumber = 12;
const random = Math.round(Math.random()*20)
console.log(random);
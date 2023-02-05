const userName = 'blackPink';
const userInput = 'blaCkPinK';
console.log(userName.toLocaleUpperCase());
console.log(userInput.toLowerCase());
console.log(userName.toLocaleLowerCase());
if (userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('valid user');
} else {
    console.log('invalid user');
}
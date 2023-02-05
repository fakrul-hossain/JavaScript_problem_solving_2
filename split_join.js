// array split
const lyrics = 'manus ami. amer kno. pakher moto mon';

const parts = lyrics.split(' ')
const sentences = lyrics.split('.')
const chars = lyrics.split('')
console.log(sentences);
console.log(parts);
console.log(chars);


const partial = lyrics.slice(3, 4);
console.log(partial);

const lines = [ 'Manus ami', ' Amer kno', ' Pakher moto mon' ]

const newSOng = lines.join(' >')
console.log(newSOng);
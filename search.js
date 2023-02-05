// array index search

const lyrics = 'manus ami amer kno pakher moto mon';

const searchString = 'MOTO'
const searchStringLowerCase = searchString.toLowerCase();

const lyricsLowerCase = lyrics.toLowerCase();

const doesExist = lyricsLowerCase.includes(searchStringLowerCase);
console.log(doesExist);

// indexof array

console.log(lyrics.indexOf('manus'));
console.log(lyrics.indexOf('hlw'));

if (lyrics.indexOf('non')!== -1) {
    console.log('the string is exits');
} else {
    console.log('cannot find it');
}

// starts with

console.log(lyrics.startsWith('goru'));

// ends with

const fileName = 'file.pdf'
const otherName = 'file.png'

console.log(fileName.endsWith('.pdf'));


const BigNumber = require('bignumber.js');
const y = new BigNumber('23');
const r = new BigNumber('5');
const n = new BigNumber('713');
const U = new BigNumber('94');
const Phi = new BigNumber('660');

function benalohEncrypt(message){
    let asciiCodes = [];
    for (let i = 0; i < message.length; i++) {
        asciiCodes.push(message.charCodeAt(i));
    }

    let E = asciiCodes.map((code) => {
        return y.pow(code).times(U.pow(r)).mod(n);
    });

    console.log(E);
}

benalohEncrypt('My surname is Bakir');
console.log('-----------------------------------')

function benalohDecrypt1(message) {
    let asciiCodes = [];
    for (let i = 0; i < message.length; i++) {
        asciiCodes.push(new  BigNumber(message.charCodeAt(i)));
    }
   let Tm = asciiCodes.map((code) => {
       return y.pow(code.times(Phi).div(r)).mod(n);
   });
    console.log(Tm);
}
benalohDecrypt1('Rasul');
console.log('---------------------')


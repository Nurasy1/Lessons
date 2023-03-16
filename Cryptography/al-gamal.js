const BigNumber = require('bignumber.js');
let Message = "RASUL";
let ascii = [];
let p = new BigNumber('157');
let g = new BigNumber('43');
let x = new BigNumber('100');
let y = g.pow(x).mod(p);
let k = new BigNumber('80');

for (let i = 0; i < Message.length; i++) {
    ascii.push(Message.charCodeAt(i));
}


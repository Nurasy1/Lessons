// // const bigInt = require("big-integer");
// // // Введите значения для p, q, g и m
// // const p = bigInt("19");
// // const q = bigInt("5");
// // const g = bigInt("1594");
// // const m = bigInt("12");
// //
// // // Вычисляем y и x
// // const y = g.modPow(m, p);
// // const x = bigInt.randBetween(1, q);
// //
// // // Вычисляем r, h и s
// // const r = bigInt("7");
// // const h = g.modPow(r, p);
// // const s = m.multiply(y.modPow(r, p)).mod(p);
// //
// // // Декодирование сообщения
// // const decode = s.multiply(h.modPow(q.minus(1).minus(x), p)).mod(p);
// //
// // console.log("Закодированное сообщение: ", s.toString());
// // console.log("Декодированное сообщение: ", decode.toString());
//
// //
// //
// //
// // const bigInt = require("big-integer");
// //
// // // Введите значения для p, q, g
// // const p = bigInt("18");
// // const q = bigInt("7");
// // const g = bigInt("127");
// //
// // // Имя для шифрования
// // const name = "Nurassyl";
// //
// // // Переводим имя в числовой формат (ASCII)
// // let message = "";
// // for (let i = 0; i < name.length; i++) {
// //     message += name.charCodeAt(i);
// // }
// //
// // // Шифруем сообщение
// // const m = bigInt(message);
// // const y = g.modPow(m, p);
// // const x = bigInt.randBetween(1, q);
// // const r = bigInt("6");
// // const h = g.modPow(r, p);
// // const s = m.multiply(y.modPow(r, p)).mod(p);
// //
// // console.log("Закодированное сообщение: ", s.toString());
//
//
// const bigInt = require("big-integer");
//
// // Введите значения для p, q, g
// const p = bigInt("18");
// const q = bigInt("7");
// const g = bigInt("127");
//
// // Имя для шифрования
// const name = "Nurassyl";
//
// // Переводим имя в числовой формат (ASCII)
// let message = "";
// for (let i = 0; i < name.length; i++) {
//     message += name.charCodeAt(i);
// }
//
// // Шифруем сообщение
// const m = bigInt(message);
// const y = g.modPow(m, p);
// const x = bigInt.randBetween(1, q);
// const r = bigInt("6");
// const h = g.modPow(r, p);
// const s = m.multiply(y.modPow(r, p)).mod(p);
//
// console.log("Закодированное сообщение: ", s.toString());
//
//
//
// // Декодирование сообщения
// let decode = s.multiply(h.modPow(q.minus(1).minus(x).plus(q), p)).mod(p);
//
// // Преобразуем число обратно в текст
// let decodedName = "";
// while (decode.gt(0)) {
//     let code = decode.mod(100);
//     decode = decode.divide(100);
//     decodedName = String.fromCharCode(parseInt(code.toString())) + decodedName;
// }
//
// console.log("Декодированное сообщение: ", decodedName);

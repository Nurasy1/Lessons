// Импортируем библиотеку BigInteger
const BigInteger = require('big-integer');

// Функция для генерации ключей Пэйе
function generateKeys(p, q, g) {
    // Вычисляем n
    const n = p.multiply(q);

    // Вычисляем лямбду
    const lambda = p.subtract(1).multiply(q.subtract(1)).divide(p.subtract(1).gcd(q.subtract(1)));

    // Вычисляем g^lambda mod n
    const glambda = g.modPow(lambda, n);

    // Возвращаем открытый и закрытый ключи
    return {
        publicKey: { n, g },
        privateKey: { lambda, glambda }
    };
}

// Функция для шифрования сообщения
function encrypt(message, publicKey, r) {
    // Вычисляем s = r^n mod n
    const s = r.modPow(publicKey.n, publicKey.n);

    // Вычисляем t = (g^message * s^lambda) mod n
    const t = publicKey.g.modPow(message, publicKey.n).multiply(s.modPow(publicKey.lambda, publicKey.n)).mod(publicKey.n);

    // Возвращаем зашифрованное сообщение
    return { t, s };
}

// Функция для расшифровки сообщения
function decrypt(ciphertext, privateKey) {
    // Вычисляем r = s^(-1 * lambda) mod n
    const r = ciphertext.s.modPow(privateKey.lambda.negate(), privateKey.glambda).mod(privateKey.glambda);

    // Вычисляем message = (t * r^lambda) mod n
    const message = ciphertext.t.multiply(r.modPow(privateKey.lambda, privateKey.glambda)).mod(privateKey.glambda);

    // Возвращаем расшифрованное сообщение
    return message;
}

// Пример использования
const p = BigInteger('857');
const q = BigInteger('1049');
const g = BigInteger('3');

const keys = generateKeys(p, q, g);

const message = BigInteger('12345');
const r = BigInteger('17');

const ciphertext = encrypt(message, keys.publicKey, r);
console.log(ciphertext);

const plaintext = decrypt(ciphertext, keys.privateKey);
console.log(plaintext);

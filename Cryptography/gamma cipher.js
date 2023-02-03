const alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П',
    'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', ' ', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
]
const numAlph = {}

for (let i = 0; i < alphabet.length; i++) {
    numAlph[alphabet[i]] = i;
}

function Encode(text, key) {
    let code = ''

    for (let i = 0; i <text.length; i++) {
        if ((numAlph[text[i]] + numAlph[key[i % key.length]] ) % alphabet.length === 0) {
            code += 44;
        } else {
            code +=alphabet[((numAlph[text[i]] + numAlph[key[i % key.length]])% alphabet.length )];
        }
    }
    return code
}

function Decode(text, key) {
    let code = ''

    for (let i = 0; i <text.length; i++) {
        if ((numAlph[text[i]] + numAlph[key[i % key.length]] ) % alphabet.length === 0) {
            code += 44;
        } else {
            code +=alphabet[((numAlph[text[i]] - numAlph[key[i % key.length]]+alphabet.length)% alphabet.length )];
        }
    }
    return code
}
console.log("encoded word: ", Encode("ТЕКСТ", "КЛЮЧ"))
console.log("decoded word: ", Decode("ЭР88Э", "КЛЮЧ"))

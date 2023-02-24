const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function atbash(text) {
    let encodedText = '';
    for (let i = 0; i < text.length; i++) {
        const index = alphabet.indexOf(text[i]);
        if (index >= 0) {
            const newIndex = alphabet.length - index - 1;
            encodedText += alphabet[newIndex];
        } else {
            encodedText += text[i];
        }
    }
    return encodedText;
}

console.log(atbash('MAX BALL KOIP BERING'));
console.log(atbash('SVOOL'));
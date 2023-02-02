let sum = 0;
let isPrime;

for (let i = 2; i < 1000000; i++) {
    isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        sum += i;
    }
}
console.log(sum);

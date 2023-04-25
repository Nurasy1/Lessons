function sumOfPowers(n, p) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += Math.pow(i, p);
    }
    return sum;
}
console.log(sumOfPowers(5, 2)); // 55
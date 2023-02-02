let counter = 0;
for (let i = 1; i <= 99999; i++) {
    let num = i.toString();
    if (num.includes("4") || num.includes("13")) {
        counter++;
    }
}
console.log("Total numbers to be excluded: " + counter);
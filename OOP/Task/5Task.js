let evenCount = 0;
let oddCount = 0;
let input;

for (let i = 0; i < 10; i++) {
    input = prompt("Enter a natural number:");
    if (isNaN(input) || input < 0 || !Number.isInteger(+input)) {
        alert("Invalid input. Please enter a natural number.");
        i--;
        continue;
    }
    if (input % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

if (evenCount > oddCount) {
    console.log("More even numbers were entered.");
} else if (oddCount > evenCount) {
    console.log("More odd numbers were entered.");
} else {
    console.log("An equal number of even and odd numbers were entered.");
}

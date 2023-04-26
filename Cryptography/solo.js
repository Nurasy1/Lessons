const readline = require("readline");
const ac = new AbortController();
const signal = ac.signal;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What is your name? ", { signal }, (answer) => {
    console.log(`Oh, so your name is ${answer}`);
    console.log("Closing the console");
    process.exit();
});

signal.addEventListener(
    "abort",
    () => {
        console.log("The name question timed out!");
    },
    { once: true }
);

setTimeout(() => {
    ac.abort();
    process.exit();
}, 5000); // 5 seconds
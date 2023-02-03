class Person {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }
    move() {
        console.log(`Такой-то ${this.fullName} говорит и ему ${this.age}`);
    }
}

const person = new Person("Erasyl" , 20);
person.move();


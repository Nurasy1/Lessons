class Animal {
    constructor(name) {
        this.name = name
    }
}

const walker = {
    walk() {
        console.log(`${this.name} can walk.`)
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} can swim.`)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} can fly.`)
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, walker, flier)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Leo')

dog.walk()  // Leo can walk.
dog.swim()  // Leo can swim.

const eagle = new Eagle('Vu')

eagle.walk()  // Vu can walk.
eagle.fly()  // Vu can fly.

const whale = new Whale('Bubba')

whale.swim()  // Bubba can swim.
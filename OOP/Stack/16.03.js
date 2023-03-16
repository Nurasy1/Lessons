// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1];
// numbers.push(4);
// numbers.push(6);
// numbers.pop();
// const queue = [...numbers];
//
// const P1 = 0;
// const P2 = queue.length - 1;
//
//
//
//
//
// console.log(`P1 = ${P1}`);
// console.log(`P2 = ${P2}`);
// console.log(queue[0]);
// console.log(queue[queue.length-1]);
class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
        return item + ' inserted'
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    peek() {
        return this.items[this.frontIndex]
    }
    get printQueue() {
        return this.items;
    }
}
const queue = new Queue()
console.log(queue.enqueue(7))
console.log(queue.enqueue(2))
console.log(queue.enqueue(6))
console.log(queue.enqueue(4))
console.log(queue.enqueue(4))
console.log(queue.enqueue(8))
console.log(queue.dequeue())
console.log(queue.peek())
let str = queue.printQueue;
console.log(str)
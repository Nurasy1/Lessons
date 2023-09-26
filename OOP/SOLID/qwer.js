// Реализация класса Stack
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Моделирование узла сортировщика Т-типа
class SortingNode {
    constructor() {
        this.leftStack = new Stack();
        this.rightStack = new Stack();
    }

    separateTrain(train) {
        for (let wagon of train) {
            if (wagon.type === 'Type1') {
                this.leftStack.push(wagon);
            } else if (wagon.type === 'Type2') {
                this.rightStack.push(wagon);
            }
        }
    }

    getLeftTrain() {
        const leftTrain = [];
        while (!this.leftStack.isEmpty()) {
            leftTrain.push(this.leftStack.pop());
        }
        return leftTrain;
    }

    getRightTrain() {
        const rightTrain = [];
        while (!this.rightStack.isEmpty()) {
            rightTrain.push(this.rightStack.pop());
        }
        return rightTrain;
    }
}

// Функция для чтения состава поезда из файла
function readTrainFromFile(fileName) {
    // Здесь должна быть логика чтения состава поезда из файла
    // Возвращаем пример состава поезда для демонстрации
    return [
        { type: 'Type1', wagonId: 1 },
        { type: 'Type2', wagonId: 2 },
        { type: 'Type1', wagonId: 3 },
        { type: 'Type2', wagonId: 4 },
        { type: 'Type1', wagonId: 5 }
    ];
}

// Функция для записи состава поезда в файл
function writeTrainToFile(fileName, train) {
    // Здесь должна быть логика записи состава поезда в файл
    // В данном случае просто выводим состав поезда в консоль для демонстрации
    console.log(`Состав поезда (${train.length} вагонов) записан в файл ${fileName}:`);
    console.log(train);
}

// Функция для ввода состава поезда с клавиатуры
async function readTrainFromKeyboard() {
    const train = [];
    let wagonCount = 0;

    console.log('Введите состав поезда (Type1 или Type2), введите "готово", чтобы завершить:');

    while (true) {
        const input = await getInput('Введите тип вагона:');
        if (input.toLowerCase() === 'готово') {
            break;
        }

        wagonCount++;
        const wagon = { type: input, wagonId: wagonCount };
        train.push(wagon);
    }

    return train;
}

// Функция для получения ввода с клавиатуры
function getInput(prompt) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        readline.question(prompt, (input) => {
            readline.close();
            resolve(input);
        });
    });
}

// Программа моделирования узла сортировщика Т-типа
async function main() {
    const sortingNode = new SortingNode();

    // Чтение состава поезда из файла
    const fileName = 'input.txt';
    const trainFromFile = readTrainFromFile(fileName);
    sortingNode.separateTrain(trainFromFile);
    const leftTrain = sortingNode.getLeftTrain();
    const rightTrain = sortingNode.getRightTrain();

    // Запись состава поезда в файл
    const leftFileName = 'left_train.txt';
    const rightFileName = 'right_train.txt';
    writeTrainToFile(leftFileName, leftTrain);
    writeTrainToFile(rightFileName, rightTrain);

    // Ввод состава поезда с клавиатуры
    const trainFromKeyboard = await readTrainFromKeyboard();
    sortingNode.separateTrain(trainFromKeyboard);
    const newLeftTrain = sortingNode.getLeftTrain();
    const newRightTrain = sortingNode.getRightTrain();

    console.log('Состав поезда из клавиатуры (левое направление):');
    console.log(newLeftTrain);

    console.log('Состав поезда из клавиатуры (правое направление):');
    console.log(newRightTrain);
}

main();

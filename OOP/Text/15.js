/*
Дано целое число K и текстовый файл. Удалить из файла строку с номером K. Если строки с таким номером нет, то
оставить файл без изменений. */

const fs = require('fs');
const readline = require('readline');

// Определяем номер строки, которую нужно изменить
const k = 2; // номер строки для изменения (можно изменить)

// Определяем новое значение для строки с номером k
const newValue = ''; // новое значение строки (можно изменить)

// Определяем путь к файлу
const filePath = 'file.txt'; // путь к файлу (можно изменить)

// Создаем интерфейс для чтения файла построчно
const readInterface = readline.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
    console: false
});

let lineNumber = 0; // номер текущей строки
let outputData = ''; // строка для записи в выходной файл

// Читаем файл построчно и записываем в выходную строку все строки, кроме строки с номером k
readInterface.on('line', function(line) {
    lineNumber++;
    if (lineNumber === k) {
        // заменяем содержимое выбранной строки на новое значение
        outputData += newValue + '\n';
    } else {
        outputData += line + '\n';
    }
});

// Записываем выходную строку в файл после завершения чтения
readInterface.on('close', function() {
    fs.writeFileSync(filePath, outputData);
});

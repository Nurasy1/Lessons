/*Дано целое число K (> 25) и текстовый файл, содержащий текст, выровненный по левому краю.Абзацы
текста отделяются друг от друга одной пустой строкой. Отформатировать текст так, чтобы егоширина не
превосходила K позиций, и выровнять текст по левому краю, сохранив деление на абзацы. Пробелы в
конце строк удалить. Сохранить отформатированный текст в новом текстовом файле.*/

const fs = require('fs');

const K = 80; // Заданный размер строки

const inputFilename = 'file.txt'; // Имя входного файла
const outputFilename = 'file1.txt'; // Имя выходного файла

// Чтение содержимого входного файла
const inputText = fs.readFileSync(inputFilename, 'utf-8');

// Разбиение текста на абзацы
const paragraphs = inputText.split(/\n\s*\n/);

// Обработка каждого абзаца
const outputLines = [];
for (const paragraph of paragraphs) {
    // Разбиение абзаца на слова
    const words = paragraph.trim().split(/\s+/);

    // Создание массива строк с отформатированным текстом
    let currentLine = '';
    const lines = [];
    for (const word of words) {
        const wordLength = word.length;
        const currentLineLength = currentLine.length;

        if (currentLineLength + wordLength + (currentLineLength > 0 ? 1 : 0) <= K) {
            if (currentLineLength > 0) {
                currentLine += ' ';
            }
            currentLine += word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    if (currentLine.length > 0) {
        lines.push(currentLine);
    }

    // Добавление отформатированного текста в выходной массив строк
    outputLines.push(...lines);
    outputLines.push('');
}

// Запись отформатированного текста в выходной файл
const outputText = outputLines.join('\n').trim();
fs.writeFileSync(outputFilename, outputText);

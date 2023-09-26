/*
Дано целое число K и текстовый файл. Удалить из файла строку с номером K. Если строки с таким номером нет, то
оставить файл без изменений. */
const fs = require('fs');
const readline = require('readline');

class FileEditor {
    constructor(filePath) {
        this.filePath = filePath;
        this.outputData = '';
    }

    deleteLine(k) {
        const readInterface = readline.createInterface({
            input: fs.createReadStream(this.filePath),
            output: process.stdout,
            console: false,
        });

        let lineNumber = 0;

        readInterface.on('line', (line) => {
            lineNumber++;
            if (lineNumber !== k) {
                this.outputData += line + '\n';
            }
        });

        readInterface.on('close', () => {
            fs.writeFileSync(this.filePath, this.outputData);
        });
    }
}

const editor = new FileEditor('file.txt');
editor.deleteLine(2); // Удаляем строку с номером 2

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=======================");
console.log("  Консольный калькулятор  ");
console.log("=======================");

rl.question('Введите выражение (например, 2 + 2): ', (input) => {
    try {
        const result = eval(input);
        console.log("-----------------------");
        console.log(`Результат: ${result}`);
        console.log("-----------------------");
    } catch (error) {
        console.log("Ошибка: Некорректное выражение");
    }
    rl.close();
});
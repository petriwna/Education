//2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
module.exports = secondTask;
function secondTask(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}
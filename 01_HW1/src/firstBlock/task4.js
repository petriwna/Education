//4.	Посчитать выражение (макс(а*б*с, а+б+с))+3
module.exports = fourthTask;
function fourthTask(a, b, c) {
    return (Math.max((a * b * c), (a + b + c))) + 3;
}
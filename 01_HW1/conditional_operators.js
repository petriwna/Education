// 1. Если а – четное посчитать а*b, иначе а+b
function firstTask(a, b) {
    let result = 0;

    if (a % 2 !== 0) {
        result = a + b;
    } else {
        result = a * b;
    }

    return result;
}

//2.	Определить какой четверти принадлежит точка с координатами (х,у)
function secondTask(x, y) {
    let message;

    if (x > 0 && y > 0) {
        message = 'точка находится в 1-й четверти';
    } else if (x < 0 && y > 0) {
        message = 'точка находится во 2-й четверти';
    } else if (x < 0 && y < 0) {
        message = 'точка находится в 3-й четверти';
    } else if (x === 0 && y === 0) {
        message = 'точка находится в начале координат';
    } else {
        message = 'точка находится в 4-й четверти';
    }
    return message;
}

//3.	Найти суммы только положительных из трех чисел
function thirdTask(a, b, c) {
    const num = [a, b, c];
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            sum += num[i];
        }
    }
    return sum;
}

//4.	Посчитать выражение (макс(а*б*с, а+б+с))+3
function fourthTask(a, b, c) {
    return (Math.max((a * b * c), (a + b + c))) + 3;
}

//5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил
function fifthTask(rating) {
    let grade;

    if (rating >= 0 && rating <= 19) {
        grade = 'F';
    } else if (rating >= 20 && rating <= 39) {
        grade = 'E';
    } else if (rating >= 40 && rating <= 59) {
        grade = 'D';
    } else if (rating >= 60 && rating <= 74) {
        grade = 'C';
    } else if (rating >= 75 && rating <= 89) {
        grade = 'B';
    } else {
        grade = 'A';
    }
    return grade;
}
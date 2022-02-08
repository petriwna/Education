//2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.
module.exports = secondTask;

function secondTask(x1, y1, x2, y2) {
    const result = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    return Math.floor(result);
}

console.log(secondTask(-8, 5, 9, 6));
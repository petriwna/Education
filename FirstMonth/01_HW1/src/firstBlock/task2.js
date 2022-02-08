//2.	Определить какой четверти принадлежит точка с координатами (х,у)
module.exports = secondTask;
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
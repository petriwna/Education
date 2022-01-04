module.exports = fifthTask;

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
    } else if (rating >= 90 && rating <= 100) {
        grade = 'A';
    } else {
        return 'It is not a rating!';
    }
    return grade;
}
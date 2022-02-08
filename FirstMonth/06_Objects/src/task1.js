module.exports = getCookingTime;

function getCookingTime(eggsAmount) {
    return Math.ceil(eggsAmount / 5) * 5;
}
module.exports = getSum;

function getSum(str1, str2) {
    const num = Number(str1);
    const num2 = Number(str2);
    let sum = {
        a: num,
        b: num2
    }

    const fn = function (c){return this.a + this.b};
    let newSum =  fn.bind(sum);
    return newSum().toString();
}
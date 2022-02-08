module.exports = {binarySquareRoot, selectionSquareRoot};

function binarySquareRoot(number) {
    let start = 0;
    let end = number;
    let mid;
    let ans;

    while (start <= end) {
        mid = Math.ceil((start + end) / 2);

        if (mid * mid === number){
            ans = mid;
            break;
        }

        if (mid * mid < number) {
            start = mid + 1;
            ans = mid;
        }else {
            end = mid - 1;
        }
    }
    return ans;
}

function selectionSquareRoot(number){
    let result = 0;
    let i = 0

    do {
        i = i + 1;
        if (i*i === number) result = i;
    } while (i < number && result ===0 );

    return result;
}
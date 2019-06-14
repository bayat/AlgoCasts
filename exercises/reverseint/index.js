// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if (n === 0) {
        return 0;
    }
    let arr = [];
    let remainder = Math.abs(n);
    let degree = Math.abs(n).toString().length - 1;
    while (remainder !== 0) {
        arr.push(Math.floor(remainder / Math.pow(10, degree)));
        remainder = remainder % Math.pow(10, degree);
        degree--;
    }
    let result = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        result += Math.pow(10, i) * arr[i];
    }
    if (n > 0) {
        return result;
    } else {
        return 0 - result;
    }
}

module.exports = reverseInt;

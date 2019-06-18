// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let previousNotLetter = true;
    let resultString = '';
    for (let index = 0; index < str.length; index++) {
        const currentIsLetter = alphabet.includes(str[index].toLowerCase());
        if (previousNotLetter && currentIsLetter) {
            resultString += str[index].toUpperCase();
        } else {
            resultString += str[index];
        }
        previousNotLetter = !currentIsLetter;

    }
    return resultString;
}

module.exports = capitalize;

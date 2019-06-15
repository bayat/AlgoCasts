// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const strA = stringA.replace(/[^\w]/g, '').toLowerCase();
    const strB = stringB.replace(/[^\w]/g, '').toLowerCase();

    if (strA.length !== strB.length) {
        return false;
    }

    let charsMapA = {};
    let charsMapB = {};

    strA.split('').forEach(value => charsMapA[value] = charsMapA[value] + 1 || 1);
    strB.split('').forEach(value => charsMapB[value] = charsMapB[value] + 1 || 1);

    if (Object.keys(charsMapA).length !== Object.keys(charsMapB).length) {
        return false;
    }

    for (let char in charsMapA) {
        if (charsMapA[char] !== charsMapB[char]) {
            return false;
        }
    }

    return true;
}

module.exports = anagrams;

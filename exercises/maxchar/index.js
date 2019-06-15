// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const map = {};
    let mostCommonlyUsed = '';
    let maxCountOfOccurences = 0;
    str.split('').forEach(ch => {
        map[ch] = map[ch] ? map[ch] + 1 : 1;
        if (map[ch] > maxCountOfOccurences) {
            maxCountOfOccurences = map[ch];
            mostCommonlyUsed = ch;
        }
    });
    return mostCommonlyUsed;
}

module.exports = maxChar;

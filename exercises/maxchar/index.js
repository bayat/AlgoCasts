// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    let mostCommonlyUsed = '';
    let maxCountOfOccurences = 0;
    str.split('').forEach(ch => {
        chars[ch] = chars[ch] ? chars[ch] + 1 : 1;
        if (chars[ch] > maxCountOfOccurences) {
            maxCountOfOccurences = chars[ch];
            mostCommonlyUsed = ch;
        }
    });
    return mostCommonlyUsed;
}

module.exports = maxChar;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    let mostCommonlyUsedChar = '';
    let maxOccursOfSameCharacter = 0;
    str.split('').forEach(char => {
        chars[char] = chars[char] + 1 || 1;
        if (chars[char] > maxOccursOfSameCharacter) {
            maxOccursOfSameCharacter = chars[char];
            mostCommonlyUsedChar = char;
        }
    });
    return mostCommonlyUsedChar;
}

module.exports = maxChar;

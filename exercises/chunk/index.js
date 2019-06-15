// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunks = [];
    for (let el of array) {
        const last = chunks[chunks.length - 1];

        if (!last || last.length === size) {
            chunks.push([el]);
        } else {
            last.push(el);
        }
    }
    return chunks;
}

/*
function chunk(array, size) {
    const chunks = [];
    let tempChunk = [];
    for (let i = 0; i < array.length; i++) {
        tempChunk.push(array[i]);
        if ((i + 1) % size === 0 || i === array.length - 1) {
            chunks.push(tempChunk);
            tempChunk = [];
        }
    }
    return chunks;
}
*/

module.exports = chunk;

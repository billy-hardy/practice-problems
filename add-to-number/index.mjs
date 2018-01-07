export function addToNumber(array, num) {
    const differences = new Set();
    for (let curr of array) {
        const hasPair = differences.has(num - curr);
        if (hasPair) {
            return [num - curr, curr];
        }
        differences.add(curr);
    }
    return [];
}

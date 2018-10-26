export function makeDictionaryCount(sentence) {
    return sentence
        .replace(/\./g, ' ')
        .replace(/\;/g, ' ')
        .replace(/:/g, ' ')
        .toLowerCase()
        .split(" ")
        .reduce((acc, curr) => acc.set(curr, (acc.get(curr[0]) || 0) + 1), new Map());
}

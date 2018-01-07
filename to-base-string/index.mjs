export function toBaseString(num, base) {
    let ret = '';
    while (num > 0) {
        ret = num%base + ret;
        num = Math.floor(num/base);
    }
    return ret;
}

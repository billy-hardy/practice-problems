export function toBinaryString(num) {
    let ret = '';
    while (num > 0) {
        ret = num%2 + ret;
        num = Math.floor(num/2);
    }
    return ret;
}

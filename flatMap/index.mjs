Array.prototype.flatMap = function (fn) {
    return [].concat(...this.map(fn));
};

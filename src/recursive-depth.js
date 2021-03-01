const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        let sum = 0;
        if (typeof arr === 'object') {
            for (let elem of arr) {
                sum = this.calculateDepth(elem);
                if (sum > depth) {
                    depth = sum;
                }
            }
            return (depth += 1);
        }
        return depth;
    }
};
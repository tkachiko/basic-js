const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('Invalid argument')

    const result = [];
    result.push('null')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            result.push('null');
            i++;
        } else if (arr[i] === '--discard-prev') {
            result.pop();
        } else if (arr[i] === '--double-next') {
            if (i !== arr.length - 1) result.push(arr[i + 1]);
        } else if (arr[i] === '--double-prev') {
            result.push(result[result.length - 1]);
        } else result.push(arr[i]);
    }
    return result.filter(el => el !== 'null');
};
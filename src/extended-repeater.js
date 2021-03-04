const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = 'empty', additionRepeatTimes = 1, additionSeparator = '|' }) {

    let result = '';

    str = String(str);
    addition = String(addition);
    additionSeparator = String(additionSeparator);
    separator = String(separator);

    if (addition !== 'empty') {
        for (let i = 0; i < repeatTimes; i++) {
            let add = '';
            for (let j = 0; j < additionRepeatTimes; j++) {
                add += addition + additionSeparator
            }
            result += str + add.slice(0, -additionSeparator.length) + separator
        }
    } else {
        for (i = 0; i < repeatTimes; i++) {
            result += str + separator
        }
    }
    return result.slice(0, -separator.length)
};
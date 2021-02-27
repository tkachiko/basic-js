const CustomError = require('../extensions/custom-error');

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let calculations = {
        turns: 0,
        seconds: 0,
    };

    calculations.turns = Math.pow(2, disksNumber) - 1;
    calculations.seconds = Math.floor((3600 / turnsSpeed) * calculations.turns);

    return calculations;
};
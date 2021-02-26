const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    const t = Math.ceil(Math.log2(sampleActivity / MODERN_ACTIVITY) * -HALF_LIFE_PERIOD);
    if (!sampleActivity || typeof sampleActivity !== 'string' || sampleActivity < 0 || sampleActivity > MODERN_ACTIVITY)
        return false;
    if (!parseFloat(sampleActivity)) {
        return false;
    } else return t;
};
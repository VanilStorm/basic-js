const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== "string" || sampleActivity <= 0 || Number.isNaN(+sampleActivity) || sampleActivity > MODERN_ACTIVITY) {
        return false;
    }
  
    let a = 0.693 / HALF_LIFE_PERIOD;

    if (Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / a) < 0) {
        return false;
    } else {
        return false || Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / a);
    }
};

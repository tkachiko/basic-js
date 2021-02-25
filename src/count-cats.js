const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    const cat = '^^';
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++)
            if (matrix[i][j] === cat) {
                counter++;
            }
    }
    return counter;
};
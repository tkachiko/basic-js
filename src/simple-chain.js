const CustomError = require('../extensions/custom-error');

const chainMaker = {
    result: [],
    getLength() {
        this.result.length;
        return this;
    },
    addLink(value = '') {
        this.result.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (!Number.isInteger(position) || !this.result[position - 1]) {
            this.result = [];
            throw new Error('Something went wrong');
        }
        this.result.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.result.reverse();
        return this;
    },
    finishChain() {
        let res = this.result.join('~~');
        this.result = [];
        return res;
    },
};

module.exports = chainMaker;
const CustomError = require('../extensions/custom-error');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("You haven't pass any argument");

    const messageArr = message.toUpperCase().split('');
    const keyArr = key.toUpperCase().split('');
    const result = [];

    if (keyArr.length < message.length) {
      for (let i = 0; keyArr.length < messageArr.length; i++) {
        keyArr.push(keyArr[i]);
      }
    }

    for (let i = 0; i < messageArr.length; i++) {
      if (alphabet.indexOf(messageArr[i]) >= 0) {
        result.push(alphabet[(alphabet.indexOf(messageArr[i]) + alphabet.indexOf(keyArr[i])) % 26]);
      } else {
        result.push(messageArr[i]);
        keyArr.splice(i, 0, ' ');
      }
    }

    return this.reverse ? result.join('') : result.reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error("You haven't pass any argument");

    const messageArr = message.toUpperCase().split('');
    const keyArr = key.toUpperCase().split('');
    const result = [];

    if (keyArr.length < messageArr.length) {
      for (let i = 0; keyArr.length < messageArr.length; i++) {
        keyArr.push(keyArr[i]);
      }
    }

    for (let i = 0; i < messageArr.length; i++) {
      if (alphabet.indexOf(messageArr[i]) >= 0) {
        if (alphabet.indexOf(messageArr[i]) - alphabet.indexOf(keyArr[i]) < 0) {
          result.push(alphabet[(alphabet.indexOf(messageArr[i]) - alphabet.indexOf(keyArr[i]) + 26) % 26]);
        } else {
          result.push(alphabet[(alphabet.indexOf(messageArr[i]) - alphabet.indexOf(keyArr[i])) % 26]);
        }
      } else {
        result.push(messageArr[i]);
        keyArr.splice(i, 0, ' ');
      }
    }
    return this.reverse ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;

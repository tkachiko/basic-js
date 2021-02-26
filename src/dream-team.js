const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let name = [];
    if (!members && typeof members !== 'string') return false
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
            members[i] = members[i].trim().toUpperCase()
            name.push(members[i][0])
            name.sort()
        }
    }
    return name.join('')
};
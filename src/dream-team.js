const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    return members.filter(e => typeof e == 'string').map(a => a.trim().slice(0,1).toUpperCase()).sort().join('');
  };
};

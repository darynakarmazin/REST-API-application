const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSubscriptionUser = require("./updateSubscriptionUser");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  updateSubscriptionUser,
  updateAvatar,
};

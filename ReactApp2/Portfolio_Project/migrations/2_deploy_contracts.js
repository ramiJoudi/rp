// const ConvertLib = artifacts.require("ConvertLib");
// const Validation = artifacts.require("MetaCoin");

// module.exports = function(deployer) {
//   deployer.deploy(ConvertLib);
//   deployer.link(ConvertLib, MetaCoin);
//   deployer.deploy(MetaCoin);
// };

const Validation = artifacts.require("Validation");

module.exports = function (deployer) {
  deployer.deploy(Validation);
};
var ERC20_CRYPTOMILLION_CPMS = artifacts.require("./ERC20_CRYPTOMILLION_CPMS.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC20_CRYPTOMILLION_CPMS);
};
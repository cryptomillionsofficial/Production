var ERC20_CRYPTOMILLION_CPMN = artifacts.require("./ERC20_CRYPTOMILLION_CPMN.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC20_CRYPTOMILLION_CPMN);
}
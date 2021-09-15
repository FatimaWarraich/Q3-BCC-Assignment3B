const myTokenERC20 = artifacts.require("myTokenERC20");

module.exports = function (deployer) {
// uint256 initialSupply,uint8 decimal, string memory tokenName, string memory tokenSymbol

  const initialSupply = 1000000;
  const decimal = 10
  const tokenName = "MyERCToken";
  const tokenSymbol = "MET";


  deployer.deploy(myTokenERC20, initialSupply, decimal, tokenName, tokenSymbol);
};
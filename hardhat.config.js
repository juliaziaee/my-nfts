/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY} = process.env;
module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "rinkeby",
   networks: {
      hardhat: {},
      rinkeby: {
         url: API_URL,
         accounts: [PRIVATE_KEY],
         //accounts: {
             //mnemonic: MNEMONIC,
         gas: 2100000,
         gasPrice: 8000000000,
         saveDeployments: true,
     }
   },
}

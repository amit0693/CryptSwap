require("@nomiclabs/hardhat-waffle");



/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/wFLTb3SvesYcnzi7PURW13jpG13IeP3c',
      accounts: [
        '42686849cee34073eab476fe4a3937de2e5749ebba7bfc85889e40daeb9c6adb',
      ],
    },
  },
};

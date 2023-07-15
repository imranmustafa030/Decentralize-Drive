require("@nomicfoundation/hardhat-toolbox");

// require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

// const SEPOLIA_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
// const SEPOLIA_URL = process.env.SEPOLIA_URL;

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};

// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     sepolia: {
//       url: SEPOLIA_URL,
//       accounts: [SEPOLIA_PRIVATE_KEY],
//     },
//   },
//   paths: {
//     artifacts: "./client/src/artifacts",
//   },
// };

// module.exports = {
//   defaultNetwork: "sepolia",
//   networks: {
//     hardhat: {
//     },
//     sepolia: {
//       url: SEPOLIA_URL,
//       accounts: [SEPOLIA_PRIVATE_KEY]
//     }
//   },
//   solidity: {
//     version: "0.8.19",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./client/src/artifacts"
//   },
//   mocha: {
//     timeout: 40000
//   }
// }
# Decentralize-Drive

Decentralize-Drive is a decentralized file storage application that allows users to save and share data in a decentralized network. It leverages the power of blockchain technology, IPFS (InterPlanetary File System), and smart contracts to provide secure and efficient storage solutions.

## Features

- **Decentralized Storage**: Data is stored in a decentralized network, ensuring high availability and fault tolerance.
- **IPFS Integration**: IPFS is used to save files in a decentralized manner, utilizing Pinata to obtain file hashes.
- **Blockchain Integration**: The application uses a blockchain (deployed using Hardhat) to store the hashes of the files, ensuring data integrity and immutability.
- **File Sharing**: Users can easily share files with others using the Dapp.

## Prerequisites

To run this application locally, you need to have the following dependencies installed:

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/imranmustafa030/Decentralize-Drive.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Decentralize-Drive
   ```

3. Install the required packages:

   ```bash
   npm install
   ```

## Configuration

Before running the application, you need to configure some parameters:

1. Set up a blockchain network using Hardhat and obtain the connection details (RPC URL, private keys, etc.). Update the configuration file (`hardhat.config.js`) accordingly.

2. Obtain API credentials from Pinata and update the configuration file (`config.js`) with your Pinata API key and secret API key.

3. Make sure you have a running IPFS node or use a public IPFS gateway. Update the configuration file (`config.js`) with the appropriate IPFS gateway URL.

## Usage

1. Compile the smart contracts:

   ```bash
   npx hardhat compile
   ```

2. Deploy the smart contracts:

   ```bash
   npx hardhat run scripts/deploy.js
   ```

3. Start the application:

   ```bash
   npm start
   ```

4. Access the application in your web browser at `http://localhost:3000`.

## Contributing

Contributions to Decentralize-Drive are welcome! If you find any issues or have suggestions for improvements, please create an issue or submit a pull request.

## Acknowledgments

Decentralize-Drive builds upon various open-source technologies and libraries. We would like to thank the developers and contributors of the following projects:

- [Hardhat](https://hardhat.org)
- [IPFS](https://ipfs.io)
- [Pinata](https://pinata.cloud)

We appreciate your interest in Decentralize-Drive and look forward to your feedback!

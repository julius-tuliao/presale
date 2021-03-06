require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = process.env.MNEMONIC;

module.exports = {
  	networks: {
		development: {
		    host: "127.0.0.1",
		    port: 7545,
		    network_id: "*", // match any network
		 },
		 testnet: {
			 provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
			network_id: 97,
			confirmations: 10,
			gas: 4600000
		 }
	},
	compilers: {
		solc:{
			version:"0.4.22"
		}
	}
};

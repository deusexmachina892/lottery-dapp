const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');


const provider = new HDWalletProvider(
    'genuine service brown awkward normal major double broken fan dentist admit swamp',
    'https://rinkeby.infura.io/v3/6be4340a861347aba401f7c4cfe4aec5'
);


const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
}

deploy();
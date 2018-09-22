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
    console.log('Contract is deployed by the manager at address', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
                            .deploy({data: '0x' + bytecode})
                            .send({gas: '3000000', from: accounts[0]});

    console.log('Contract deployed to address', result.options.address);

    //Contract deployed at: 0xbC98dbb36863b8Cb1CED084fD0A652B3A704268B
}

deploy();
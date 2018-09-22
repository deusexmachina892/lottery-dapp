const Web3 = require('web3');

let web3

if(typeof window !== 'undefined' && typeof window.web3!== 'undefined'){
    //We are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/6be4340a861347aba401f7c4cfe4aec5'
    );

    web3 = new Web3(provider);
}
console.log(web3);
module.exports = web3;
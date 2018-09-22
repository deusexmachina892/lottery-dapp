webpackHotUpdate(4,{

/***/ "./lottery.js":
/***/ (function(module, exports, __webpack_require__) {

var web3 = __webpack_require__("./web3.js");

var address = '0xbC98dbb36863b8Cb1CED084fD0A652B3A704268B';
var abi = [{
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "participants",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "manager",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "pickWinner",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "enterLottery",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}];
module.exports = new web3.eth.Contract(abi, address);

/***/ })

})
//# sourceMappingURL=4.cfa6ba16fcab3eba07f5.hot-update.js.map
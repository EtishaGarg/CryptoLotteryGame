import web3 from './web3';

const address = '0x37a7262066690518c5f15f69Dab2b0E14e883a34';

const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"enter","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPlayers","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"players","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

// const abi = [
//   {
//     inputs: [],
//     stateMutability: 'nonpayable',
//     type: 'constructor',
//     constant: undefined,
//     payable: undefined,
//     signature: 'constructor'
//   },
//   {
//     inputs: [],
//     name: 'enter',
//     outputs: [],
//     stateMutability: 'payable',
//     type: 'function',
//     constant: undefined,
//     payable: true,
//     signature: '0xe97dcb62'
//   },
//   {
//     inputs: [],
//     name: 'getBalance',
//     outputs: [ [Object] ],
//     stateMutability: 'view',
//     type: 'function',
//     constant: true,
//     payable: undefined,
//     signature: '0x12065fe0'
//   },
//   {
//     inputs: [],
//     name: 'getPlayers',
//     outputs: [ [Object] ],
//     stateMutability: 'view',
//     type: 'function',
//     constant: true,
//     payable: undefined,
//     signature: '0x8b5b9ccc'
//   },
//   {
//     inputs: [],
//     name: 'manager',
//     outputs: [ [Object] ],
//     stateMutability: 'view',
//     type: 'function',
//     constant: true,
//     payable: undefined,
//     signature: '0x481c6a75'
//   },
//   {
//     inputs: [],
//     name: 'pickWinner',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//     constant: undefined,
//     payable: undefined,
//     signature: '0x5d495aea'
//   },
//   {
//     inputs: [ [Object] ],
//     name: 'players',
//     outputs: [ [Object] ],
//     stateMutability: 'view',
//     type: 'function',
//     constant: true,
//     payable: undefined,
//     signature: '0xf71d96cb'
//   }
// ];

export default new web3.eth.Contract(abi,address);
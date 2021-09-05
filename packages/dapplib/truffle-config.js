require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet rate stereo purpose hunt battle equal genuine'; 
let testAccounts = [
"0xc2f9f1bd928611f815c7c7cebf376bc7fce58de28211bd03ab69b9b81552c8e8",
"0x7faf655c8a33abe27a6dc3b07a10ab4512ddd1749849c5e56cd42411cfaf1b68",
"0x361eeac46421eae8639e51dc0b9fa138608aa252febe3985eb76424ab190cdd7",
"0xf7292585f7baf95c5a11776636c910a8b73e9b99a389c64989554d815d8f624b",
"0x3e91545e58b539ac0b3c6af6d7fce6ff05059b981deaafd880d41214003612f2",
"0x4a6f58513d759e8fee57c6b94d772c0ee0669664a00124dbcb0ca51f0cd5433d",
"0x71e6cffe7dcecb99f094966a57f7c8dcd2ce9670f1bce27018387d9113cd93a3",
"0xca69bafb096fc9e5af3c6d2c850a5d8d52e407b8cdbcc0cc34d59871dc4d1bf3",
"0x9a7f0bac9f62c5e7d6e561a14236e559db9d6fdc10a602e95ce147e48b0b255f",
"0x59ef5aa1604ca470ee3a2c477735cd494bd81afe37ac4988c17893e94e47558a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


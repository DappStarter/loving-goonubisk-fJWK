require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index recipe sad universe install battle fresh strategy'; 
let testAccounts = [
"0x35dc5819e1313386064895c7e15b42d355468ffaf7da3b998de09a2bf8215249",
"0x860948417f4bb506c3587c29da6fa3fca09b6e396f0f4f0a3dfcc2c825415908",
"0xddde15497b31427148f6e4e623bf79368c8a9d2bc88d36d2ed9720677fd68b11",
"0xfb21597da5a686332f9db6852de334a547d11966094d69b5ef7809c095b4f6e7",
"0x45ba284b45109bd05d3fa6533b44e3752099d45b291b77b0b277d8be81825bd5",
"0xd8cc1a68e7c8cc79ef62d41dae9d8bc4bdfb23204128845605da2652ded2568f",
"0x69d22d902db726433716b295e6c0106e882046580293cc68730185373d483909",
"0x6731cd41b2135ce2be1394f6c3d8634278d98ff4e75ac584cb4d072e91ba8a52",
"0x8a9d369e758360a6ab1cb136460e76d924107957818999c8f72d8b14cd70e23a",
"0xb0fe916d753ba6d6d6b687d6207eac2826e3bea5ecbbb2fda993c5d5e40c8a36"
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


const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const {
    abi,
    evm
} = require('./compile');

provider = new HDWalletProvider(
    'river congress where famous play cash omit depart crucial local volcano steak',
    'https://rinkeby.infura.io/v3/112c3a4353cc44789be029d2e117d1fa'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(abi)
        .deploy({
            data: evm.bytecode.object,
            arguments: ['Hi there!']
        })
        .send({
            gas: '1000000',
            from: accounts[0]
        });

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};

deploy();

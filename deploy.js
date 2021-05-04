const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "aunt whip antique citizen rib usual glance razor arctic sorry satisfy rhythm",
  "https://rinkeby.infura.io/v3/b06f3a1d4e6a4ddbad999a5d85944e7f"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account: ", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: 1000000, from: accounts[0] });
  console.log('interface: ', interface);
  console.log("Contract deployed to: ", result.options.address);
};
deploy().then(() => {});

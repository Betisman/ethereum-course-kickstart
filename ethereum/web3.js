import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the borwser and metamask is running
  web3 = new Web3(window.web3.currentPovider);
} else {
  // We are on the server OR the user is no running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/GN6SwkKdQHdRUH9fRO3Y'
  );
  web3 = new Web3(provider);
}


export default web3;

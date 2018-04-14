import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8067D0037767954f5f35B7674873547d5Ecb2232' // retrieved when run "node deploy.js"
);

export default instance;

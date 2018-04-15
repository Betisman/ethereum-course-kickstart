import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x2Ff8ff7FEf966f873bb82c70542486643B890bC7'
);
// retrieved when run "node deploy.js"

export default instance;

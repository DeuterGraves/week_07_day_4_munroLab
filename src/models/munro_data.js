const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const MunroData = function (){
  this.data = null;
};

MunroData.prototype.bindEvents = function () {
this.getData()
// subscribe to select view change
    PubSub.subscribe('SelectView:change', (evt)=>{
      const selectedRegion = evt.detail;
      this.publishMunroDetails(selectedRegion);
    });
  };

MunroData.prototype.publishMunroDetails = function (selectedRegion) {
  // get all munros in selected region
  const allMunros = this.data;
  // console.log(selectedMunros);
  const selectedMunros = allMunros.filter(munro => munro.region === selectedRegion);
// publish to list view
  PubSub.publish('MunroData:selected-munros-ready', selectedMunros)
};


MunroData.prototype.getData = function () {
  const url = 'https://munroapi.herokuapp.com/api/munros';
  const request = new RequestHelper(url);
  request.get()
    .then(( data ) => {
     this.data = data
     PubSub.publish('MunroData:all-data-ready', data);
     // console.log(data);
   })
   .catch(( error ) => {
      PubSub.publish('Munros:Error', error);
    });
};


module.exports = MunroData;

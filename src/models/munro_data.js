const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const MunroData = function (){
  this.data = null;
};

MunroData.prototype.bindEvents = function () {
    // PubSub.subscribe('')
};

MunroData.prototype.getData = function () {
  const url = 'https://munroapi.herokuapp.com/api/munros';
  const request = new RequestHelper(url);
  request.get()
    .then(( data ) => {
     this.data = data
     PubSub.publish('MunroData:all-data-ready', data);
   })
   .catch(( error ) => {
      PubSub.publish('MunroData:Error', error);
    });
};


module.exports = MunroData;

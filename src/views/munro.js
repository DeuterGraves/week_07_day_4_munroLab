const PubSub = require('../helpers/pub_sub.js');

// constructor
const MunroView = function(container, munro){
  this.munrosContainer = container;
  this.munro = munro;
};

//  bindevents

 // render
 MunroView.prototype.render = function(){
   // console.log("THIS IS SILLY!!!");
 };

module.exports = MunroView;

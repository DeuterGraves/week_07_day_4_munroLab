const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro.js');

// constructor
const MunroList = function(container){
  this.container = container;
};

// bindEvents 'MunroData:all-data-ready', data);
MunroList.prototype.bindEvents = function () {
  PubSub.subscribe('MunroData:selected-munros-ready', ( event ) => {
    this.munros = event.detail;
    // this sends a list of munros to be separated into individual munros.
    this.prepare();
  });
};


// render
MunroList.prototype.prepare = function () {
  this.container.innerHTML = '';
  this.munros.forEach(( munro ) => {
  const munroView = new MunroView(this.container, munro);
  // printing out the individual munros on the page.
  // console.log(munro);
  munroView.render();
});



};




module.exports = MunroList;

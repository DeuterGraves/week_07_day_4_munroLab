const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('MunroData:all-data-ready', (evt) => {
      const allMunros = evt.detail;
      this.populate(allMunros);
    });
    this.element.addEventListener('change', (event) =>{
      const selectedIndex = event.target.value;
      PubSub.publish('SelectView:change', selectedIndex);
    });
};

SelectView.prototype.populate = function (allMunros) {
const regions = allMunros.map(munro => munro.region);
// console.log(regions);
const uniqueRegions = regions.filter((region, regionIndex, regionsArray) => regionsArray.indexOf(region)==regionIndex);

// console.log(uniqueRegions);
  uniqueRegions.forEach((region, index) => {
    const option = document.createElement('option');
    option.textContent = region;
    option.value = index;
    this.element.appendChild(option);
  });
};

// SelectView.prototype.uniqueRegions = function (allMunros) {
//
// };

module.exports = SelectView;

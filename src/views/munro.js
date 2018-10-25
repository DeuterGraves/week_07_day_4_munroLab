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
   // create the div
   const munroDiv = document.createElement('div');
   munroDiv.classList.add('munro');

   // call header creator - pass header content
   const munroH = this.createMunroHeader();
   munroDiv.appendChild(munroH);

   // call list creator - pass list content
   const detailsList = this.createDetailsList();
   munroDiv.appendChild(detailsList);

   this.munrosContainer.appendChild(munroDiv);
 };

 MunroView.prototype.createMunroHeader = function () {
  const header = document.createElement('h2');
    header.classList.add('munro-name');
    header.textContent = this.munro.name;
  return header;
 };

 MunroView.prototype.createDetailsList = function () {
  const list = document.createElement('ul');
    list.classList.add('detail-list');

    const meaning = document.createElement('li');
    const height = document.createElement('li');
    const lineBreak = document.createElement('hr');

    meaning.textContent = `Meaning: ${this.munro.meaning}`;
    height.textContent = `Height: ${this.munro.height}`;

    list.appendChild(meaning);
    list.appendChild(height);
    list.appendChild(lineBreak);

    return list
 };


 // const name = document.createElement("h2");
 // name.classList.add("munro-name");
 // name.textContent = this.munro.name;
 // this.munrosContainer.appendChild(name);


 // const detailsList =








module.exports = MunroView;

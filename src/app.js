const MunroData = require('./models/munro_data.js');
const MunroList = require('./views/munro_list.js');
const ErrorView = require('./views/error.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  // const munrolist

  const munrosContainer = document.querySelector('#munros');
  const errorView = new ErrorView(munrosContainer);
  errorView.bindEvents();

  // MunroList
  // const munroListArea = document.querySelector("section#munros");
  const munroListView = new MunroList(munrosContainer);
  munroListView.bindEvents();

  // Data In
  const munroData = new MunroData();
  munroData.getData();
  // munroData.bindEvents();
});

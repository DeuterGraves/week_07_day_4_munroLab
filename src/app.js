const MunroData = require('./models/munro_data.js');
const MunroList = require('./views/munro_list.js');
const ErrorView = require('./views/error.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  // const munrolist

  const munrosContainer = document.querySelector('#munros');
  const errorView = new ErrorView(munrosContainer);
  errorView.bindEvents();

  // MunroList
  const munroListView = new MunroList(munrosContainer);
  munroListView.bindEvents();

  //Select View
  const dropdown = document.querySelector('select#munro-regions');
  const regionSelect = new SelectView(dropdown);
  regionSelect.bindEvents();

  // Data In and dropdown populated
  const munroData = new MunroData();
  munroData.bindEvents();
});

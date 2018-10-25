const MunroData = require('./models/munro_data.js');
const ErrorView = require('./views/error.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

 // Data In
  const munroData = new MunroData();
  munroData.bindEvents();

  const munrosContainer = document.querySelector('#munros');
  const errorView = new ErrorView(munrosContainer);
  errorView.bindEvents();

});

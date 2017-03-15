'use strict';

var hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Totals'];

var body = document.getElementsByTagName('body')[0];

var firstAndPike = new cookieStand(23, 65, 6.3,'1st and Pike');
var seaTac = new cookieStand(3, 24, 1.2, 'SeaTac Airport');
var seaCenter = new cookieStand(11, 38, 3.7, 'Seattle Center');
var capHill = new cookieStand(20, 38, 2.3, 'Capitol Hill');
var alki = new cookieStand(2, 16, 4.6, 'Alki');

function cookieStand(minCust, maxCust, avgCookies, name) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.name = name;
  var hourlySales = [];

  this.numCustomers = function() {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  };
  this.cookiesTotal = function() {
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      var cookiesPerHour = Math.floor(avgCookies * this.numCustomers());
      hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
      hourlySales.push(total);
    }
  };

  this.tableBody = function() {
    this.cookiesTotal();
    var table = document.getElementsByTagName('table')[0];
    var tBody = document.createElement('tbody');
    table.appendChild(tBody);
    var tBodyRow = document.createElement('tr');
    tBody.appendChild(tBodyRow);
    var tBodyHead = document.createElement('th');
    tBodyRow.appendChild(tBodyHead);
    tBodyHead.innerText = this.name;
    for (var i = 0; i < hours.length - 1; i++) {
      var tBodyCells = document.createElement('td');
      tBodyRow.appendChild(tBodyCells);
      tBodyCells.innerText = hourlySales[i];
    }
  };
};
function createTable(){
  var tableMain = document.createElement('table');
  body.appendChild(tableMain);
  var tHead = document.createElement('thead');
  tableMain.appendChild(tHead);
  var tableRow = document.createElement('tr');
  tHead.appendChild(tableRow);
  for (var i = 0; i < hours.length; i++) {
    var tHeadCells = document.createElement('th');
    tableRow.appendChild(tHeadCells);
    tHeadCells.innerText = hours[i];
  };
};
createTable();
firstAndPike.tableBody();
seaTac.tableBody();
seaCenter.tableBody();
capHill.tableBody();
alki.tableBody();

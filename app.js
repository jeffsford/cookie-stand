'use strict';
var hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Totals'];

var body = document.getElementsByTagName('body')[0];

var allStores = [];

var firstAndPike = new CookieStand('1st and Pike',23, 65, 6.3);
var seaTac = new CookieStand('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new CookieStand('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStand('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStand('Alki', 2, 16, 4.6);

function CookieStand(name, minCust, maxCust, avgCookies) {
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

  this.generateRow = function() {
    this.cookiesTotal();
    var tableMain = document.getElementById('tableid');
    body.appendChild(tableMain);
    var tBody = document.getElementById('tablebodyid');
    tableMain.appendChild(tBody);
    var tBodyRow = document.createElement('tr');
    tBody.appendChild(tBodyRow);
    var storeName = document.createElement('th');
    tBodyRow.appendChild(storeName);
    storeName.innerText = this.name;
    for (var i = 0; i < hours.length - 1; i++) {
      var tBodyCells = document.createElement('td');
      tBodyRow.appendChild(tBodyCells);
      tBodyCells.innerText = hourlySales[i];
    }
  };
  allStores.push(this);
};
function createTable(){
  var tableMain = document.createElement('table');
  body.appendChild(tableMain);
  tableMain.id = 'tableid';
  var tHead = document.createElement('thead');
  tableMain.appendChild(tHead);
  var tHeadRow = document.createElement('tr');
  tHead.appendChild(tHeadRow);
  for (var i = 0; i < hours.length; i++) {
    var tHeadCells = document.createElement('th');
    tHeadRow.appendChild(tHeadCells);
    tHeadCells.innerText = hours[i];
  };
  var tBody = document.createElement('tbody');
  tableMain.appendChild(tBody);
  tBody.id = 'tablebodyid';
  var tFoot = document.createElement('tfoot');
  tableMain.appendChild(tFoot);
  tFoot.id = 'tablefootid';
};

var storeForm = document.getElementById('fishform');
function submitForm(event) {
  event.preventDefault();

  var form = event.target;
  var newStore = form.newstore.value;
  var minimum = form.mincust.value;
  var maximum = form.maxcust.value;
  var average = form.avgcust.value;

  if (minimum > maximum) {
    alert('The minimum number of customers must be greater than the maximum number');
  } else{
    var addStore = new CookieStand(newStore, Math.floor(minimum), Math.floor(maximum), average);
    addStore.generateRow();
    form.reset();
  }
};
storeForm.addEventListener('submit', submitForm);

createTable();
for (var i = 0; i < allStores.length; i++) {
  allStores[i].generateRow();
};

function eachHour() {
  var tableMain = getElementById('tableid');
  body.appendChild(tableMain);
  var tFoot = document.getElementById('tablefootid');
  tableMain.appendChild(tFoot);
  var tRow = document.createElement('tr');
  tFoot.appendChild(tRow);
  var totalsTH = document.createElement('th');
  totalsTH.innerText = 'Totals';
  tRow.appendChild(totalsTH);
  for (var i = 0; i < hours.length - 2; i++) {
    var sumHours = 0;
    for (var j = 0; j < allStores.length; j++) {
      sumHours += allStores[j].hourlySales[i];
    }
    var footerTH = document.createElement('th');
    footerTH.innerText = sumHours;
    tRow.appendChild(footerTH);
  }
};
eachHour();

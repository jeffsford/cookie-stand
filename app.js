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
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  var hourlySales = [];

  this.numCustomers = function() {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  };
  this.cookiesTotal = function() {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
      var cookiesPerHour = Math.floor(avgCookies * this.numCustomers());
      hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
      hourlySales.push(total);
    }
  };
  this.generateRow = function() {
    this.cookiesTotal();
    var table = document.getElementsByTagName('table')[0];

    var tBody = document.createElement('tbody');
    table.appendChild(tBody);

    var bodyRow = document.createElement('tr');
    tBody.appendChild(bodyRow);

    var storeName = document.createElement('th');
    bodyRow.appendChild(storeName);
    storeName.innerText = this.name;

    for (var i = 0; i < hours.length - 2; i++) {
      var bodyCells = document.createElement('td');
      bodyRow.appendChild(bodyCells);
      bodyCells.innerText = hourlySales[i];
    }
    bodyCells = document.createElement('td');
    bodyRow.appendChild(bodyCells);
    bodyCells.innerText = this.total;
  };
  allStores.push(this);
}

function createTable(){

  var table = document.createElement('table');
  body.appendChild(table);
  table.id = 'tableid';

  var tHead = document.createElement('thead');
  table.appendChild(tHead);

  var headRow = document.createElement('tr');
  tHead.appendChild(headRow);

  for (var i = 0; i < hours.length; i++) {
    var tHeadCells = document.createElement('th');
    headRow.appendChild(tHeadCells);
    tHeadCells.innerText = hours[i];
  }

  var tHeadCells = document.createElement('th');
  headRow.appendChild(tHeadCells);
  theHeadCells.innerText = hours[i];

  var tBody = document.createElement('tbody');
  table.appendChild(tBody);
  tBody.id = 'tablebodyid';

  var tFoot = document.createElement('tfoot');
  table.appendChild(tFoot);
  tFoot.id = 'tablefootid';
}
createTable();

function eachHour() {
  var table = document.getElementById('tableid');

  var tFoot = document.getElementById('tablefootid');
  table.appendChild(tFoot);

  var footRow = document.createElement('tr');
  tFoot.appendChild(footRow);
  footRow.id = 'totalsrow';

  var tFootCells = document.createElement('th');
  tFootCells.innerText = 'Total';
  footRow.appendChild(tFootCells);

  for (var i = 0; i < hours.length - 2; i++) {
    var hrlyTotal = 0;
    for (var j = 0; j < allStores.length; j++) {
      hrlyTotal += allStores[j].hourlySales[i];

    }
    var footData = document.createElement('td');
    footData.innerText = hrlyTotal;
    footRow.appendChild(footData);
  }

  var allTotal = 0;
  for (var i = 0; i < allStores.length; i++) {
    allTotal += allStores[i].total;
  }
  var totalData = document.createElement('td');
  totalData.innerText = allTotal;
  footRow.appendChild(totalData);
};
for (var i = 0; i < allStores.length; i++) {
  allStores[i].generateRow();
}
eachHour();

var storeForm = document.getElementById('fishform');
function submitForm(event) {
  event.preventDefault();

  var form = event.target;
  var newStore = form.newstore.value;
  var minimum = form.mincust.value;
  var maximum = form.maxcust.value;
  var average = form.avgcust.value;

  if (minimum > maximum) {
    alert('The minimum number entered must be smaller than the maximum number.');
  } else {
    var addStore = new CookieStand(newStore, Math.floor(minimum), Math.floor(maximum), average);
    addStore.generateRow();
    var tFoot = document.getElementById('tablefootid');
    var footRow = document.getElementById('totalsrow');
    tFoot.removeChild(footRow);
    eachHour();
  }
  form.reset();
}
storeForm.addEventListener('submit', submitForm);

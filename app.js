'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var body = document.getElementsByTagName('body')[0];

function cookieStand(minCust, maxCust, avgCookies, name) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.name = name;
  this.hourlySales = [];

  this.numCustomers = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.cookiesTotal = function() {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.numCustomers());
      this.hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  };
  this.listItems = function() {
    var listHeading =  document.createElement('h2');
    body.appendChild(listHeading);
    listHeading.innerText = this.name;
    var uList = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var listItem = document.createElement('li');
      listItem.innerText = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      uList.appendChild(listItem);
    }
    body.appendChild(uList);
  };
};
var firstAndPike = new cookieStand(23, 65, 6.3,'1st and Pike');
var seaTac = new cookieStand(3, 24, 1.2, 'SeaTac Airport');
var seaCenter = new cookieStand(11, 38, 3.7, 'Seattle Center');
var capHill = new cookieStand(20, 38, 2.3, 'Capitol Hill');
var alki = new cookieStand(2, 16, 4.6, 'Alki');

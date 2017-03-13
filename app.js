'use strict';

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  calcCookieSales: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  cookiesPerHour: function() {
    var totalSales = [];
    for (i = 0; i < hours.length; i++) {
      totalSales.push((this.avgCookies * this.calcCookieSales()).toFixed(0));
    }
    console.log(totalSales);
  },
};
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

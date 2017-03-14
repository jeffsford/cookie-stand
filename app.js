'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: [],
  calcCookieSales: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  cookiesPerHour: function() {
    for (i = 0; i < hours.length; i++) {
      this.hourlySales.push((this.avgCookies * this.calcCookieSales()).toFixed(0));
    }
  },
  totalSales: function() {
    var dailySales = 0;
    for (i = 0; i < this.hourlySales.length; i++) {
      dailySales += parseInt(this.hourlySales[i]);
      console.log('hourly sale at ' + i + ': ' + this.hourlySales[i] );
      console.log('daily sales at ' + i + ': ' + dailySales);
    }
    return dailySales;
  },
};

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  hourlySales: [],
  calcCookieSales: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  cookiesPerHour: function() {
    for (i = 0; i < hours.length; i++) {
      this.hourlySales.push((this.avgCookies * this.calcCookieSales()).toFixed(0));
    }
  },
  totalSales: function() {
    var dailySales = 0;
    for (i = 0; i < this.hourlySales.length; i++) {
      dailySales += parseInt(this.hourlySales[i]);
      console.log('hourly sale at ' + i + ': ' + this.hourlySales[i] );
      console.log('daily sales at ' + i + ': ' + dailySales);
    }
    return dailySales;
  },
};

var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  hourlySales: [],
  calcCookieSales: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  cookiesPerHour: function() {
    for (i = 0; i < hours.length; i++) {
      this.hourlySales.push((this.avgCookies * this.calcCookieSales()).toFixed(0));
    }
  },
  totalSales: function() {
    var dailySales = 0;
    for (i = 0; i < this.hourlySales.length; i++) {
      dailySales += parseInt(this.hourlySales[i]);
      console.log('hourly sale at ' + i + ': ' + this.hourlySales[i] );
      console.log('daily sales at ' + i + ': ' + dailySales);
    }
    return dailySales;
  },
};

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  hourlySales: [],
  calcCookieSales: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  cookiesPerHour: function() {
    for (i = 0; i < hours.length; i++) {
      this.hourlySales.push((this.avgCookies * this.calcCookieSales()).toFixed(0));
    }
  },
  totalSales: function() {
    var dailySales = 0;
    for (i = 0; i < this.hourlySales.length; i++) {
      dailySales += parseInt(this.hourlySales[i]);
      console.log('hourly sale at ' + i + ': ' + this.hourlySales[i] );
      console.log('daily sales at ' + i + ': ' + dailySales);
    }
    return dailySales;
  },
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  hourlySales: [],
  calcCookieSales: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  cookiesPerHour: function() {
    for (i = 0; i < hours.length; i++) {
      this.hourlySales.push((this.avgCookies * this.calcCookieSales()).toFixed(0));
    }
  },
  totalSales: function() {
    var dailySales = 0;
    for (i = 0; i < this.hourlySales.length; i++) {
      dailySales += parseInt(this.hourlySales[i]);
      console.log('hourly sale at ' + i + ': ' + this.hourlySales[i] );
      console.log('daily sales at ' + i + ': ' + dailySales);
    }
    return dailySales;
  },
};

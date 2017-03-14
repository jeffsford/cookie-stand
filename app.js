'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var body = document.getElementsByTagName('body')[0];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: [],
  name: '1st and Pike',
  numCustomers: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesTotal: function() {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.numCustomers());
      this.hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  listItems: function() {
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
  }
};
firstAndPike.cookiesTotal();
firstAndPike.listItems();

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  hourlySales: [],
  name: 'SeaTac Airport',
  numCustomers: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesTotal: function() {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.numCustomers());
      this.hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  listItems: function() {
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
  }
};
seaTac.cookiesTotal();
seaTac.listItems();

var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  hourlySales: [],
  name: 'Seattle Center',
  numCustomers: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesTotal: function() {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.numCustomers());
      this.hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  listItems: function() {
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
  }
};
seaCenter.cookiesTotal();
seaCenter.listItems();

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  hourlySales: [],
  name: 'Capitol Hill',
  numCustomers: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesTotal: function() {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.numCustomers());
      this.hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  listItems: function() {
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
  }
};
capHill.cookiesTotal();
capHill.listItems();

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  hourlySales: [],
  name: 'Alki',
  numCustomers: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesTotal: function() {
    var total = 0;
    for (var i = 0; i < hours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.numCustomers());
      this.hourlySales.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  listItems: function() {
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
  }
};
alki.cookiesTotal();
alki.listItems();

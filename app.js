'use strict';

const mongoose = require('mongoose');

const City = require('./City.js');

mongoose.connect('mongodb://localhost/citiesApp', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const cities = [
  { name: 'Barcelona',
    population: 4000000,
    area: 101.9
  },
  { name: 'Madrid',
    population: 6000000,
    area: 200.9
  }
];

City.insertMany(cities)
  .then((citiesFromDb) => {
    console.log(citiesFromDb);
    City.findOneAndUpdate({ name: 'Madrid' }, { population: 4 })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });

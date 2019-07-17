'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: String,
  population: Number,
  area: Number,
  neighborhoods: [String],
  hasBeach: Boolean,
  country: String
});

const City = mongoose.model('City', citySchema);

module.exports = City;

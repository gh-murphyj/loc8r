var mongoose = require('mongoose');

var openingTimeSchema = new mongoose.Schema({
  days: {type: String, required: true},
  opening: String,
  closing: String,
  closed: {type: Boolean, required: true}
})


var reviewSchema = new mongoose.Schema({
  author: {type: String, required: false},
  rating: {type: Number, required: true, min: 0, max: 5},
  createdOn: {type: Date, "default": Date.now},
  reviewText: {type: String, required: false}
})

/* note: default doesn't have to be in quotes but as it's a
reserved word it's a good idea to use them */
var locationSchema = new mongoose.Schema({
  name: {type: String, required: true},
  address: String,
  rating: {type: Number, "default": 0, min: 0, max: 5}, 
  facilities: [String],
  coords: {type: [Number], index: '2dsphere'},
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema);

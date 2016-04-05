/* GET 'home' page */
module.exports.homelist = function(req,res) {
  res.render('locations-list', {
    title: 'Loa8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [{
      name: 'Starcups',
      address: '125 Rathmines Road Upper, Rathmines, Dublin 6',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '100m'
    },{
      name: 'Cafe Hero',
      address: '12 Orwell Road, Rathgar, Dublin 6',
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '200m'
    },{
      name: 'Burger Queen',
      address: '5 Terenure Road West, Terenure, Dublin 6W',
      rating: 2,
      facilities: ['Food', 'Premium wifi'],
      distance: '250m'
    }]
  });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req,res) {
  res.render('location-info', { 
    title: 'Starcups',
    pageHeader: { title: 'Starcups' },
    sidebar: {
      context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: {
      name: 'Starcups',
      address: '125 Rathmines Road Upper, Rathmines, Dublin 6',
      rating: 3,
      coords: {lat: 53.3168841, lng: -6.2654047},
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '7:00pm',
        closed: false
      },{
        days: 'Saturday',
        opening: '8:00am',
        closing: '5:00pm',
        closed: false
      },{
        days: 'Sunday',
        closed: true
      }],
      reviews: [{
        author: 'John Murphy',
        rating: 5,
        timestamp: '4 April 2016',
        reviewText: 'What a great place. I can\'t say enough good things about it.'
      },{
        author: 'Chuck Norris',
        rating: 3,
        timestamp: '2 January 2016',
        reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
      }],
      facilities: ['Hot drinks', 'Food', 'Premium wifi']
    }
  });
};

/* GET 'Add review' page */
module.exports.addReview = function(req,res) {
  res.render('location-review-form', {
    title: 'Review Starcups on Loc8r',
    pageHeader: { title: 'Review Starcups' }
    });
};

use loc8r

db.locations.remove({})

db.locations.save({
	name: 'Starcups',
	address: '125 Rathmines Road Upper, Rathmines, Dublin 6',
	rating: 3,
	facilities: ['Hot drinks', 'Food', 'Premium wifi'],	
	coords: [-6.2654047, 53.3168841],
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
	}]
})

db.locations.update({
  name: 'Starcups'
},{
  $push: {
  	reviews: [{
  		author: 'John Murphy',
      id: ObjectId(),
  		rating: 5,
  		timestamp: new Date("Apr 04, 2016"),
  		reviewText: "What a great place. I can't say enough good things about it."
  	},{
  		author: 'Chuck Norris',
      id: ObjectId(),
  		rating: 3,
  		timestamp: new Date("Jan 02, 2016"),
  		reviewText: "It was okay. Coffee wasn't great, but the wifi was fast."
  	}]
  }
})


db.locations.save({
  name: 'Cafe Hero',
  address: '12 Orwell Road, Rathgar, Dublin 6',
  rating: 4,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
})


db.locations.save({
  name: 'Burger Queen',
  address: '5 Terenure Road West, Terenure, Dublin 6W',
  rating: 2,
  facilities: ['Food', 'Premium wifi'],
})
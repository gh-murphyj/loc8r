var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/loc8r';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGOLAB_URI; // don't want to put actual URI in code for security 
}

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
})

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error ' + err);
})

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose discconnected from ' + dbURI);
})

var gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose discconnected through ' + msg);
    callback();
  });
 };

process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});

/* To use SIGINT on some versions of Windows it would be
necessary to add the npm package readline and to add some
code to check for the app termination and emit a SIGINT for 
the following to work. I'm only deploying on Linux though so
dont need it. See page 126 for more info */

process.on('SIGINT', function() {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});

process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
  });
});
 

 require('./locations');
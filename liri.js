// Add code to read and set any environment variables with the dotenv package //


var dotenv = require("dotenv").config(); 

// Add the code required to import the keys.js file and store it in a variable. //

  var keys = require("./keys.js");

  // Access your keys information. // 
  var spotify = new Spotify(keys.spotify);

var fs = require("fs");

// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor, tv show, songs, or name may contain spaces
var term = process.argv.slice(3).join(" ");


// 1.  `node liri.js concert-this <artist/band name here>` //

var liri = function () {
   // divider will be used as a spacer between the tv data we print in log.txt
   var divider = "\n------------------------------------------------------------\n\n";
  // findConcert takes in the name of an artist/ band name and searches the BandsInTown API. //
  this.findConcert = function(show) {
    var URL = 
  }


}
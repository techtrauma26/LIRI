// Add code to read and set any environment variables with the dotenv package //


var dotenv = require("dotenv").config(); 

// Add the code required to import the keys.js file and store it in a variable. //

  var keys = require("./keys.js");

  // Access your keys information. // 
  // var spotify = new Spotify(keys.spotify);

var fs = require("fs");

// Grab search command line argument
// var search = process.argv[2];
// Joining the remaining arguments since an actor, tv show, songs, or name may contain spaces



// 1.  `node liri.js concert-this <artist/band name here>` //

var liri = function () {
  const search = process.argv.slice(3).join(" ");
   // divider will be used as a spacer between the tv data we print in log.txt
   var divider = "\n------------------------------------------------------------\n\n";
  // findConcert takes in the name of an artist/ band name and searches the BandsInTown API. //
  this.findConcert = function(search) {
    var concertURL = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";
console.log(concertURL); 
    axios.get(concertURL).then(function (response){
      var jsonData = response.data;

      var concertData = [
       
          "Name: " + jsonData.venue .name,
          "Location: " + jsonData.venue.city, jsonData.venue.region,
          "Date: " + jsonData.datetime
         
        ].join("\n\n");

        fs.appendFile("log.txt", concertData + divider, function (err) {
          if (err) throw err;
  
        });
    })
console.log (concertData);
console.log (findConcert);
  }
// 2. `node liri.js spotify-this-song '<song name here>'` //
// this.findArtist = function(music) {
//   spotify.search ({type: "track", query: music}, function ())
// }

// // 3. `node liri.js movie-this '<movie name here>'` //
// this.findMovie = function(movie) {
//   var URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
//   // console.log (URL)
//   request (URL, function(response){
//     var jsonDataM = response.data;

//     var movieData = [
     
//         "Name: " + jsonDataM.name,
//         "Location: " + jsonDataM.genres.join(", "),
//         "Date: " + jsonDataM.rating.average
       
//       ].join("\n\n");

//       fs.appendFile("log.txt", movieData + divider, function (err) {
//         if (err) throw err;

//       });
//   })
}


// 4. `node liri.js do-what-it-says` //


var dotenv = require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

var moment = require("moment");
moment().format();
// const request = require ("request");

//-------------------------------------------------------------------------------------------------------------------------------// 

// 1.  `node liri.js concert-this <artist/band name here>` //
function  findConcert (artist){
  const divider = "\n------------------------------------------------------------\n\n";
  const concertURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request(concertURL , function ( err, body) {
      if (err) {
        return console.log (err);
      }else {
        const jsonDatac = JSON.parse(body);
        const concertDate = jsonDatac[0].datetime;
        const momentDate = moment().format("L");
        const concertData = [

        "Name: " + jsonDatac[0].venue.name,
        "Location: " + jsonDatac[0].venue.city, + jsonDatac.venue.region,
        "Date: " + momentDate

      ].join("\n\n");
      console.log (concertData);
      fs.appendFile("log.txt", concertData + divider);
      };
     });
  
    console.log(findConcert);
  }
  // 2. `node liri.js spotify-this-song '<song name here>'` //





  // this.findArtist = function(music) {
  //   spotify.search ({type: "track", query: music}, function ())
  // }

  // 3. `node liri.js movie-this '<movie name here>'` //





  
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



// 4. `node liri.js do-what-it-says` //

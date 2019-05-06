var axios = require("axios");
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

  axios.get(concertURL).then (function ( err, response) {
      if (err) {
        return console.log (err);
      }
        const jsonDatac = response.data;
        const concertDate = jsonDatac[0].datetime;
        const momentDate = moment().format("L");
        const concertData = [

        "Name: " + jsonDatac[0].venue.name,
        "Location: " + jsonDatac[0].venue.city, + jsonDatac[0].venue.region,
        "Date: " + momentDate

      ].join("\n\n");
      console.log (concertData);
      fs.appendFile("log.txt", concertData + divider)
    
     });
  
    // console.log(findConcert);
  }
  // 2. `node liri.js spotify-this-song '<song name here>'` //





  // this.findArtist = function(music) {
  //   spotify.search ({type: "track", query: music}, function ())
  // }

  // 3. `node liri.js movie-this '<movie name here>'` //
function findMovie (movie) {
  const movieURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
  // console.log (movieURL);
  if (!movie) {
    movie = "Mr.Nobody";

    axios.get(movieURL).then (function ( err, response) {
      if (err) {
        return console.log (err);
      }
        var jsonDatam = JSON.parse(response);
        // var movieData = [
console.log (
        "Title: " + jsonDatam.Title,
        "Year: " + jsonDatam.Released,
        "IMBD Rating: " + jsonDatam.imbdRating,
        "Rotten Tomatoes Rating: " + jsonDatam.Ratings[1].Value,
        "Country: " + jsonDatam.Country,
        "Language: " + jsonDatam.Language,
        "Plot: " + jsonDatam.Plot,
        "Actors: " + jsonDatam.Actors,)
    
      // ].join("\n\n");
      console.log (movieData);
      fs.appendFile("log.txt", movieData + divider);
    
     });
  
    // console.log(findConcert);
  }

}

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
const liriCommand = function (search, info){
  switch (search){
    case "concert-this":
    findConcert(info);
    break;
    case "spotify-this-song":
    findArtist(info);
    break;case "movie-this":
    findMovie(info);
    break;case "do-what-it-says":
    findDoWhatItSays();
    break;
  }
};
liriCommand (search,term);

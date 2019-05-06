const axios = require("axios");
const dotenv = require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const fs = require("fs");
const search = process.argv[2];
const term = process.argv.slice(3).join(" ");

const moment = require("moment");
// const request = require ("request");

//-------------------------------------------------------------------------------------------------------------------------------// 

// 1.  `node liri.js concert-this <artist/band name here>` //
function findConcert(artist) {
  const divider = "\n------------------------------------------------------------\n\n";
  const concertURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  axios.get(concertURL).then(function (response) {
    // if (err) {
    //   // return console.log(err);
    // };
    // console.log(concertURL);
    let jsonDatac = response.data[0];
    // console.log(response.data[0])
    let concertDate = jsonDatac.datetime;
    let momentDate = moment(concertDate).format("MM/DD/YYYY");
    let concertData = [
     
      "Name: " + jsonDatac.venue.name,
      "Location: " + jsonDatac.venue.city + ", " + jsonDatac.venue.region,
      "Date: " + momentDate

    ].join("\n\n");
    fs.appendFile("log.txt", concertData + divider, function (err) {
      if (err) throw err;
      else console.log(concertData);
    })


  });

  // console.log(findConcert);
}
// 2. `node liri.js spotify-this-song '<song name here>'` //

function findArtist(song) {
  const divider = "\n------------------------------------------------------------\n\n";
  // const spotify = new Spotify(keys.spotify);
  const spotify = new Spotify ({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });
  if (!song) {
    song = "The Sign Ace of Base";
  };

  spotify.search ({type: "track", query: song}, function (err, data){
    if (err) {
      return console.log("error occured: " + err);
    };
    const jsonDatas = data.tracks.items[0];
    const songData = [
      "Artist: " + jsonDatas.artists[0].name,
      "Song Name: " + jsonDatas.name,
      "Link: " + jsonDatas.preview_url,
      "Album:" + jsonDatas.album.name,
    
    ].join("\n\n");
    fs.appendFile("log.txt", songData + divider, function (err) {
      if (err) throw err;
      else console.log(songData);
    });
    
  });
  
};



// 3. `node liri.js movie-this '<movie name here>'` //
function findMovie(movie) {
  const divider = "\n------------------------------------------------------------\n\n";
  if (!movie) {
    movie = "Mr.Nobody";
  };
  var movieURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
  console.log(movieURL);

  axios.get(movieURL).then(function (response) {

    const jsonDatam = response.data;
    const movieData = [

      "Title: " + jsonDatam.Title,
      "Year: " + jsonDatam.Released.slice(-4),
      "IMDB Rating: " + jsonDatam.imdbRating,
      "Rotten Tomatoes Rating: " + jsonDatam.Ratings[1].Value,
      "Country: " + jsonDatam.Country,
      "Language: " + jsonDatam.Language,
      "Plot: " + jsonDatam.Plot,
      "Actors: " + jsonDatam.Actors,

    ].join("\n\n");
    fs.appendFile("log.txt", movieData + divider, function (err) {
      if (err) throw err;
      else console.log(movieData);

    });


  });

};




// 4. `node liri.js do-what-it-says` //

function findDoWhatItSays () {
  fs.readFile("random.txt", "utf8", function (err, data) {
    if (err) {
      return console.log("error occured: " + err);
    } else {
  
  const random = data.split (",");
  let search = random[0];
  let temp = random[1];
  let temp2 =temp.split ('"');
  let term = temp2[1];
  console.log(term);
  liriCommand(search, term);
    };
});

}


const liriCommand = function (search, term) {
  switch (search) {
    case "concert-this":
      findConcert(term);
      break;
    case "spotify-this-song":
      findArtist(term);
      break;
    case "movie-this":
      findMovie(term);
      break;
    case "do-what-it-says":
      findDoWhatItSays();
      break;
  }
};
liriCommand(search, term);

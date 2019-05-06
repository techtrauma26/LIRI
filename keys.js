console.log("this is loaded");

var dotenv = require("dotenv").config(); 
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

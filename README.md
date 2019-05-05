# LIRI

Language Interpretation and Recognition Interface 
CLI App dd
Command line node app that takes in parameters and gives you bsck data. 

Liri searches Spotify for songs, BAndsin Town for concerts and OMDB for moies. 

How data is retreived?
 By sending requests using the axios package to the Bands in Town, Spotify and OMDB APIs.

 Node packages needed:
    * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * You'll use Axios to grab data from the
      [OMDB API](http://www.omdbapi.com) and the 
      [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)



install package.json

gitignore - tells git not to track files : node_modules, DS_Store & env. 

keys.js -  spotify id & secret 

env -  spotify API keys
 * This file will be used by the `dotenv` package to set what are known as environment variables to the global `process.env` object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github &mdash; keeping our API key information private.

* If someone wanted to clone your app from github and run it themselves, they would need to supply their own `.env` file for it to work.


random.txt -

liri.js - 



# LIRI

![Build Status](https://img.shields.io/badge/LIRI-node-ff69b4.svg?style=for-the-badge&logo=npm)

>Liri is a Language Interpretation and Recognition Interface that searches for songs, concerts, movies or random action on a random file.

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)

## General info

Liri is a command line node app that takes in parameters and generates back data by sending requests using the axios package to the Bands in Town, Spotify and OMDB APIs. By using API calls and parsing through returned JSON objects, we can output them in a specified format.

## Screenshots

![Example screenshot](img/concert.gif)

![Example screenshot](img/spotify.gif)

## Technologies

* [node.js] - evented I/O for the backend
* [JavaScript]
* [NPM] - Package manager
* [Spotify-API] - API library for Spotify
* [BandsinTown-API] - API library for Bands/Artists
* [OMDB-API] - API library for movies

## Setup

Liri requires [Node.js](https://nodejs.org/) v4+ to run.

Install npm package manage and dependencies then input desired commands.

```sh
$ cd liri
$ npm install
$ node liri.js
```

#### Find Concerts

```sh
$ node liri.js concert-this '<artist/band name here>'
```

#### Find Songs

```sh
$ node liri.js spotify-this-song '<song name here>'
```

#### Find Movies

```sh
$ node liri.js concert-this '<movie name here>'
```

#### Do What It Says

```sh
$ node liri.js do-what-it-says
```



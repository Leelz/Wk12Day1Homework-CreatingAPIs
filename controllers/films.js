//since we don't have a database we'll use our front end models at the moment
var express = require('express');

var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var filmRouter = express.Router();
// var filmDetails = [];

//Index
filmRouter.get('/films', function (req, res) {
  res.json(films);
});

//Show
filmRouter.get('/films/:id', function (req, res) {
  res.json({ data: films[req.params.id] });
});

//Create
filmRouter.post('/films', function (req, res) {
  films.push(req.body.film)
  res.json( { data: films });
});

//Update
filmRouter.put('/films/:id', function (req, res) {
  films[req.params.id] = req.body.film;
  res.json({ data: films });
});

//Delete
filmRouter.delete('/films/:id', function (req, res) {
  films.splice(req.params.id, 1);
  res.json({ data: films });
});

module.exports = filmRouter;
var express = require('express');
var router = express.Router();

router.use(require('./films.js'));
// router.use(require('./reviews.js'));

//Root
router.get('/', function (req, res) {
  res.json( { data: 'Welcome!'});
});

router.get('/about', function (req, res) {
  res.json( { data: 'All about us!' });
});

module.exports = router;
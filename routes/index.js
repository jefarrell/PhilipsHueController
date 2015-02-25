var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/table.html', function(req, res, next) {
  res.render('master', { title: 'Master' });
});

router.get('/master.html', function(req, res, next) {
  res.render('table', { title: 'Table' });
});

module.exports = router;

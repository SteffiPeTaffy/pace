/* jshint node: true */
/* jshint esnext: true */
'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('results/list');
});

module.exports = router;

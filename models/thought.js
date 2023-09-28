const express = require('express');

const router = express.Router();

router.get('/thoughts', (req, res) => {
  res.send('Hello from the thought route!');
});

module.exports = router;

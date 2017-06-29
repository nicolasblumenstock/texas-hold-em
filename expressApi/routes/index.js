var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/hand_checker', function(req, res, next) {
	console.log(req.body.hand[])
	res.json({
		tacos: req.body
	});
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* Splits data into separate paragraphs*/
function splitParagraphs(source){
	var splitGraphs = '';

	var paragraphs = source;
	paragraphs = paragraphs.split('\n')

	for (var i = 0; i<paragraphs.length; i++){
		splitGraphs += '<p>' + paragraphs[i] + '</p>';
	}
	return splitGraphs
}

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Rize API profile test'
	});
});


module.exports = router;

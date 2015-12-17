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



/* GET home page. */
router.get('/:number', function(req, res, next) {
	var featuredNumber = 2;
	if (req.params.number){
		featuredNumber = req.params.number;
	}

	var currentNumber = featuredNumber;
	var description = "<p>No description set. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sint mollitia animi labore, tenetur ipsam veniam necessitatibus, est quisquam harum quasi unde architecto blanditiis alias dolor accusamus quod aliquid aliquam?</p><p>Maxime facilis debitis dignissimos quam quia voluptatibus? Voluptatum iure adipisci accusantium ea ullam nemo, alias modi architecto, eveniet dolore fugiat! Iusto aliquid quidem, eius delectus non mollitia facere vitae qui?</p>";
	var summarySet = global.api_data.accounts[currentNumber].rize_summary;

	if (!summarySet){
		summarySet = global.api_data.accounts[currentNumber].linkedin.summary;
	}
	if (summarySet){
		description = splitParagraphs(summarySet);
	}


	res.render('profile', {
		title: 'Rize API profile test',
		description: description,
		currentNumber: currentNumber
	});
});

module.exports = router;

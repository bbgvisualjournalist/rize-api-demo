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



/* GET profile page. */
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


	var categories = global.api_data.accounts[currentNumber].categories;
	var location = global.api_data.accounts[currentNumber].city_name + ", " + global.api_data.accounts[currentNumber].country_name;
	var display_name = global.api_data.accounts[currentNumber].display_name;
	var job_title = global.api_data.accounts[currentNumber].linkedin.job_title + ", " + global.api_data.accounts[currentNumber].linkedin.organization;
	var related_links = false;

	if ( global.api_data.accounts[currentNumber].rize_links[0].url ){
		related_links = true;
	}

	//Social links
	var linkedin,
		twitter,
		facebook,
		twitter_name,
		twitter_profile_image;

	if (global.api_data.accounts[currentNumber].linkedin.url){
		linkedin = '<li class="rize-profile-social-link"><a href="' + global.api_data.accounts[currentNumber].linkedin.url + '"></a></li>';
	}
	if (global.api_data.accounts[currentNumber].twitter.screen_name){
		twitter_link = 'https://twitter.com/' + global.api_data.accounts[currentNumber].twitter.screen_name
		twitter = '<li class="rize-profile-social-link"><a href="https://twitter.com/' + twitter_link +'"></a></li>';
		twitter_name = global.api_data.accounts[currentNumber].twitter.screen_name,
		twitter_profile_image = global.api_data.accounts[currentNumber].twitter.profile_image_url_https;
	}
	if (global.api_data.accounts[currentNumber].facebook.url){
		facebook = '<li class="rize-profile-social-link"><a href="' + global.api_data.accounts[currentNumber].facebook.url + '"></a></li>';
	}



	res.render('profile', {
		title: 'Rize API profile test',
		categories: categories,
		location: location,
		display_name: display_name,
		job_title: job_title,
		related_links: related_links,
		linkedin: linkedin,
		twitter: twitter,
		twitter_link: twitter_link,
		twitter_name: twitter_name,
		twitter_profile_image: twitter_profile_image,
		facebook: facebook,
		description: description,
		currentNumber: currentNumber
	});
});

module.exports = router;

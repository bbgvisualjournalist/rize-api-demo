var config = {}

//The published google spreadsheet with the data.
config.spreadsheet = 'https://docs.google.com/spreadsheets/d/1KTpCMF4_5TBEIyM-g2tLxHcq2XUaAqMc3IaqnKbJEHs/pubhtml'

//Each sheet in the spreadsheet gets its own .JSON file
config.sections = ['site', 'profiles'];

//Change for local v. production
/*config.port = process.env.PORT || '8080';*/

//api url
config.api = 'http://my-api.org/api/';


//Timer for how often to update the JSON data
//20000 = 20 seconds; 60000 = 1 minute ; 300000 = 5 minutes
config.timer = 20000;

//Turn off spreadsheets
config.offlineMode = false;

module.exports = config;

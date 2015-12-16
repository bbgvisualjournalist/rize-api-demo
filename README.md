# rize-api-demo
Simple demo combining Rize api data and Google spreadsheet data.


## Setting it up
1. Clone the repo.
2. `$ npm install`
3. Create a `config.js` based on the `config.sample.js` where you update the published google spreadsheet url and API url.
4. From `/bin` type `node www`
5. Visit localhost:3000

You can change the profile featured by adding a number to the url: `localhost:3000/5`


## How it works
I'm saving copies of the .JSON returned from the Rize API and from the Google Spreadsheet.
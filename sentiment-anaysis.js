require('dotenv');
const algorithmia = require('algorithmia');
const input = process.env.SITE_TO_TEST;
const client = algorithmia(process.env.ALGORITHMIA_KEY);

client
  .algo('algo://web/GetLinks/0.1.5')
  .pipe(input)
  .then(function(response) {
    console.log(response.get());
  });

client
  .algo('algo://util/Url2Text/0.1.4')
  .pipe(input)
  .then(function(response) {
    console.log(response.get());
  });

client
  .algo('algo://nlp/SentimentAnalysis/1.0.4')
  .pipe(input)
  .then(function(response) {
    console.log(response.get());
  });

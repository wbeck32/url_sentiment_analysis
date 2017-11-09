require('dotenv');
const algorithmia = require('algorithmia');
let input = 'https://www.metafilter.com';
const client = algorithmia(process.env.ALGORITHMIA_KEY);

const getLinks = async () => {
  const links = await client.algo('algo://web/GetLinks/0.1.5').pipe(input);
  console.log(1, links.get());
  getText(links.get());
};

const getText = async (links) => {
  const text = await client.algo('algo://util/Url2Text/0.1.4').pipe(input)
  siteText = {"document" : text.get()}
  console.log(2, siteText)
  // return text
}

client
  .algo('algo://nlp/SentimentAnalysis/1.0.4')
  .pipe(input)
  .then(function(response) {
    console.log(3, response.get());
  });
getLinks();

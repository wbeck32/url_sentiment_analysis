require('dotenv');
const algorithmia = require('algorithmia');
let input = 'https://www.metafilter.com';
const client = algorithmia(process.env.ALGORITHMIA_KEY);

const getLinks = async () => {
  const links = await client.algo('algo://web/GetLinks/0.1.5').pipe(input);
  getText(links.get());
};

const getText = async links => {
  const text = await client.algo('algo://util/Url2Text/0.1.4').pipe(input);
  const siteText = { document: text.get() };
  analyzeText(siteText);
};

const analyzeText = async text => {
  const sentScore = await client.algo('algo://nlp/SentimentAnalysis/1.0.4').pipe(text);
  console.log('Sentiment score is:', sentScore.result[0].sentiment, 'on a scale from -1 to 1 with 1 being very positive.');
};

getLinks();


const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient();
  
const test = async () => {
  const outputFile = 'input-components.mp3';
  const readFile = util.promisify(fs.readFile);
  const file = await readFile('./input-components.ssml');
  const request = {
    input: {ssml: file},
    voice: {languageCode: 'en-GB', name: "en-GB-Wavenet-B"},
    audioConfig: {audioEncoding: 'MP3'},
  };
  const [response] = await client.synthesizeSpeech(request);
  const writeFile = util.promisify(fs.writeFile);
  await writeFile(outputFile, response.audioContent, 'binary');
  console.log(`Audio content written to file: ${outputFile}`);
};

test().finally(() => console.log("complete"));
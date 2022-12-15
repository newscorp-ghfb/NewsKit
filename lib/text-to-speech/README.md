# Run the project to generate audio files

Follow these steps to generate a token
https://cloud.google.com/text-to-speech/docs/before-you-begin

Download packages

`yarn`

Then setup auth

`export GOOGLE_APPLICATION_CREDENTIALS="/path/to/credentials.json"`

And run script

`node index.json`



# Some Notes

SSML is the way to go - google docs here https://cloud.google.com/text-to-speech/docs/ssml

This editor is quite good but premium after a few goes - https://www.getwoord.com/ssml-editor

I've tried both AWS and GCP and GCP is far more realistic to my ears at least. 

straight translation of the current content on page doesn't always produce optimal results, 

* abbreviations like: "e.g." are better said as "for example"
* lists should be converted to comma delimitated lists 


Next steps
* Look at scaping the site and convert to SSML automatically
* GCP has a low limit on the length of text 5kb, need to update script to batch and merge MP3 files for longer pages


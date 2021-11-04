const args = process.argv;
let toDownload = args.slice(2);

const request = require('request');
request(toDownload[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  const fs = require('fs');

  fs.writeFile(toDownload[1], body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${toDownload[1]}`);
  });
});

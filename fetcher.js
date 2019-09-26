const request = require('request');
const fs = require('fs');
let argument = process.argv.splice(2)

request(argument[0], (error, response, body) => {
  if (error) {
    console.log(ERROR)
    throw error;
  }
  fs.writeFile(argument[1], body, function (error) {
    if (error) {
      console.log(ERROR)
      throw error;
    }
    console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${argument[1]}`)
  });
});



// console.log('error:', error); // Print the error if one occurred
// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// console.log('body:', body); // Print the HTML for the Google homepage.


// headers: 
// { 'cache-control': 'max-age=604800',
//   'content-type': 'text/html; charset=UTF-8',
//   date: 'Thu, 26 Sep 2019 02:08:00 GMT',
//   etag: '"1541025663+ident"',
//   expires: 'Thu, 03 Oct 2019 02:08:00 GMT',
//   'last-modified': 'Fri, 09 Aug 2013 23:54:35 GMT',
//   server: 'ECS (sec/9739)',
//   vary: 'Accept-Encoding',
//   'x-cache': 'HIT',
//   'content-length': '1270',
//   connection: 'close' },
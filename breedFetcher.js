const request = require("request");

const fetchBreedDescription = function(name, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, (error, response, body) => {
    if (JSON.parse(body)[0] === undefined) {
      error = true;
      callback(error, null);
    } else {
    callback(error, JSON.parse(body)[0].description);
    }
  })
}

// const printInfo = function(text, err) {
//   // if (err) {
//   //   console.log("There was an error");
//   //   return;
//   // }
//   // let output = JSON.parse(text)[0]
//   // if (output === undefined) {
//   //   console.log("Requested breed was not found")
//   // } else {
//   // console.log(output.description);
//   // }
//   // return;
// }

// let input = process.argv.splice(2);
// fetchBreedDescription(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, printInfo);

module.exports = { fetchBreedDescription };
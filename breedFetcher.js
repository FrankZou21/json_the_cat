const request = require("request");

const getInfo = function(webname, callback) {
  request(webname, (error, response, body) => {
    callback(body, error);
  })
}

const printInfo = function(text, err) {
  if (err) {
    console.log("There was an error");
    return;
  }
  let output = JSON.parse(text)[0]
  if (output === undefined) {
    console.log("Requested breed was not found")
  } else {
  console.log(output.description);
  }
  return;
}

let input = process.argv.splice(2);
getInfo(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, printInfo);
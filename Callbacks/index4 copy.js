var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


function getHTML (options, callback) {
  var newData = "";
  https.get(options, function(response){

  response.setEncoding('utf8');

  response.on('data', function(data){
    newData += data;
  });

  response.on("end", function(){
    callback(newData);
    });
  });

}

function printHTML (html) {
  console.log(html);
}


module.exports = {
  getHTML,
  printHTML
}
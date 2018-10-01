var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(requestOptions){

  var newData = "";
  https.get(requestOptions, function(response){

  response.setEncoding('utf8');

  response.on('data', function(data){
    newData += data;
  });

  response.on("end", function(){
    console.log(newData)
    });
  });
}


getAndPrintHTML(requestOptions);
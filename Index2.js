var https = require('https');

function getAndPrintHTML(){
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var newData = "";
  https.get(getAndPrintHTML, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data){
      newData += data;
  });

  response.on("end", function(){
    console.log(newData);
    });
  });
}

getAndPrintHTML();
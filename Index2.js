var https = require('https');

function getAndPrintHTML(){
  var requestOptions = {

    host : 'syntrantris.github.io',
    paths: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response){

  response.setEncoding('utf8');

  response.on('data', function(data){
    var newData = [];
    for(var i = 0; i < data.length; i ++){
    newData.push(("New Data Recieved. Length: " + data[i].length + "/n" + data[i]))
    }
    console.log(newData)
  });

  response.on("end", function(){
    console.log("Response Stream Complete")
    });
  });
}

getAndPrintHTML();
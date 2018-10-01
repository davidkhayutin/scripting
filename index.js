var https =  require('https');

function getAndPrintHTMLChunks (){

  var requestOptions = {

    host : 'syntrantris.github.io'
    paths: '/http-examples/step1.html'
  };

https.get(requestOptions, function(response){

  response.setEnconding('utf8');

  response.on('data', function(data){
    console.log('Chunck Recieved. Length:', data.length);
  });

  response.om("end", function(){
    console.log("Response Stream Complete")
  }

})

}
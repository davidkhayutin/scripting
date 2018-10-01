var https =  require('https');

function getAndPrintHTMLChunks (){

  var requestOptions = {

    host : 'syntrantris.github.io',
    paths: '/http-examples/step1.html'
  };

https.get(requestOptions, function(response){

  response.setEncoding('utf8');

  response.on('data', function(data){
    console.log('Chunck Recieved. Length:', data.length + '/n' + data);
  });

  response.on("end", function(){
    console.log("Response Stream Complete")
  })

})
}

getAndPrintHTMLChunks();
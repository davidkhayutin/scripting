var getHtml= require('./index4 copy.js')


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


function printupper(data){
console.log(data.toUpperCase());
};

getHtml.getHTML(requestOptions, printupper);
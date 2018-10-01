var getHtml= require('./index4 copy.js')


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


function printReverse(data){
console.log(data.split("").reverse().join(""));
};

getHtml.getHTML(requestOptions, printReverse);
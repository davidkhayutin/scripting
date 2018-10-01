var getHtml= require('./index4.js')


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHtml.getHTML(requestOptions, getHtml.printHTML);


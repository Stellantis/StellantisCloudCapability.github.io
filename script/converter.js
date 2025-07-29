var Converter = require('api-spec-converter');
 
Converter.convert({
  from: 'openapi_3',
  to: 'swagger_2',
  source: '../assets/openapi/api-b2b.yaml',
}, function(err, converted) {
  console.log(converted.stringify());
  // For yaml and/or OpenApi field order output replace above line
  // with an options object like below
  //   var  options = {syntax: 'yaml', order: 'openapi'}
  //   console.log(converted.stringify(options));
})
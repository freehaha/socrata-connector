var APIBase = require("apibase-client");
var client = new APIBase({
    baseUrl: 'http://localhost:3000'
});


var GET_RESOURCE = 'c1b1bf41-a4e6-4562-a880-72d9165a604e';
module.exports = function(source, resourceType, cb) {
  client.invokeOperation(GET_RESOURCE, source, null, null, function(err, result) {
    var data = null;
    try {
      data = JSON.parse(result.body);
      cb(err, {
        resource: data
      });
    } catch(e) {
      cb(e);
    }
  });
};

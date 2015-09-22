app.factory('myFactory', ['$http', function($http){
  var obj = {};
  obj.callSomeService = function() {
    return $http.get('http://pokeapi.co/api/v1/pokemon/150/');
  };
  return obj;
}]);


app.factory('sentimentFactory', ['$http', function($http){
  var obj = {};
  obj.getSentiment = function() {
    return $http({
      url: 'http://gateway-a.watsonplatform.net/calls/url/URLGetRankedKeywords',
      method: 'GET',
      params: {
        apikey: "GET YOUR OWN KEY",
        sentiment: 1,
        url: 'http://news.yahoo.com/syrian-refugee-family-meets-rude-welcome-german-home-145719190.html',
        outputMode: 'json'
      }
    });
  };
  return obj;
}]);

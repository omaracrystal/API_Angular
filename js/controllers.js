app.controller('myController', function($scope, myFactory) {
  $scope.getData = function() {
    myFactory.callSomeService().success(function(response){
      $scope.test = response;
    });
  };
});

app.controller('mySentimentController', function($scope, sentimentFactory) {
  $scope.getData = function() {
    sentimentFactory.getSentiment().success(function(response){
      $scope.keywords = response.keywords;
    });
  };
});



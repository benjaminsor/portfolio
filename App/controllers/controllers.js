

app.controller('mainController', function($scope) { 
    
});

app.controller('navCtrl', function($scope, $location) { 
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});


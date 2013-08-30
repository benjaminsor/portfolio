var app = angular.module('portApp', [])
                          

app.config(function ($routeProvider) {
   $routeProvider
        .when('/',
              {
                  controller: 'mainController',
                  templateUrl: 'App/partials/main.html',
              })
        .when('/about',
              {
                  controller: 'mainController',
                  templateUrl: 'App/partials/about.html',
              })
        .when('/work',
              {
                  controller: 'mainController',
                  templateUrl: 'App/partials/work.html',
              })
        .when('/contact',
              {
                  controller: 'mainController',
                  templateUrl: 'App/partials/contact.html',
              })
        .otherwise({ redirectTo: '/' });

          
});


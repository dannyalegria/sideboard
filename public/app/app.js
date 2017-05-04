angular.module('sideboard', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './app/routes/home/home.html',
      controller: 'homeController'
    });

});

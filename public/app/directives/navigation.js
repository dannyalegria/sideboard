angular.module('sideboard')
.directive('navigation', function(){
  return {
    restrict: 'E',
    templateUrl: './app/directives/navigation.html',
    controller: function($scope){
      $(".hamburger").click(function(){
        $(".hamburger-dropdown").slideToggle("slow");
    });
    }
  }
})

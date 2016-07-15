var app = angular.module("BlogApp", []).
filter('nlToArray', function() {
  return function(text) {
      return text.split('\n');
  };
});
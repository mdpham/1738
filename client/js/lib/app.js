//Declare new angular module and dependencies
fetty = angular.module("fetty", ["angular-meteor"]
    ,function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }
   );



//Boostrap angular
function onReady() {
  angular.bootstrap(document, ["fetty"]);
};
//Platform
if (Meteor.isCordova) {
  angular.element(document.on("deviceready", onReady));
} else {
  angular.element(document).ready(onReady);
};


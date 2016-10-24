function MainController($scope, $log, $location, $state) {

    $scope.go = function (path) {
        $location.path(path);
    };


    var init = function () {
        $log.info("Controller for Home function loaded");
    };

    init();
};

MainController.$inject = ['$scope', '$log', '$location', '$state'];
module.exports = MainController;

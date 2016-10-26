function MainController($scope, $log) {

    $scope.logOut = function () {
        //TODO Implementation of the log out routine.
    };

    var init = function () {
        $scope.userName = 'Raul Zuluaga';
        $log.info('Controller for Top Bar function loaded');
    };

    init();
}

MainController.$inject = ['$scope', '$log'];
module.exports = MainController;

function Router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                '': {
                    template: require('html!../Home/template.html'),
                    controller: 'HomeController'
                },
                'topBar@home': {
                    template: require('html!../Home/TopBar/template.html'),
                    controller: 'TopBarController'
                },
                'apiTest@home':{
                    template:require('html!../Apitest/template.html'),
                    controller:'ApitestController'
                }
            }
        });
    //To add new routes just remove semicolon and add a new "state" Call using chaining.
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = Router;

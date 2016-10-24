console.log('BM.Home Module Loaded');
require('./TopBar/init');

var mainController = require('./controller');

module.exports = angular.module('BM.Home', ['BM.Topbar']).controller('HomeController', mainController);

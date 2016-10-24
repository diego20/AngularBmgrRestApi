require('./style.scss');

var mainController = require('./controller');

console.log('BM.topBar Module Loaded');
module.exports = angular.module('BM.Topbar', [])
	.controller('TopBarController', mainController);

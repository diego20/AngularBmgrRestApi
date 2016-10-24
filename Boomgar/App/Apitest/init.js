require('./style.scss');
require('../Core/init');

var mainController = require('./controller');

console.log('BM.Apitest Module Loaded');
module.exports = angular.module('BM.Apitest', ['BM.Core'])
    .controller('ApitestController',mainController);

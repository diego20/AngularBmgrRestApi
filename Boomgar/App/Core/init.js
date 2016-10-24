require('angular-ui-router');
require('angular-route');
require('./Services/init');

var router = require('./router');


console.log('BM.Core Module Loaded');

module.exports = angular.module('BM.Core', ['ui.router', 'ngRoute', 'BM.Core.Api']).config(router);

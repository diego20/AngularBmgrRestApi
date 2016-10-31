console.log('App Loaded');
var angular = require('angular');
require('./bomgar.scss');
require('bootstrap-material-design/dist/css/bootstrap-material-design.css');
require("../Style/less/main.less");
require("angular-translate");

require('./Apitest/init');
require('./Core/init');
require('./Credential/init');
require('./Directives/init');
require('./Endpoint/init');
require('./Home/init');
require('./Reports/init');
require('./Users/init');


angular.module('BM', ['BM.Apitest','BM.Core','BM.Credential','BM.Directives','BM.Endpoint','BM.Home','BM.Reports','BM.Users']);


module.exports=angular.module('BM.Core.Api',['pascalprecht.translate'])
    .config(require('./translateService'))
    .factory('baseService',require('./baseService'));

//Add new services just removing semicolon and adding new factory Call using chaining.

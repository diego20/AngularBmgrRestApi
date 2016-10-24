function baseService($http, $q) {
    // String processor
    var setQueryString = function (parameters) {

        var queryString = "";

        if (parameters != null) {

            for (var i = 0; i < parameters.length; i++) {
                if (parameters[i].Value != null && parameters[i].Value != "null") {
                    queryString = queryString + "&" + parameters[i].Name + "=" + parameters[i].Value;
                }
            }

            if (queryString != "") {
                queryString = "*?*" + queryString;
                queryString = queryString.replace("*?*&", "?");
            }
        }

        return queryString;
    };

    var setUrlParameter = function (parameters, url) {

        if (parameters != null) {

            for (var i = 0; i < parameters.length; i++) {
                if (parameters[i].Value != null) {
                    if (url.search(":" + parameters[i].Name) != -1) {
                        url = url.replace(":" + parameters[i].Name, parameters[i].Value);
                        parameters[i].Value = null;
                    }
                }
            }
        }

        return url;
    };

    var setParams = function (parameters, baseUrl, relativeUrl) {
        var url = baseUrl;
        url = url + setUrlParameter(parameters, relativeUrl);
        url = url + setQueryString(parameters);
        return url;
    };


    //End of String processor


    //API Calls Methods

    var getResource = function (url, headers, callbackGet, callbackGetError) {
        var req = {
            method:'GET',
            url:url,
            headers:headers
        }
        return $http(req).then(function successCallback(response) {
            callbackGet(response.data);
        }, function errorCallback(response) {
            callbackGetError(response.data);
        });

    };

    var postResource = function (url, headers, callbackPost, callbackGetError) {
        var req = {
            method:'POST',
            url:url,
            headers:headers
        }
        return $http(req).then(function successCallback(response) {
            callbackPost(response.data);
        }, function errorCallback(response) {
            callbackGetError(response.data);
        });

    };


    //End of API Calls Methods


    return {
        setParams: setParams,
        getResource: getResource,
        postResource: postResource
    };
};

baseService.$inject = ['$http', '$q'];

module.exports = baseService;

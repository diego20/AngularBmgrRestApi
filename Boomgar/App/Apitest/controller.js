function MainController($scope, $log, $location, $state, baseService, $translate) {

    $scope.send = function () {
        $scope.results = {};
        $scope.parametersArray = [];
        if($scope.currentCredentialType === 'credentialList'){
            var array = Object.keys($scope.credentialListParameters);
            for(var i = 0; i < Object.keys($scope.credentialListParameters).length; i ++){
                $scope.parametersArray[i] = {
                    'Name': array[i],
                    'Value':$scope.credentialListParameters[array[i]]
                };
            }
        }
        else if($scope.currentCredentialType !== 'credentialList'){
            var array = Object.keys($scope.credentialsIdParameters);
            for(var i = 0; i < Object.keys($scope.credentialsIdParameters).length; i ++){
                $scope.parametersArray[i] = {
                    'Name': array[i],
                    'Value':$scope.credentialsIdParameters[array[i]]
                };
            }
        }
        var headers = {'AuthorizationInformation':$scope.authorizationInformation};
        //https://localhost:44325/api/Credential/
        //https://52.7.15.19/BomgarVaultWebAPI/api/Credential/
        //https://localhost/BomgarVaultWebAPI/api/Credential/
        $scope.url = baseService.setParams($scope.parametersArray, 'http://localhost/BomgarVaultWebAPI/api/Credential/','');
        if($scope.currentCredentialType !== 'credentialPost'){
            baseService.getResource($scope.url,headers,
                function(success){
                    $scope.results = success;
                    console.log($scope.results);
                },
                function(error){
                    if(error != null){
                        $scope.results = error.Message;
                        console.error(error);
                    }
            });
        }else if($scope.currentCredentialType === 'credentialPost'){
            baseService.postResource($scope.url,headers,
                function(success){
                    $scope.results = success;
                    console.log($scope.results);
                },
                function(error){
                    if(error != null){
                        $scope.results = error.Message;
                        console.error(error);
                    }
            });
        }
        $scope.hideResults = false;
    };


    $scope.clearContent = function(){
        $scope.parameterContentDescription = '';
        $scope.parameterContentExample = '';
        $scope.authorizationInformation = '';
        $scope.securityScheme = '';
        if($scope.currentCredentialType === 'credentialList'){
            var array = Object.keys($scope.credentialListParameters);
            for(var i = 0; i < Object.keys($scope.credentialListParameters).length; i ++){
                $scope.credentialListParameters[array[i]] = '';
            }
        }
        else if($scope.currentCredentialType !== 'credentialList'){
            var array = Object.keys($scope.credentialsIdParameters);
            for(var i = 0; i < Object.keys($scope.credentialsIdParameters).length; i ++){
                $scope.credentialsIdParameters[array[i]] = '';
            }
        }
    }

    $scope.changeCredentialType = function(credentialType){
        if(credentialType !== $scope.currentCredentialType){
            $scope.initVariables();
            $scope.currentCredentialType = credentialType;
            $scope.results = {};
            $scope.hideResults = true;
            $scope.selectedParameter = '';
            $scope.parameterContentDescription = '';
            $scope.parameterContentExample = '';
            credentialType === 'credentialPost' ? $scope.headerRestType = 'POST' : $scope.headerRestType = 'GET';
        }
    }

    $scope.selectParameter = function(parameter){
        $scope.parameterContentDescription = '';
        $scope.parameterContentExample = '';
        $translate(parameter).then(function(translations){
                $scope.selectedParameter = translations;
        });
        if(parameter === 'AUTHORIZATION_INFORMATION'){
            $translate(['AUTHORIZATION_INFORMATION_DESCRIPTION','AUTHORIZATION_INFORMATION_EXAMPLE']).then(function(translations){
                $scope.parameterContentDescription = translations.AUTHORIZATION_INFORMATION_DESCRIPTION;
                $scope.parameterContentExample = translations.AUTHORIZATION_INFORMATION_EXAMPLE;
                $scope.clearSelectedParameterWhenNoInfo(parameter);
            });
        }else if(parameter === 'SECURITY_SCHEME'){
            $translate(['SECURITY_SCHEME_DESCRIPTION','SECURITY_SCHEME_EXAMPLE']).then(function(translations){
                $scope.parameterContentDescription = translations.SECURITY_SCHEME_DESCRIPTION;
                $scope.parameterContentExample = translations.SECURITY_SCHEME_EXAMPLE;
                $scope.clearSelectedParameterWhenNoInfo(parameter);
            });
        }else if(parameter === 'IPV4'){
            $translate(['IPV4_DESCRIPTION','IPV4_EXAMPLE']).then(function(translations){
                $scope.parameterContentDescription = translations.IPV4_DESCRIPTION;
                $scope.parameterContentExample = translations.IPV4_EXAMPLE;
                $scope.clearSelectedParameterWhenNoInfo(parameter);
            });
        }else if(parameter === 'CREDENTIAL_TYPE'){
            $translate(['CREDENTIAL_TYPE_DESCRIPTION','CREDENTIAL_TYPE_EXAMPLE']).then(function(translations){
                $scope.parameterContentDescription = translations.CREDENTIAL_TYPE_DESCRIPTION;
                $scope.parameterContentExample = translations.CREDENTIAL_TYPE_EXAMPLE;
                $scope.clearSelectedParameterWhenNoInfo(parameter);
            });
        }else if(parameter === 'DOMAIN'){
            $translate(['DOMAIN_DESCRIPTION','DOMAIN_EXAMPLE']).then(function(translations){
                $scope.parameterContentDescription = translations.DOMAIN_DESCRIPTION;
                $scope.parameterContentExample = translations.DOMAIN_EXAMPLE;
                $scope.clearSelectedParameterWhenNoInfo(parameter);
            });
        }else if(parameter === 'HOSTNAME'){
            $translate(['HOSTNAME_DESCRIPTION','HOSTNAME_EXAMPLE']).then(function(translations){
                $scope.parameterContentDescription = translations.HOSTNAME_DESCRIPTION;
                $scope.parameterContentExample = translations.HOSTNAME_EXAMPLE;
                $scope.clearSelectedParameterWhenNoInfo(parameter);
            });
        }else if(parameter === 'LOGIN_AUTHORIZATION_METHOD_CONFIGURATION'){
            $translate(['LOGIN_AUTHORIZATION_METHOD_CONFIGURATION_DESCRIPTION','LOGIN_AUTHORIZATION_METHOD_CONFIGURATION_EXAMPLE']).then(function(translations){
                $scope.parameterContentDescription = translations.LOGIN_AUTHORIZATION_METHOD_CONFIGURATION_DESCRIPTION;
                $scope.parameterContentExample = translations.LOGIN_AUTHORIZATION_METHOD_CONFIGURATION_EXAMPLE;
                $scope.clearSelectedParameterWhenNoInfo(parameter);
            });
        }else if(parameter === 'LOGIN_USERNAME'){
            $translate(['LOGIN_USERNAME_DESCRIPTION','LOGIN_USERNAME_EXAMPLE']).then(function(translations){
                $scope.parameterContentDescription = translations.LOGIN_USERNAME_DESCRIPTION;
                $scope.parameterContentExample = translations.LOGIN_USERNAME_EXAMPLE;
                $scope.clearSelectedParameterWhenNoInfo(parameter);
            });
        }else if(parameter === 'CREDENTIAL_ID'){
            $translate(['CREDENTIAL_ID_DESCRIPTION','CREDENTIAL_ID_EXAMPLE']).then(function(translations){
                $scope.parameterContentDescription = translations.CREDENTIAL_ID_DESCRIPTION;
                $scope.parameterContentExample = translations.CREDENTIAL_ID_EXAMPLE;
                $scope.clearSelectedParameterWhenNoInfo(parameter);
            });
        }
    }

    $scope.clearSelectedParameterWhenNoInfo = function(parameter){
        if($scope.parameterContentDescription === '' && $scope.parameterContentExample === ''){
            $scope.selectedParameter = '';
        }
    }

    $scope.initVariables = function(){
        $scope.securityScheme = '';
        $scope.authorizationInformation = '';

        $scope.credentialListParameters = {};
        $scope.credentialsIdParameters = {};

        $scope.credentialListParameters.loginUserName = '';
        $scope.credentialListParameters.loginAuthorizationMethodConfiguration = '';
        $scope.credentialListParameters.IPV4 = '';
        $scope.credentialListParameters.credentialType = '';
        $scope.credentialListParameters.domain = '';
        $scope.credentialListParameters.hostname = '';

        $scope.credentialsIdParameters.loginUserName = '';
        $scope.credentialsIdParameters.loginAuthorizationMethodConfiguration = '';
        $scope.credentialsIdParameters.CredentialId = '';

        $scope.url = '';
        $scope.results = '';
        $scope.hideResults = true;
    }

    var init = function () {
        $scope.currentCredentialType = 'credentialList';
        $scope.headerRestType = 'GET';
        $scope.selectedParameter = '';
        $scope.parameterContentDescription = '';
        $scope.parameterContentExample = '';
        $scope.initVariables();
    }
    init();

};

MainController.$inject = ['$scope', '$log', '$location', '$state', 'baseService', '$translate'];
module.exports = MainController;

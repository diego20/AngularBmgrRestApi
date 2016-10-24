function MainController($scope, $log, $location, $state, baseService) {

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
        $scope.url = baseService.setParams($scope.parametersArray, 'https://localhost/BomgarVaultWebAPI/api/Credential/','');
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
            $scope.parameterContent = '';
            $scope.parameterContent2 = '';
            credentialType === 'credentialPost' ? $scope.headerRestType = 'POST' : $scope.headerRestType = 'GET';
        }
    }

    $scope.selectParameter = function(parameter){
        $scope.selectedParameter = parameter;
        $scope.parameterContent2 = '';
        if(parameter === 'Security scheme'){
            $scope.parameterContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum odio vitae nibh volutpat scelerisque. Sed augue metus, varius in maximus at, vestibulum vitae felis.';
            $scope.parameterContent2 = 'Integer purus leo, egestas id diam sit amet, pulvinar maximus purus. In lacinia est fermentum dui pharetra, id venenatis nibh congue. Nunc venenatis sit amet mauris a ornare. Curabitur tincidunt sit amet ligula quis tempor.';
        }else if(parameter === 'Authorization Information'){
            $scope.parameterContent = 'Aenean placerat dignissim tellus at tempor. Suspendisse potenti. Mauris rutrum euismod sem sit amet egestas. Maecenas hendrerit augue lorem, sit amet scelerisque lectus facilisis vel. Phasellus at lacinia justo. Nullam lacus risus, tristique quis neque sed, consequat gravida urna. Nunc congue volutpat dignissim.';
        }else{
            $scope.parameterContent = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In nec felis gravida nunc sodales porta ut non nisi. Curabitur ac sapien diam. In hac habitasse platea dictumst. Fusce semper, magna sit amet blandit pretium, tortor sem commodo dolor, nec elementum turpis risus non nisi.';
        }
    }

    $scope.initVariables = function(){
        $scope.securityScheme = '';
        $scope.authorizationInformation = 'Th1s1sAK3y*';

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
        $scope.parameterContent = '';
        $scope.parameterContent2 = '';
        $scope.initVariables();
    }
    init();

};

MainController.$inject = ['$scope', '$log', '$location', '$state', 'baseService'];
module.exports = MainController;
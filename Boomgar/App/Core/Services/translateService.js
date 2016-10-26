function translateService($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.translations('en',{
        CREDENTIAL_LIST : 'Credential List',
        CREDENTIALS_ID : 'Credentials Id',
        CREDENTIALS_ID_LOCKS : 'Credentials Id Locks',
        CREDENTIAL : 'Credential',
        AUTHENTICATION : 'Authentication',
        SECURITY_SCHEME : 'Security Scheme',
        HEADERS : 'Headers',
        AUTHORIZATION_INFORMATION : 'Authorization Information',
        QUERY_PARAMETERS : 'Query Parameters',
        IPV4 : 'IPv4',
        DOMAIN : 'Domain',
        LOGIN_AUTHORIZATION_METHOD_CONFIGURATION : 'Login Authorization Method Configuration',
        LOGIN_USERNAME : 'Login Username',
        HOSTNAME : 'Hostname',
        CREDENTIAL_TYPE : 'Credential Type',
        CREDENTIAL_ID : 'Credential Id',
        SEND_BUTTON : 'Send',
        CLEAR_BUTTON : 'Clear',
        REQUEST_URL : 'Request Url',
        BODY : 'Body',
        SECURITY_SCHEME_DESCRIPTION : '',
        SECURITY_SCHEME_EXAMPLE : '',
        AUTHORIZATION_INFORMATION_DESCRIPTION : 'Include knowed key by both ends to autorize the use of the API',
        AUTHORIZATION_INFORMATION_EXAMPLE : 'Th1s1sAKey*',
        IPV4_DESCRIPTION : 'It should restrict returned results to credentials belonging to an endpoint with this IP.',
        IPV4_EXAMPLE : '10.10.1.2',
        CREDENTIAL_TYPE_DESCRIPTION : 'An array; may contain none or more credential types. A filter; should restrict returned results to credentials that have one of the specified types',
        CREDENTIAL_TYPE_EXAMPLE : '',
        DOMAIN_DESCRIPTION : 'Specified in the url. A filter; should restrict returned results to credentials belonging to this domain.',
        DOMAIN_EXAMPLE : 'MyDomain',
        HOSTNAME_DESCRIPTION : 'It should restrict returned results to credentials belonging to an endpoint with this hostname. It sloud accept a wild card in the same way % works for SQL',
        HOSTNAME_EXAMPLE : '',
        LOGIN_AUTHORIZATION_METHOD_CONFIGURATION_DESCRIPTION : 'The specific name for the domain or the duo configuration, it can be as is in vault, or as the user know it. The validation process should try the valitate one of them',
        LOGIN_AUTHORIZATION_METHOD_CONFIGURATION_EXAMPLE : '',
        LOGIN_USERNAME_DESCRIPTION : 'Unique user name in authentication Authorization Method Configuration (AD, eDirectory, RADIUS, Local)',
        LOGIN_USERNAME_EXAMPLE : '',
        CREDENTIAL_ID_DESCRIPTION : '',
        CREDENTIAL_ID_EXAMPLE : '',
        EXAMPLE_TEXT : 'Example:'
    });
    $translateProvider.preferredLanguage('en');
}

translateService.$inject = ['$translateProvider'];
module.exports = translateService;

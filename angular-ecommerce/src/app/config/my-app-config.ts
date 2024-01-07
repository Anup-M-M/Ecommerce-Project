export default {

    oidc: {
        clientId : '0oae8evkk8OKY3Ja55d7',
        issuer : 'https://dev-84137868.okta.com/oauth2/default',
        redirectUri : 'http://localhost:4200/login/callback',
        scopes : ['openid', 'profile', 'email']

        // scope provide access to info about a user
        // openid : required for authentication requests
    }
}

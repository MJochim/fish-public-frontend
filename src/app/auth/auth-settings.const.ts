import {UserManagerSettings} from 'oidc-client';

export const authSettings: UserManagerSettings = {
	authority: 'https://keycloak.example.com/auth/realms/master/',
	client_id: 'my-client-id',
	redirect_uri: 'http://localhost:4200/',
	post_logout_redirect_uri: 'http://localhost:4200/',
	response_type:"id_token token",
	scope:"openid profile",
	filterProtocolClaims: true,
	loadUserInfo: true
};

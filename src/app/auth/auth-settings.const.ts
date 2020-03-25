// (c) 2016-2020 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {UserManagerSettings} from 'oidc-client';

export const authSettings: UserManagerSettings = {
	authority: 'https://keycloak.example.com/auth/realms/master/',
	client_id: 'fish-frontend',
	redirect_uri: 'https://example.com/fish/public/',
	post_logout_redirect_uri: 'https://example.com/fish/public/',
	response_type:"id_token token",
	scope:"openid profile",
	filterProtocolClaims: true,
	loadUserInfo: true
};

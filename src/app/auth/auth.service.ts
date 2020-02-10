import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import {authSettings} from './auth-settings.const';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private manager = new UserManager(authSettings);
	private user: User = null;

	constructor() {
		this.manager.getUser().then(user => {
        		this.user = user;
		});		
	}

	isLoggedIn(): boolean {
		return this.user != null && !this.user.expired;
	}

	getClaims(): any {
 		return this.user.profile;
	}

	getAuthorizationHeaderValue(): string {
		return `${this.user.token_type} ${this.user.access_token}`;
	}

	startAuthentication(): Promise<void> {
		return this.manager.signinRedirect();
	}

	completeAuthentication(): Promise<void> {
		return this.manager.signinRedirectCallback().then(user => {
			console.log("Authentication successful", user);
			this.user = user;
		})
		.catch (error => {
			console.log("Authentication not attempted or not successful:", error.message);
		});
	}

}


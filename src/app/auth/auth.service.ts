import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import {authSettings} from './auth-settings.const';
import { BehaviorSubject }    from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private manager = new UserManager(authSettings);
	private user: User = null;

	public loginStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

	constructor() {
		this.manager.getUser().then(user => {
        		this.user = user;
		});

		this.manager.events.addUserSignedOut(this.logoutHandler.bind(this));
	}

	logoutHandler() {
			console.log("User signed out at OpenID Provider");
			this.user = null;
			this.loginStatus.next(false);
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
		console.log("Trying to complete OpenID Connect authentication process (a.k.a. The OAuth Dance)");

		return this.manager.signinRedirectCallback().then(user => {
			console.log("Authentication successful", user);
			this.user = user;
			this.loginStatus.next(true);
		})
		.catch (error => {
			console.log("Authentication not attempted or not successful:", error.message);
		});
	}

	startSignout(): Promise<void> {
		return this.manager.signoutRedirect();
	}
}


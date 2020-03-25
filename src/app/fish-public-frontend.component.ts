// (c) 2016-2020 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth/auth.service";

@Component({
	selector: 'fish-public-frontend-app',
	template: '<router-outlet></router-outlet>',
	styles: [`
        :host > app-conference, :host > app-conference-list {
            height: 100%;
        }
	`],
})
export class FishPublicFrontendComponent implements OnInit {
	constructor(private authService: AuthService) {
	}

	ngOnInit(): any {
		// The root URL / is the callback URL for authentication via
		// OpenID Connect. At this point, we do not distinguish whether
		// the app was called via redirect from an OpenID Provider after
		// a login attempt (that may or may not have been successful)
		// or directly by the user.
		//
		// We just try to complete the authentication process. This does
		// nothing (except log an info message) if the app was called 
		// directly by the user.
		this.authService.completeAuthentication();
	}
}

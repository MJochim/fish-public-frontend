// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth/auth.service";

@Component({
	selector: 'conference-registration-app',
	template: '<router-outlet></router-outlet>',
	styles: [`
        :host > app-conference, :host > app-conference-list {
            height: 100%;
        }
	`],
})
export class ConferenceRegistrationComponent implements OnInit {
	constructor(private authService: AuthService) {
	}

	ngOnInit(): any {
		this.authService.completeAuthentication();
	}
}

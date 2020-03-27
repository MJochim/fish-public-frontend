// (c) 2016-2020 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {Component, OnInit} from "@angular/core";
import {ConferenceStoreService} from "../core/conference-store.service";
import {Conference} from "../core/conference.interface";
import {AuthService} from "../auth/auth.service";


@Component({
	selector: 'app-conference-list',
	templateUrl: 'conference-list.component.html',
	styleUrls: ['conference-list.component.css'],
})
export class ConferenceListComponent implements OnInit {
	public conferences: Conference[] = [];
	public isLoggedIn: boolean = false;

	constructor(private _conferenceStoreService: ConferenceStoreService,
		    private authService: AuthService) {
	}

	ngOnInit() {
		this._conferenceStoreService.getConferences()
			.then(value => {
				this.conferences = value;
			})
			.catch(error => {
				console.log(error);
			});

		this.authService.loginStatus.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
	}

	public login() {
		this.authService.startAuthentication();
	}

	public logout() {
		this.authService.startSignout();
	}
}

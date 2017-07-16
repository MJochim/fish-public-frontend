// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {Component, OnInit} from "@angular/core";
import {ConferenceStoreService} from "../core/conference-store.service";
import {Conference} from "../core/conference.interface";


@Component({
	selector: 'app-conference-list',
	templateUrl: 'conference-list.component.html',
	styleUrls: ['conference-list.component.css'],
})
export class ConferenceListComponent implements OnInit {
	public conferences: Conference[] = [];
	public loginState: 'NotTried' | 'Trying' | 'Successful' | 'Unsuccessful' = 'NotTried';
	public password: string = '';
	public showSignInForm: boolean = false;

	constructor(private _conferenceStoreService: ConferenceStoreService) {
	}

	ngOnInit() {
		this._conferenceStoreService.getConferences()
			.then(value => {
				this.conferences = value;
			})
			.catch(error => {
				console.log(error);
			});
	}

	public toggleSignInForm() {
		this.showSignInForm = !this.showSignInForm;
	}

	public signIn() {
		if (this.loginState !== 'Trying') {
			this.loginState = 'Trying';

			this._conferenceStoreService.authenticate(this.password)
				.then((success) => {
					if (success) {
						this.loginState = 'Successful';
						this.showSignInForm = false;
					} else {
						this.loginState = 'Unsuccessful';
					}
				})
				.catch(() => {
					this.loginState = 'Unsuccessful'
				});
		}
	}
}

// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Conference} from "app/core/conference.interface";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ConferenceStoreService {
	private password: string = '';
	private urls = {
		authenticate: 'https://anmeldung.stuts.de/backend/authenticate.php',
		getConferences: 'https://anmeldung.stuts.de/data/conferences.json',
		pushConference: 'https://anmeldung.stuts.de/backend/push-conference.php'
	};

	constructor(private http: Http) {
	}

	authenticate(password?: string): Promise<boolean> {
		if (password) {
			this.password = password;
		}

		return this.http.post(this.urls.authenticate, {password: this.password})
			.map(response => {
				let object = response.json();
				return (object.success === true);
			})
			.catch(() => {
				return Observable.of(false);
			})
			.toPromise();
	}

	getConferences(): Promise<Conference[]> {
		return this.http.get(this.urls.getConferences)
			.toPromise()
			.then(response => response.json() as Conference[])
			.catch(() => {
				return Promise.reject('Could not load conferences');
			});
	}

	getConference(key: string): Promise<Conference> {
		return this.getConferences()
			.then(conferences => {
				for (let i = 0; i < conferences.length; ++i) {
					if (conferences[i].key === key) {
						return conferences[i];
					}
				}

				return null;
			})
			.catch(() => {
				return Promise.reject('Could not load conferences');
			});
	}

	pushConference(conference: Conference) {
		let data = {
			password: this.password,
			conference: conference
		};

		return this.http.post(this.urls.pushConference, data)
			.toPromise()
			.then(() => true)
			.catch(() => {
				throw 'Storing conference data on the server failed.'
			});
	}
}

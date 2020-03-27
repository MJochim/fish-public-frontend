// (c) 2016-2020 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {of as observableOf} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Conference} from "app/core/conference.interface";
import {AuthService} from "app/auth/auth.service";

@Injectable()
export class ConferenceStoreService {
	private password: string = '';
	private urls = {
		getConferences: 'https://api.example.com/data/conferences.json',
		pushConference: 'https://api.example.com/questionnaire-data/questionnaires/'
	};

	constructor(private http: HttpClient,
		    private authService: AuthService) {
	}

	getConferences(): Promise<Conference[]> {
		return this.http.get<Conference[]>(this.urls.getConferences)
			.toPromise()
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
		const headers = new HttpHeaders({ 'Authorization': this.authService.getAuthorizationHeaderValue() });
		const url = this.urls.pushConference + encodeURIComponent(conference.key);

		return this.http.put(url, conference, {headers: headers})
			.toPromise()
			.then(() => true)
			.catch(() => {
				throw 'Storing conference data on the server failed.'
			});
	}
}

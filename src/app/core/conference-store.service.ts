// (c) 2016-2020 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {of as observableOf} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Conference} from "app/core/conference.interface";
import {ConferenceInfo} from "app/core/conference-info.interface";
import {AuthService} from "app/auth/auth.service";

@Injectable()
export class ConferenceStoreService {
	private password: string = '';
	private apiUrl: string = 'https://admin.junge-sprachwissenschaft.de/fish';
        private isLoggedIn: boolean = false;

	constructor(private http: HttpClient,
		    private authService: AuthService) {
		this.authService.loginStatus.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
	}

	getConferences(): Promise<ConferenceInfo[]> {
		let headers = new HttpHeaders();
		if (this.isLoggedIn) {
			headers = headers.append('Authorization', this.authService.getAuthorizationHeaderValue());
		}
		const url = this.apiUrl + '/questionnaires';

		return this.http.get<ConferenceInfo[]>(url, {headers: headers})
			.toPromise()
			.catch(() => {
				return Promise.reject('Could not load conferences');
			});
	}

	getConference(key: string): Promise<Conference> {
		let headers = new HttpHeaders();
		if (this.isLoggedIn) {
			headers = headers.append('Authorization', this.authService.getAuthorizationHeaderValue());
		}
		const url = this.apiUrl + '/questionnaires/' + encodeURIComponent(key);

		return this.http.get<Conference>(url, {headers: headers})
			.toPromise()
			.catch(() => {
				return Promise.reject('Could not load conference');
			});
	}

	pushConference(conference: Conference) {
		let headers = new HttpHeaders();
		if (this.isLoggedIn) {
			headers = headers.append('Authorization', this.authService.getAuthorizationHeaderValue());
		}
		const url = this.apiUrl + '/questionnaires/' + encodeURIComponent(conference.key);

		return this.http.put(url, conference, {headers: headers})
			.toPromise()
			.then(() => true)
			.catch(() => {
				throw 'Storing conference data on the server failed.'
			});
	}

	register(conferenceKey: string, registration: any) {
		const url = this.apiUrl + '/questionnaires/' + encodeURIComponent(conferenceKey) + '/responses';

		return this.http.post(url, registration)
			.toPromise()
			.then(() => null)
			.catch(() => {
				throw 'Registering failed.'
			});
	}
}

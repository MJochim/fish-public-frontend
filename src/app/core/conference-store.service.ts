// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Conference} from "app/core/conference.interface";

@Injectable()
export class ConferenceStoreService {
	private url: string = 'https://anmeldung.stuts.de/data/conferences.json';

	constructor(private http: Http) {
	}

	getConferences(): Promise<Conference[]> {
		return this.http.get(this.url)
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
}

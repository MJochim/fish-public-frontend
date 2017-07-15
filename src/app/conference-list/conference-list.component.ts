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

}

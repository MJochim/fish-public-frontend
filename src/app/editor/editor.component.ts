import {Component, OnInit} from "@angular/core";
import {ConferenceStoreService} from "../core/conference-store.service";
import {Conference} from "../core/conference.interface";

@Component({
	selector: 'confreg-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
	public conference: Conference;
	public previewMode: boolean = false;

	constructor(private conferenceStoreService: ConferenceStoreService) {
		this.conference = {
			name: '',
			key: '',
			place: '',
			date: '',
			avatar: '',
			showBackButton: true,
			labels: {},
			registration: []
		};
	}

	async ngOnInit() {
		try {
			this.conference = await this.conferenceStoreService.getConference('stuts60_de');
		} catch (error) {
			console.log(error);
		}
	}

	edited (event) {
		console.log(event);
	}
}

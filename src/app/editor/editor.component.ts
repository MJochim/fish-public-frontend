import {Component, OnInit} from "@angular/core";
import {
	Conference,
	ConferenceStoreService
} from "../core/conference-store.service";

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
}

import {Component, Inject, OnInit} from "@angular/core";
import {MD_DIALOG_DATA} from "@angular/material";

@Component({
	selector: 'confreg-user-alert',
	templateUrl: './user-alert.component.html',
	styleUrls: ['./user-alert.component.css']
})
export class UserAlertComponent implements OnInit {

	constructor(@Inject(MD_DIALOG_DATA) public data: any) {
	}

	ngOnInit() {
	}

}

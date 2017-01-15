// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {Component, OnInit} from "@angular/core";
import {ConferenceStoreService} from "./conference-store.service";

@Component({
  selector: 'conference-registration-app',
  templateUrl: 'conference-registration.component.html',
  styleUrls: ['conference-registration.component.css'],
})
export class ConferenceRegistrationComponent implements OnInit {
  constructor() {
  }

  ngOnInit():any {
  }
}

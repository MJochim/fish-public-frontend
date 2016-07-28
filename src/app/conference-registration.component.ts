// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {ConferenceStoreService} from "./conference-store.service";

@Component({
  moduleId: module.id,
  selector: 'conference-registration-app',
  templateUrl: 'conference-registration.component.html',
  styleUrls: ['conference-registration.component.css'],
  providers: [ConferenceStoreService],
  directives: [ROUTER_DIRECTIVES]
})
export class ConferenceRegistrationAppComponent implements OnInit {
  constructor() {
  }

  ngOnInit():any {
  }
}

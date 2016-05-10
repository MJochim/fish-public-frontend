import {Component, OnInit} from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

import {ConferenceStoreService} from './conference-store.service';
import {ConferenceListComponent} from './+conference-list';
import {ConferenceComponent} from './+conference';

@Component({
  moduleId: module.id,
  selector: 'conference-registration-app',
  templateUrl: 'conference-registration.component.html',
  styleUrls: ['conference-registration.component.css'],
  providers: [ConferenceStoreService],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/conference/:key', component: ConferenceComponent},
  {path: '/', component: ConferenceListComponent}
])
export class ConferenceRegistrationAppComponent implements OnInit {
  constructor(private router:Router, private _conferenceStore:ConferenceStoreService) {
  }

  ngOnInit():any {
  }
}

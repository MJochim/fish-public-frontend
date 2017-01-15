// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import { Component, OnInit } from '@angular/core';
import {ConferenceStoreService, Conference} from "../core/conference-store.service";


@Component({
  selector: 'app-conference-list',
  templateUrl: 'conference-list.component.html',
  styleUrls: ['conference-list.component.css'],
})
export class ConferenceListComponent implements OnInit {
  private conferences:Conference[] = [];

  constructor(private _conferenceStoreService: ConferenceStoreService) {}

  ngOnInit() {
    this.conferences = this._conferenceStoreService.conferences;
  }

}

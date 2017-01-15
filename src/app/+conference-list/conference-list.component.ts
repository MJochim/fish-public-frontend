// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";
import {MdToolbar} from "@angular2-material/toolbar";
import {ConferenceStoreService, Conference} from "../conference-store.service";


@Component({
  selector: 'app-conference-list',
  templateUrl: 'conference-list.component.html',
  styleUrls: ['conference-list.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_LIST_DIRECTIVES, MdToolbar]
})
export class ConferenceListComponent implements OnInit {
  private conferences:Conference[] = [];

  constructor(private _conferenceStoreService: ConferenceStoreService) {}

  ngOnInit() {
    this.conferences = this._conferenceStoreService.conferences;
  }

}

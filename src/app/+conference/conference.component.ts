// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {Component} from '@angular/core';
import {OnActivate, Router, RouteSegment} from '@angular/router';
import {ConferenceStoreService, Conference} from "../conference-store.service";
import {MdButton} from "@angular2-material/button";
import {MdCard} from "@angular2-material/card";
import {MdCheckbox} from "@angular2-material/checkbox";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";
import {
  MdRadioButton,
  MdRadioGroup,
  MdRadioDispatcher
} from "@angular2-material/radio";
import {MdToolbar} from "@angular2-material/toolbar";


@Component({
  moduleId: module.id,
  selector: 'app-conference',
  templateUrl: 'conference.component.html',
  styleUrls: ['conference.component.css'],
  providers: [MdRadioDispatcher],
  directives: [MdButton, MdCard, MdCheckbox, MD_INPUT_DIRECTIVES, MD_LIST_DIRECTIVES, MdRadioButton, MdRadioGroup, MdToolbar]
})
export class ConferenceComponent implements OnActivate {
  conference:Conference;

  constructor(private router:Router, private _conferenceStore:ConferenceStoreService) {
  }

  routerOnActivate(curr:RouteSegment) {
    let key = curr.getParam('key');
    this.conference = this._conferenceStore.getConference(key);
    if (this.conference === null) {
      this.router.navigate(['/']);
    }
  }

  private submit(form) {
    console.log('submitting form', form);
    form.submit();
  }
  private navigateBack() {
    this.router.navigate(['/']);
  }
}

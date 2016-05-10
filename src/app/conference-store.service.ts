import {Injectable} from '@angular/core';

export interface RegistrationItem {
  type:string;
  caption:string;
  title?:string;
  key?:string;
  hint?:string;
  pattern?:string;
  choices?:string[];
}

export interface Conference {
  name:string;
  key:string;
  place:string;
  date:string;
  avatar:string;
  registration:RegistrationItem[];
}

@Injectable()
export class ConferenceStoreService {

  get conferences():Conference[] {
    return this._conferences;
  }

  constructor() {
  }

  getConference(key:string):Conference {
    for (let i = 0; i < this._conferences.length; ++i) {
      if (this._conferences[i].key === key) {
        return this._conferences[i];
      }
    }

    return null;
  }

  private _conferences:Conference[] = [{
    name: 'LX. StuTS',
    key: 'stuts60',
    place: 'Heidelberg',
    date: 'Herbst 2016',
    avatar: 'http://stuts.de/esh.png',
    registration: [{
      type: 'caption',
      title: 'Willkommen!',
      caption: 'Willkommen bei der Anmeldung zur LX. StuTS'
    }, {
      type: 'textInput',
      caption: 'Name',
      hint: 'Optional'
    }, {
      type: 'textInput',
      caption: 'Vorname'
    }, {
      type: 'textInput',
      caption: 'Universität'
    }, {
      type: 'textInput',
      caption: 'E-Mail',
      pattern: 'email'
    }, {
      type: 'multipleChoice',
      caption: 'An welchen Tagen möchtest Du zur StuTS kommen?',
      choices: [
        'Donnerstag',
        'Freitag',
        'Samstag',
        'Sonntag'
      ]
    }, {
      type: 'singleChoice',
      caption: 'Nimmst Du am Abschlussbrunch am Sonntag teil?',
      choices: [
        'Ja',
        'Nein'
      ]
    }, {
      type: 'singleChoice',
      key: 'bufata',
      caption: 'Nimmst Du an der BuFaTa teil?',
      choices: [
        'Ja',
        'Nein'
      ]
    }]
  }, {
    name: '9. STaPS',
    key: 'staps9',
    place: 'Köln',
    date: 'Herbst 2016',
    avatar: 'http://staps.stuts.eu/wp-content/uploads/2013/07/STaPs_Logo.png',
    registration: [{
      type: 'caption',
      caption: 'Willkommen bei der Anmeldung zur 9. STaPs'
    }, {
      type: 'textInput',
      caption: 'Name'
    }]
  }];

}

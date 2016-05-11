// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {Injectable} from '@angular/core';

export function isCaptionItem(item:CaptionItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem):item is CaptionItem {
  return (item.type === 'Caption');
}
export function isTextInputItem(item:CaptionItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem):item is TextInputItem {
  return (item.type === 'TextInput');
}
export function isSingleChoiceItem(item:CaptionItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem):item is SingleChoiceItem {
  return (item.type === 'SingleChoice');
}
export function isMultipleChoiceItem(item:CaptionItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem):item is MultipleChoiceItem {
  return (item.type === 'MultipleChoice');
}

export interface CaptionItem {
  type:'Caption';
  title?:string;
  text?:string;
}

export interface TextInputItem {
  type:'TextInput';
  key:string;
  caption:string;
  optional?:boolean;
  hint?:string;
  pattern?:string;
}

export interface SingleChoiceItem {
  type:'SingleChoice';
  key:string;
  choices:string[];
}

export interface MultipleChoiceItem {
  type:'MultipleChoice';
  key:string;
  caption:string;
  choices:Array<{key:string, caption:string}>;
}

export interface LabelList {
  headline?:string;
  submit?:string;
  abort?:string;
  back?:string;
  submitQuestion?:string;
}

export interface Conference {
  name:string;
  key:string;
  place:string;
  date:string;
  avatar:string;
  showBackButton:boolean;
  labels:LabelList;
  registration:Array<CaptionItem|SingleChoiceItem|MultipleChoiceItem|TextInputItem>;
}

export var stuts60:Conference = {
  name: 'LX. StuTS',
  key: 'stuts60',
  place: 'Heidelberg',
  date: 'Herbst 2016',
  avatar: 'http://stuts.de/esh.png',
  showBackButton: true,
  labels: {},
  registration: [{
    type: 'Caption',
    title: 'Willkommen!',
    text: 'Willkommen bei der Anmeldung zur LX. StuTS'
  }, {
    type: 'TextInput',
    key: 'name',
    caption: 'Name',
  }, {
    type: 'TextInput',
    key: 'vorname',
    caption: 'Vorname'
  }, {
    type: 'TextInput',
    key: 'affiliation',
    caption: 'Universität',
    optional: true
  }, {
    type: 'TextInput',
    key: 'email',
    caption: 'E-Mail',
    pattern: 'email',
    hint: 'kurzer(!) info-text'
  }, {
    type: 'MultipleChoice',
    key: 'tage',
    caption: 'An welchen Tagen möchtest Du zur StuTS kommen?',
    choices: [{
      key: 'do',
      caption: 'Donnerstag'
    }, {
      key: 'fr',
      caption: 'Freitag'
    }, {
      key: 'sa',
      caption: 'Samstag'
    }, {
      key: 'so',
      caption: 'Sonntag'
    }]
  }, {
    type: 'SingleChoice',
    key: 'brunch',
    caption: 'Nimmst Du am Abschlussbrunch am Sonntag teil?',
    choices: [
      'Ja',
      'Nein'
    ]
  }, {
    type: 'SingleChoice',
    key: 'bufata',
    caption: 'Nimmst Du an der BuFaTa teil?',
    choices: [
      'Ja',
      'Nein'
    ]
  }]
};

export var staps9:Conference = {
  name: '9. STaPS',
  key: 'staps9',
  place: 'Köln',
  date: 'Herbst 2016',
  avatar: 'http://staps.stuts.eu/wp-content/uploads/2013/07/STaPs_Logo.png',
  showBackButton: true,
  labels: {},
  registration: [{
    type: 'Caption',
    title: 'Willkommen bei der Anmeldung zur 9. STaPs'
  }, {
    type: 'TextInput',
    key: 'name',
    caption: 'Name'
  }]
};

export var pundp12:Conference = {
  name: 'P&P 12',
  key: 'pundp12',
  place: 'LMU München, Institut für Phonetik und Sprachverarbeitung',
  date: '13./14.10.2016',
  avatar: '',
  showBackButton: false,
  labels: {},
  registration: [{
    type: 'Caption',
    title: 'Willkommen zur 12. Tagung Phonetik & Phonologie im' +
    ' deutschsprachigen Raum!',
    text: 'Auf dieser Seite können Sie sich zur P&P12 anmelden, welche am' +
    ' 13./14.10.2016 an der München Ludwig-Maximilians-Universität, am' +
    ' Institut für Phonetik und Sprachverarbeitung, stattfinden wird. Alle' +
    ' Informationen rund um die Tagung finden Sie auf der Homepage unter' +
    ' http://phonetik.uni-muenchen.de/institut/veranstaltung'
  }]
};


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

  private _conferences:Conference[] = [stuts60, staps9, pundp12];
}

// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {Injectable} from "@angular/core";

export function isCaptionItem(item:CaptionItem | LinkItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem):item is CaptionItem {
  return (item.type === 'Caption');
}
export function isLinkItem(item:CaptionItem | LinkItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem):item is LinkItem {
  return (item.type === 'Link');
}
export function isTextInputItem(item:CaptionItem | LinkItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem):item is TextInputItem {
  return (item.type === 'TextInput');
}
export function isSingleChoiceItem(item:CaptionItem | LinkItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem):item is SingleChoiceItem {
  return (item.type === 'SingleChoice');
}
export function isMultipleChoiceItem(item:CaptionItem | LinkItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem):item is MultipleChoiceItem {
  return (item.type === 'MultipleChoice');
}

export interface CaptionItem {
  type:'Caption';
  title?:string;
  text?:string;
}

export interface LinkItem {
  type:'Link';
  href:string;
  label?:string;
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
  choices:Array<{key:string, caption:string}>;
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
  registration:Array<CaptionItem|LinkItem|SingleChoiceItem|MultipleChoiceItem|TextInputItem>;
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
    caption: 'Hochschule',
    optional: true
  }, {
    type: 'TextInput',
    key: 'email',
    caption: 'E-Mail',
    pattern: 'email',
  }, {
    type: 'SingleChoice',
    key: 'ausheidelberg',
    caption: 'Bis du aus Heidelberg oder brauchst aus irgendeinem anderen Grund keine Übernachtungsmöglichkeit?',
    choices: [{
      key: 'ja',
      caption: 'Ja.'
    }, {
      key: 'no',
      caption: 'Nein, ich brauche eine Übernachtungsmöglichkeit.'
    }]
  }, {
    type: 'SingleChoice',
    key: 'teilnahme',
    caption: 'An welchen Tagen möchtest du an der StuTS teilnehmen?',
    choices: [{
      key: 'do',
      caption: 'Nur am Donnerstag (ohne Übernachtung). (12 Euro)'
    }, {
      key: 'fr',
      caption: 'Nur am Freitag (ohne Übernachtung). (12 Euro)'
    }, {
      key: 'sa',
      caption: 'Nur am Samstag (ohne Übernachtung). (12 Euro)'
    }, {
      key: 'ganz',
      caption: 'Zwei Tage oder die gesamte Tagung (mit Übernachtungen). (30 Euro für Auswärtige, 15 Euro für Heidelberger Studierende)'
    }]
  }, {
    type: 'MultipleChoice',
    key: 'schlafangebote',
    caption: 'Für die Heidelberger Studierenden: Für welche Nächte kannst' +
    ' du auswärtigen Studierenden Übernachtungsmöglichkeiten anbieten?',
    hint: 'Näheres zur Aktion der Übernachtungsmöglichkeiten für Studierende findet ihr unter https://60.stuts.de/foobar.',
    choices: [{
      key: 'mido',
      caption: 'Von Mittwoch auf Donnerstag.'
    }, {
      key: 'dofr',
      caption: 'Von Donnerstag auf Freitag.'
    }, {
      key: 'frsa',
      caption: 'Von Freitag auf Samstag.'
    }, {
      key: 'saso',
      caption: 'Von Samstag auf Sonntag.'
    }]
  }, {
    type: 'SingleChoice',
    key: 'essen',
    choices: [{
      key: 'fleisch',
      caption: 'Ich esse Fleisch.'
    }, {
      key: 'vegetarisch',
      caption: 'Ich esse vegetarisch (d. h. auch Tierprodukte)'
    }, {
      key: 'vegan',
      caption: 'Ich esse vegan.'
    }]
  }, {
    type: 'SingleChoice',
    key: 'brunch',
    caption: 'Nimmst Du am Abschlussbrunch am Sonntag teil? Das kostet 8 Euro mehr.',
    choices: [{
      key: 'ja',
      caption: 'Ja.'
    }, {
      key: 'no',
      caption: 'Nein.'
    }]
  }, {
    type: 'SingleChoice',
    title: 'Zustimmung für Bilder',
    caption: 'Gibst du den Organisierenden der 60. StuTS die Erlaubnis, Bilder von der StuTS zu veröffentlichen, auf denen du abgebildest bist?',
    choices: [{
      key: 'ja',
      caption: 'Ja.'
    }, {
      key: 'nein',
      caption: 'Nein.'
    }]
  }, {
    type: 'Caption',
    title: 'Abschluss der Anmeldung',
    text: 'Nach dem Abschicken der Anmeldung, erhältst du eine E-Mail mit den Kontoinformationen. Bitte überweise dahin das Geld.<br>Bei weiteren Fragen könnt ihr uns eine E-Mail an stuts60@stuts.de schicken.'
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
    ' Informationen rund um die Tagung finden Sie auf der unten' +
    ' verlinkten Homepage.'
  }, {
    type: 'Link',
    href: 'http://phonetik.uni-muenchen.de/institut/veranstaltungen/pundp12',
    label: 'Tagungshomepage'
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

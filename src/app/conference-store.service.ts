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

export var stuts60_de: Conference = {
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
    caption: 'Nachname',
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
    caption: 'Bist du aus Heidelberg oder brauchst aus irgendeinem anderen' +
    ' Grund keine Übernachtungsmöglichkeit?',
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
    caption: 'Für die Heidelberger Studierenden: Für welche Nächte kannst du auswärtigen Studierenden Übernachtungsmöglichkeiten anbieten?',
    hint: 'Näheres zur Aktion der Übernachtungsmöglichkeiten für Studierende findet ihr auf unserer Webseite.',
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
    key: 'anreise',
    caption: 'Für die auswärtigen Studierenden: Reist du bereits am Mittwoch' +
    ' an?',
    choices: [{
      key: 'ja',
      caption: 'Ja.'
    }, {
      key: 'no',
      caption: 'Nein.'
    }]
  }, {
    type: 'SingleChoice',
    key: 'vortrag',
    caption: 'Planst du einen Vortrag zu halten?',
    choices: [{
      key: 'ja',
      caption: 'Ja.'
    }, {
      key: 'no',
      caption: 'Nein.'
    }]
  }, {
    type: 'SingleChoice',
    key: 'essen',
    caption: 'Wie steht es um deine Ernährung?',
    choices: [{
      key: 'fleisch',
      caption: 'Ich esse Fleisch.'
    }, {
      key: 'vegetarian',
      caption: 'Ich esse vegan oder vegetarisch.
    }]
  }, {
    type: 'SingleChoice',
    key: 'brunch',
    caption: 'Nimmst Du am Abschlussbrunch am Sonntag teil?',
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
    caption: 'Gibst du dem Organisationsteam der 60. StuTS die Erlaubnis, Bilder von der StuTS zu veröffentlichen, auf denen du abgebildest bist.'
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
    text: 'Nach dem Abschicken der Anmeldung, erhältst du eine E-Mail mit' +
    ' den Kontoinformationen. Bitte überweise den Teilnahmebetrag so bald' +
    ' wie möglich. Bei weiteren Fragen könnt ihr uns eine E-Mail an' +
    ' stuts60@stuts.de schicken.'
  }]
};

export var stuts60_en: Conference = {
  name: 'LX. StuTS',
  key: 'stuts60',
  place: 'Heidelberg',
  date: 'Herbst 2016',
  avatar: 'http://stuts.de/esh.png',
  showBackButton: true,
  labels: {},
  registration: [{
    type: 'Caption',
    title: 'Welcome!',
    text: 'Welcome to the registration for the LX. StuTS'
  }, {
    type: 'TextInput',
    key: 'name',
    caption: 'Last Name',
  }, {
    type: 'TextInput',
    key: 'vorname',
    caption: 'First Name'
  }, {
    type: 'TextInput',
    key: 'affiliation',
    caption: 'University',
    optional: true
  }, {
    type: 'TextInput',
    key: 'email',
    caption: 'E-Mail',
    pattern: 'email',
  }, {
    type: 'SingleChoice',
    key: 'ausheidelberg',
    caption: 'Do you live in Heidelberg or do you (for any other reason) <i>not</i> need accomodation?',
    choices: [{
      key: 'ja',
      caption: 'Yes.'
    }, {
      key: 'no',
      caption: 'No, I need accomodation.'
    }]
  }, {
    type: 'SingleChoice',
    key: 'teilnahme',
    caption: 'When would you like to attend the StuTS?',
    choices: [{
      key: 'do',
      caption: 'Thursday only (without accomodation). (12 Euro)'
    }, {
      key: 'fr',
      caption: 'Friday only (without accomodation). (12 Euro)'
    }, {
      key: 'sa',
      caption: 'Saturday only (without accomodation). (12 Euro)'
    }, {
      key: 'ganz',
      caption: ' For 2 days or the entire congress (including accomodation). (30 Euro for Students from out-of-town, 15 Euro for Students from Heidelberg)'
    }]
  }, {
    type: 'MultipleChoice',
    key: 'schlafangebote',
    caption: 'Students from Heidelberg: Would you be willing to accomodate students from out-of-town? If yes, when?'
    hint: 'You can find further information on students from Heidelberg accomodating visitors on our website.',
    choices: [{
      key: 'mido',
      caption: ' Staying Wednesday night.'
    }, {
      key: 'dofr',
      caption: ' Staying Thursday night.'
    }, {
      key: 'frsa',
      caption: ' Staying Friday night.'
    }, {
      key: 'saso',
      caption: 'Staying Saturday night.'
    }]
  }, {
    type: 'SingleChoice',
    key: 'anreise',
    caption 'Students from out-of-town: Are you arriving on Wednesday?',
    choices: [{
      key: 'ja',
      caption: 'Yes.'
    }, {
      key: 'no',
      caption: 'No.'
    }]
  }, {
    type: 'SingleChoice',
    key: 'vortrag',
    caption: 'Are you planning to give a presentation?',
    choices: [{
      key: 'ja',
      caption: 'Yes.'
    }, {
      key: 'no',
      caption: 'No.'
    }]
  }, {
    type: 'SingleChoice',
    key: 'essen',
    caption: 'What do you eat?',
    choices: [{
      key: 'fleisch',
      caption: 'I eat meat.'
    }, {
      key: 'vegetarian',
      caption: 'I’m vegan or vegetarian.
    }]
  }, {
    type: 'SingleChoice',
    key: 'brunch',
    caption: 'Are you joining the brunch on Sunday?',
    choices: [{
      key: 'ja',
      caption: 'Yes.'
    }, {
      key: 'no',
      caption: 'No.'
    }]
  }, {
    type: 'SingleChoice',
    title: 'Agreement for pictures',
    caption: 'Do you permit the organization team to publish pictures taken at the StuTS showing you?'
    key: 'ja',
    caption: 'Yes.'
  }, {
    key: 'nein',
    caption: 'No.'
  }, {
    type: 'Caption',
    title: 'Finishing your registration',
    text: 'After finishing your registration, you will receive an email with' +
    ' information regarding the bank account. Please transfer your fee to this account as soon as possible. For further questions feel free to send us an email to stuts60@stuts.de.'
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

  private _conferences: Conference[] = [stuts60_de, stuts60_en];
}

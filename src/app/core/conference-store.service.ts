// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

export function isCaptionItem(item: CaptionItem | LinkItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem): item is CaptionItem {
	return (item.type === 'Caption');
}
export function isLinkItem(item: CaptionItem | LinkItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem): item is LinkItem {
	return (item.type === 'Link');
}
export function isTextInputItem(item: CaptionItem | LinkItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem): item is TextInputItem {
	return (item.type === 'TextInput');
}
export function isSingleChoiceItem(item: CaptionItem | LinkItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem): item is SingleChoiceItem {
	return (item.type === 'SingleChoice');
}
export function isMultipleChoiceItem(item: CaptionItem | LinkItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem): item is MultipleChoiceItem {
	return (item.type === 'MultipleChoice');
}

export interface CaptionItem {
	type: 'Caption';
	title?: string;
	text?: string;
}

export interface LinkItem {
	type: 'Link';
	href: string;
	label?: string;
}

export interface TextInputItem {
	type: 'TextInput';
	key: string;
	caption: string;
	optional?: boolean;
	hint?: string;
	pattern?: string;
}

export interface SingleChoiceItem {
	type: 'SingleChoice';
	key: string;
	caption: string;
	choices: Array<{key: string, caption: string}>;
}

export interface MultipleChoiceItem {
	type: 'MultipleChoice';
	key: string;
	caption: string;
	choices: Array<{key: string, caption: string}>;
}

export interface LabelList {
	headline?: string;
	submit?: string;
	abort?: string;
	back?: string;
	submitQuestion?: string;
}

export interface Conference {
	name: string;
	key: string;
	place: string;
	date: string;
	avatar: string;
	showBackButton: boolean;
	labels: LabelList;
	registration: Array<CaptionItem|LinkItem|SingleChoiceItem|MultipleChoiceItem|TextInputItem>;
}

@Injectable()
export class ConferenceStoreService {
	private url: string = 'https://anmeldung.stuts.de/data/conferences.json';

	constructor(private http: Http) {
	}

	getConferences(): Promise<Conference[]> {
		return this.http.get(this.url)
			.toPromise()
			.then(response => response.json() as Conference[])
			.catch(() => {
				return Promise.reject('Could not load conferences');
			});
	}

	getConference(key: string): Promise<Conference> {
		return this.getConferences()
			.then(conferences => {
				for (let i = 0; i < conferences.length; ++i) {
					if (conferences[i].key === key) {
						return conferences[i];
					}
				}

				return null;
			})
			.catch(() => {
				return Promise.reject('Could not load conferences');
			});
	}
}

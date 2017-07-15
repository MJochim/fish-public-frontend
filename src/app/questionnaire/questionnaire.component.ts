import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges
} from "@angular/core";
import {Conference} from "../core/conference.interface";
import {LinkItem} from "app/core/link-item.interface";
import {CaptionItem} from "../core/caption-item.interface";
import {TextInputItem} from "../core/text-input-item.interface";
import {SingleChoiceItem} from "../core/single-choice-item.interface";
import {MultipleChoiceItem} from "../core/multiple-choice-item.interface";
import {isTextInputItem} from "../core/type-guards/is-text-input-item.function";
import {isSingleChoiceItem} from "../core/type-guards/is-single-choice-item.function";
import {isMultipleChoiceItem} from "app/core/type-guards/is-multiple-choice-item.function";

@Component({
	selector: 'confreg-questionnaire',
	templateUrl: './questionnaire.component.html',
	styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnChanges {
	@Input() set conference (c: Conference) {
		this._conference = c;
		if (c) {
			this.nextKey = c.registration.length;
		} else {
			this.nextKey = 1;
		}
	};
	get conference (): Conference {
		return this._conference;
	}
	@Input() editable: boolean;
	@Output() onChange = new EventEmitter<Object>();

	private _conference: Conference;
	private currentlyEditing = {};
	private _inputModel: Object = {};
	private nextKey: number = 1;

	set inputModel(inputModel: Object) {
		this._inputModel = inputModel;
		this.onChange.emit(inputModel);
	}

	get inputModel() {
		return this._inputModel;
	}

	constructor() {
	}

	ngOnChanges(changes: SimpleChanges) {
		if (!this.conference) {
			this.inputModel = {};
		} else {
			//////////
			// Initialise inputModel
			//
			this.inputModel['conferenceKey'] = this.conference.key;

			for (let i = 0; i < this.conference.registration.length; ++i) {
				let item = this.conference.registration[i];
				if (isTextInputItem(item)) {
					this.inputModel[item.key] = '';
				}

				if (isSingleChoiceItem(item)) {
					if (item.choices.length > 0) {
						this.inputModel[item.key] = item.choices[0].key;
					} else {
						this.inputModel[item.key] = null;
					}
				}

				if (isMultipleChoiceItem(item)) {
					for (let j = 0; j < item.choices.length; ++j) {
						this.inputModel[item.choices[j].key] = false;
					}
				}
			}
			//
			//////////
		}
	}

	private toggleEditing (key:string) {
		this.currentlyEditing[key] = !this.currentlyEditing[key];
	}


	public addItem (type: string) {
		let newItem: CaptionItem | LinkItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem;
		let key: string = 'item' + this.nextKey;
		++this.nextKey;

		switch (type) {
			case 'Caption':
				newItem = {
					type: type,
					key: key,
					title: 'Heading',
					text: 'Captions may contain a heading and also some' +
					' longer informational text.'
				};
				break;

			case 'Link':
				newItem = {
					type: type,
					key: key,
					href: 'https://',
					label: 'This is a simple link'
				};
				break;

			case 'TextInput':
				newItem = {
					type: type,
					key: key,
					caption: 'Another field',
					optional: false,
					hint: 'Text inputs let users enter any text they wish.',
					pattern: ''
				};
				break;

			case 'SingleChoice':
				newItem = {
					type: type,
					key: key,
					caption: 'Single choice item',
					choices: []
				};
				break;

			case 'MultipleChoice':
				newItem = {
					type: type,
					key: key,
					caption: 'Multiple choice item',
					choices: [],
				};
				break;
		}

		this.conference.registration.push(newItem);
	}

	public removeItem(key: string) {
		for (let i = 0; i < this.conference.registration.length; ++i) {
			if (this.conference.registration[i].key === key) {
				this.conference.registration.splice(i, 1);
				return;
			}
		}
	}

	public moveUp (itemContainer: HTMLElement, key: string) {
		// We start at 1 instead of 0 because 0 can't be moved up
		for (let i = 1; i < this.conference.registration.length; ++i) {
			if (this.conference.registration[i].key === key) {
				// Split array into four slices
				let a = this.conference.registration.slice(0, i - 1);
				let b = this.conference.registration.slice(i - 1, i);
				let c = this.conference.registration.slice(i, i + 1);
				let d = this.conference.registration.slice(i + 1);

				// Stick the four slices back together in their new order
				this.conference.registration = a.concat(c).concat(b).concat(d);

				//
				// Try to scroll to the new position of the clicked button
				//
				let clickedButton = itemContainer.querySelector('button');
				let otherButton = itemContainer.previousElementSibling.querySelector('button');

				let distance = otherButton.getBoundingClientRect().top - clickedButton.getBoundingClientRect().top;

				if (window.scrollY + distance >= 0) {
					window.scrollBy(0, distance);
				}

				return;
			}
		}
	}

	public moveDown (itemContainer: HTMLElement, key: string) {
		// We stop right before the last element because the last one cannot
		// be moved down
		for (let i = 0; i < this.conference.registration.length - 1; ++i) {
			if (this.conference.registration[i].key === key) {
				// Split array into four slices
				let a = this.conference.registration.slice(0, i);
				let b = this.conference.registration.slice(i, i + 1);
				let c = this.conference.registration.slice(i + 1, i + 2);
				let d = this.conference.registration.slice(i + 2);

				// Stick the four slices back together in their new order
				this.conference.registration = a.concat(c).concat(b).concat(d);

				//
				// Try to scroll to the new position of the clicked button
				//
				let clickedButton = itemContainer.querySelector('button');
				let otherButton = itemContainer.nextElementSibling.querySelector('button');

				let distance = otherButton.getBoundingClientRect().top - clickedButton.getBoundingClientRect().top;
				distance -= itemContainer.querySelector('md-card').clientHeight;
				distance += itemContainer.nextElementSibling.querySelector('md-card').clientHeight;

				if (window.scrollY + window.innerHeight + distance <= document.querySelector('body').scrollHeight) {
					window.scrollBy(0, distance);
				}

				return;
			}
		}
	}
}

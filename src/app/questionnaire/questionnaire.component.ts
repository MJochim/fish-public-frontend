import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges
} from "@angular/core";
import {LinkItem} from "app/core/link-item.interface";
import {CaptionItem} from "../core/caption-item.interface";
import {TextInputItem} from "../core/text-input-item.interface";
import {SingleChoiceItem} from "../core/single-choice-item.interface";
import {MultipleChoiceItem} from "../core/multiple-choice-item.interface";
import {isTextInputItem} from "../core/type-guards/is-text-input-item.function";
import {isSingleChoiceItem} from "../core/type-guards/is-single-choice-item.function";
import {isMultipleChoiceItem} from "app/core/type-guards/is-multiple-choice-item.function";
import {MdDialog} from "@angular/material";
import {UserAlertComponent} from "app/user-alert/user-alert.component";

@Component({
	selector: 'confreg-questionnaire',
	templateUrl: './questionnaire.component.html',
	styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnChanges {
	@Input() conferenceKey: string;
	@Input() editable: boolean;

	@Input() set items(i: Array<CaptionItem
		| LinkItem
		| SingleChoiceItem
		| MultipleChoiceItem
		| TextInputItem>) {
		this.setItems(i);
	}

	get items(): Array<CaptionItem
		| LinkItem
		| SingleChoiceItem
		| MultipleChoiceItem
		| TextInputItem> {
		return this._items;
	}

	@Output() onChange = new EventEmitter<Object>();
	@Output() onEdit = new EventEmitter<Array<CaptionItem
		| LinkItem
		| SingleChoiceItem
		| MultipleChoiceItem
		| TextInputItem>>();

	private _items: Array<CaptionItem
		| LinkItem
		| SingleChoiceItem
		| MultipleChoiceItem
		| TextInputItem> = [];
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

	constructor(private dialog: MdDialog) {
	}

	ngOnChanges(changes: SimpleChanges) {
		if (!this.items) {
			this.inputModel = {};
		} else {
			//////////
			// Initialise inputModel
			//
			this.inputModel['conferenceKey'] = this.conferenceKey;

			for (let i = 0; i < this.items.length; ++i) {
				let item = this.items[i];
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

	public toggleEditing(key: string) {
		this.currentlyEditing[key] = !this.currentlyEditing[key];

		if (this.currentlyEditing[key] === false) {
			this.onEdit.emit(this.items);
		}
	}

	public changeKey(item: CaptionItem
		| LinkItem
		| SingleChoiceItem
		| MultipleChoiceItem
		| TextInputItem,
	                 newKey: string) {

		let oldKey = item.key;

		if (oldKey === newKey) {
			this.dialog.open(UserAlertComponent, {
				data: {message: 'Enter a new key first'}
			});
			return;
		}

		for (let currentItem of this.items) {
			if (currentItem.key === newKey) {
				this.dialog.open(UserAlertComponent, {
					data: {message: 'Key "' + newKey + '" already exists.'}
				});
				return;
			}
		}

		let editing = this.currentlyEditing[item.key];
		delete this.currentlyEditing[item.key];
		this.currentlyEditing[newKey] = editing;

		item.key = newKey;

		this.onEdit.emit(this.items);

		this.dialog.open(UserAlertComponent, {
			data: {message: 'Key was changed from "' + oldKey + '" to "' + newKey + '"'}
		});
	}

	public addItem(type: string) {
		let newItem: CaptionItem
			| LinkItem
			| TextInputItem
			| SingleChoiceItem
			| MultipleChoiceItem;
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

		this.items.push(newItem);
		this.onEdit.emit(this.items);
	}

	public removeItem(key: string) {
		for (let i = 0; i < this.items.length; ++i) {
			if (this.items[i].key === key) {
				this.items.splice(i, 1);
				this.onEdit.emit(this.items);
				return;
			}
		}
	}

	public addChoice(item: MultipleChoiceItem | SingleChoiceItem) {
		// Determine an unused key for the new choice
		let nextKey: number = item.choices.length + 1;

		let keys: string[] = item.choices.map(x => x.key);

		while (keys.indexOf('choice' + nextKey) !== -1) {
			++nextKey;
		}

		item.choices.push({
			key: 'choice' + nextKey,
			caption: ''
		});
	}

	public removeChoice(item: MultipleChoiceItem
		| SingleChoiceItem, choiceKey: string) {
		for (let i = 0; i < item.choices.length; ++i) {
			if (item.choices[i].key === choiceKey) {
				item.choices.splice(i, 1);
				return;
			}
		}
	}

	public moveUp(itemContainer: HTMLElement, key: string) {
		// We start at 1 instead of 0 because 0 can't be moved up
		for (let i = 1; i < this.items.length; ++i) {
			if (this.items[i].key === key) {
				// Split array into four slices
				let a = this.items.slice(0, i - 1);
				let b = this.items.slice(i - 1, i);
				let c = this.items.slice(i, i + 1);
				let d = this.items.slice(i + 1);

				// Stick the four slices back together in their new order
				this.items = a.concat(c).concat(b).concat(d);

				this.onEdit.emit(this.items);

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

	public moveDown(itemContainer: HTMLElement, key: string) {
		// We stop right before the last element because the last one cannot
		// be moved down
		for (let i = 0; i < this.items.length - 1; ++i) {
			if (this.items[i].key === key) {
				// Split array into four slices
				let a = this.items.slice(0, i);
				let b = this.items.slice(i, i + 1);
				let c = this.items.slice(i + 1, i + 2);
				let d = this.items.slice(i + 2);

				// Stick the four slices back together in their new order
				this.items = a.concat(c).concat(b).concat(d);

				this.onEdit.emit(this.items);

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

	private setItems(i: Array<CaptionItem
		| LinkItem
		| SingleChoiceItem
		| MultipleChoiceItem
		| TextInputItem>) {
		if (i) {
			this._items = i;
			this.nextKey = i.length;
			this.onEdit.emit(i);
		}
	}
}

import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges
} from "@angular/core";
import {
	Conference,
	isMultipleChoiceItem,
	isSingleChoiceItem,
	isTextInputItem
} from "../core/conference-store.service";

@Component({
	selector: 'confreg-questionnaire',
	templateUrl: './questionnaire.component.html',
	styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnChanges {
	@Input() conference: Conference;
	@Output() onChange = new EventEmitter<Object>();

	private _inputModel: Object = {};


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
					this.inputModel[item.key] = item.choices[0].key;
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

}

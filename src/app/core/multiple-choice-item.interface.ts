export interface MultipleChoiceItem {
	type: 'MultipleChoice';
	key: string;
	caption: string;
	choices: Array<{key: string, caption: string}>;
}

export interface SingleChoiceItem {
	type: 'SingleChoice';
	key: string;
	caption: string;
	choices: Array<{ key: string, caption: string }>;
}

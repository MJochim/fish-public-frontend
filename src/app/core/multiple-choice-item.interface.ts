// (c) 2016-2020 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

export interface MultipleChoiceItem {
	type: 'MultipleChoice';
	key: string;
	caption: string;
	choices: Array<{ key: string, caption: string }>;
}

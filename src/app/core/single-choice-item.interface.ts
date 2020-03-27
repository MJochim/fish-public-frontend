// (c) 2016-2020 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

export interface SingleChoiceItem {
	type: 'SingleChoice';
	key: string;
	caption: string;
	choices: Array<{ key: string, caption: string }>;
}

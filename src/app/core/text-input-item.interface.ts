// (c) 2016-2020 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

export interface TextInputItem {
	type: 'TextInput';
	key: string;
	caption: string;
	optional?: boolean;
	hint?: string;
	pattern?: string;
	longText?: boolean;
	rows?: number;
}

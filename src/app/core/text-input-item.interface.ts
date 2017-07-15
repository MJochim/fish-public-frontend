export interface TextInputItem {
	type: 'TextInput';
	key: string;
	caption: string;
	optional?: boolean;
	hint?: string;
	pattern?: string;
}

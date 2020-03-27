// (c) 2016-2020 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

export interface LinkItem {
	type: 'Link';
	key: string;
	href: string;
	label?: string;
}

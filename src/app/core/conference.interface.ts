// (c) 2016-2020 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {LabelList} from "./label-list.interface";
import {CaptionItem} from "./caption-item.interface";
import {LinkItem} from "./link-item.interface";
import {SingleChoiceItem} from "./single-choice-item.interface";
import {MultipleChoiceItem} from "./multiple-choice-item.interface";
import {TextInputItem} from "./text-input-item.interface";

export interface Conference {
	name: string;
	key: string;
	place: string;
	date: string;
	pictureUrl: string;
	labels: LabelList;
	registration: Array<CaptionItem
		| LinkItem
		| SingleChoiceItem
		| MultipleChoiceItem
		| TextInputItem>;
}

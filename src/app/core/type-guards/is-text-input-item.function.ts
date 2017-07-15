import {CaptionItem} from "../caption-item.interface";
import {LinkItem} from "../link-item.interface";
import {TextInputItem} from "../text-input-item.interface";
import {SingleChoiceItem} from "../single-choice-item.interface";
import {MultipleChoiceItem} from "../multiple-choice-item.interface";

export function isTextInputItem(item: CaptionItem | LinkItem | TextInputItem | SingleChoiceItem | MultipleChoiceItem): item is TextInputItem {
	return (item.type === 'TextInput');
}

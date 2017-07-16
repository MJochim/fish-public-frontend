import {Routes} from "@angular/router";
import {ConferenceListComponent} from "./conference-list/conference-list.component";
import {ConferenceComponent} from "./conference/conference.component";
import {EditorComponent} from "./editor/editor.component";


export const appRoutes: Routes = [
	{path: 'editor/:key', component: EditorComponent},
	{path: ':key', component: ConferenceComponent},
	{path: '', component: ConferenceListComponent},
];

export const appRoutingProviders: any[] = [];

import {Routes} from "@angular/router";
import {ConferenceListComponent} from "./conference-list/conference-list.component";
import {ConferenceComponent} from "./conference/conference.component";
import {EditorComponent} from "./editor/editor.component";


export const appRoutes: Routes = [
	{path: 'conference/:key', component: ConferenceComponent},
	{path: 'editor', component: EditorComponent},
	{path: '', component: ConferenceListComponent},
];

export const appRoutingProviders: any[] = [];

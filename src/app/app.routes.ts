import {Routes} from "@angular/router";
import {ConferenceListComponent} from "./+conference-list/conference-list.component";
import {ConferenceComponent} from "./+conference/conference.component";


export const appRoutes:Routes = [
	{path: 'conference/:key', component: ConferenceComponent},
	{path: 'list', component: ConferenceListComponent},
	{path: '', redirectTo: '/list', pathMatch: 'full'}
];

export const appRoutingProviders:any[] = [];

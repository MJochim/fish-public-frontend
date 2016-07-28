import {provideRouter, RouterConfig} from "@angular/router";
import {ConferenceListComponent} from "./+conference-list/conference-list.component";
import {ConferenceComponent} from "./+conference/conference.component";

const routes:RouterConfig = [
  {path: 'conference/:key', component: ConferenceComponent},
  {path: 'list', component: ConferenceListComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

export const appRouterProviders = [
  provideRouter(routes)
];

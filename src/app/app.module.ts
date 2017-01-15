import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {ConferenceRegistrationComponent} from "./conference-registration.component";
import {ConferenceListComponent} from "./+conference-list/conference-list.component";
import {ConferenceComponent} from "./+conference/conference.component";
import {ConferenceStoreService} from "./conference-store.service";
import {MaterialModule} from "@angular/material";

@NgModule({
	declarations: [
		ConferenceRegistrationComponent,
		ConferenceListComponent,
		ConferenceComponent,
	],
	imports: [
		// Angular stuff
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes),
		MaterialModule.forRoot()
	],
	bootstrap: [ConferenceRegistrationComponent],
	providers: [
		ConferenceStoreService
	]
})
export class AppModule {
}

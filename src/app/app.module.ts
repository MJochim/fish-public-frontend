import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {ConferenceRegistrationComponent} from "./conference-registration.component";
import {ConferenceListComponent} from "./conference-list/conference-list.component";
import {ConferenceComponent} from "./conference/conference.component";
import {ConferenceStoreService} from "./core/conference-store.service";
import {
		MdCardModule,
		MdInputModule,
		MdRadioModule,
		MdSidenavModule,
		MdToolbarModule
} from "@angular/material";
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

@NgModule({
	declarations: [
		ConferenceRegistrationComponent,
		ConferenceListComponent,
		ConferenceComponent,
		QuestionnaireComponent,
	],
	imports: [
		// Angular stuff
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes),
		BrowserAnimationsModule,
		MdCardModule,
		MdInputModule,
		MdRadioModule,
		MdSidenavModule,
		MdToolbarModule
	],
	bootstrap: [ConferenceRegistrationComponent],
	providers: [
		ConferenceStoreService
	]
})
export class AppModule {
}

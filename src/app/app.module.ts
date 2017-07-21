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
	MdButtonModule,
	MdButtonToggleModule,
	MdCardModule,
	MdCheckboxModule,
	MdChipsModule,
	MdDialogModule,
	MdIconModule,
	MdInputModule,
	MdListModule,
	MdProgressSpinnerModule,
	MdRadioModule,
	MdSidenavModule,
	MdSlideToggleModule,
	MdToolbarModule
} from "@angular/material";
import {QuestionnaireComponent} from "./questionnaire/questionnaire.component";
import {EditorComponent} from "./editor/editor.component";
import {UserAlertComponent} from "./user-alert/user-alert.component";

@NgModule({
	declarations: [
		ConferenceRegistrationComponent,
		ConferenceListComponent,
		ConferenceComponent,
		QuestionnaireComponent,
		EditorComponent,
		UserAlertComponent,
	],
	imports: [
		// Angular stuff
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes),
		BrowserAnimationsModule,
		MdButtonModule,
		MdButtonToggleModule,
		MdCardModule,
		MdCheckboxModule,
		MdChipsModule,
		MdDialogModule,
		MdIconModule,
		MdInputModule,
		MdListModule,
		MdProgressSpinnerModule,
		MdRadioModule,
		MdSidenavModule,
		MdSlideToggleModule,
		MdToolbarModule
	],
	bootstrap: [ConferenceRegistrationComponent],
	entryComponents: [
		UserAlertComponent
	],
	providers: [
		ConferenceStoreService
	]
})
export class AppModule {
}

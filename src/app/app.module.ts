import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {ConferenceRegistrationComponent} from "./conference-registration.component";
import {ConferenceListComponent} from "./conference-list/conference-list.component";
import {ConferenceComponent} from "./conference/conference.component";
import {ConferenceStoreService} from "./core/conference-store.service";
import {
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDialogModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatSidenavModule,
	MatSlideToggleModule,
	MatToolbarModule
} from "@angular/material";
import {QuestionnaireComponent} from "./questionnaire/questionnaire.component";
import {EditorComponent} from "./editor/editor.component";
import {UserAlertComponent} from "./user-alert/user-alert.component";
import {UserConfirmationComponent} from "./user-confirmation/user-confirmation.component";

@NgModule({
	declarations: [
		ConferenceRegistrationComponent,
		ConferenceListComponent,
		ConferenceComponent,
		QuestionnaireComponent,
		EditorComponent,
		UserAlertComponent,
		UserConfirmationComponent,
	],
	imports: [
		// Angular stuff
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes),
		BrowserAnimationsModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDialogModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatSidenavModule,
		MatSlideToggleModule,
		MatToolbarModule
	],
	bootstrap: [ConferenceRegistrationComponent],
	entryComponents: [
		UserAlertComponent,
		UserConfirmationComponent
	],
	providers: [
		ConferenceStoreService
	]
})
export class AppModule {
}

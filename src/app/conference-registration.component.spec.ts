// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {
	beforeEachProviders,
	describe,
	expect,
	it,
	inject
} from "@angular/core/testing";
import {ConferenceRegistrationAppComponent} from "../app/conference-registration.component";

beforeEachProviders(() => [ConferenceRegistrationAppComponent]);

describe('App: ConferenceRegistration', () => {
	it('should create the app',
		inject([ConferenceRegistrationAppComponent], (app: ConferenceRegistrationAppComponent) => {
			expect(app).toBeTruthy();
		}));
});

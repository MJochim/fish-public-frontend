import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ConferenceRegistrationAppComponent } from '../app/conference-registration.component';

beforeEachProviders(() => [ConferenceRegistrationAppComponent]);

describe('App: ConferenceRegistration', () => {
  it('should create the app',
      inject([ConferenceRegistrationAppComponent], (app: ConferenceRegistrationAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'conference-registration works!\'',
      inject([ConferenceRegistrationAppComponent], (app: ConferenceRegistrationAppComponent) => {
    expect(app.title).toEqual('conference-registration works!');
  }));
});

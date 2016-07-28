// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {ConferenceRegistrationAppComponent, environment} from './app/';
import {appRouterProviders} from "./app/conference-registration.routes";

if (environment.production) {
  enableProdMode();
}

bootstrap(ConferenceRegistrationAppComponent, [
  appRouterProviders,
  disableDeprecatedForms(),
  provideForms()
]);

import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import {ConferenceRegistrationAppComponent, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ConferenceRegistrationAppComponent, [ROUTER_PROVIDERS]);

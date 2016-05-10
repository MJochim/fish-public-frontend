// (c) 2016 Markus Jochim <markus.jochim@phonetik.uni-muenchen.de>

import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ConferenceStoreService } from './conference-store.service';

describe('ConferenceStore Service', () => {
  beforeEachProviders(() => [ConferenceStoreService]);

  it('should ...',
      inject([ConferenceStoreService], (service: ConferenceStoreService) => {
    expect(service).toBeTruthy();
  }));
});

import { ConferenceRegistrationPage } from './app.po';

describe('conference-registration App', function() {
  let page: ConferenceRegistrationPage;

  beforeEach(() => {
    page = new ConferenceRegistrationPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('conference-registration works!');
  });
});

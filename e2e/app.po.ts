export class ConferenceRegistrationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('conference-registration-app h1')).getText();
  }
}

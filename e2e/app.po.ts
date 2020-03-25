export class FishPublicFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fish-public-frontend-app h1')).getText();
  }
}

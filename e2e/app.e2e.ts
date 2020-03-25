import { FishPublicFrontendPage } from './app.po';

describe('fish-public-frontend App', function() {
  let page: FishPublicFrontendPage;

  beforeEach(() => {
    page = new FishPublicFrontendPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fish-public-frontend works!');
  });
});

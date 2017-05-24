import { LiveSearchPage } from './app.po';

describe('live-search App', () => {
  let page: LiveSearchPage;

  beforeEach(() => {
    page = new LiveSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

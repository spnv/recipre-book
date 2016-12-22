import { RecipreBookPage } from './app.po';

describe('recipre-book App', function() {
  let page: RecipreBookPage;

  beforeEach(() => {
    page = new RecipreBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});

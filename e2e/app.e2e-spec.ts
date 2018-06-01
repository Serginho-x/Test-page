import { TestPagePage } from './app.po';

describe('test-page App', function() {
  let page: TestPagePage;

  beforeEach(() => {
    page = new TestPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

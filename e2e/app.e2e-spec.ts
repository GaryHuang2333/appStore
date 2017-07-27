import { AppStorePage } from './app.po';

describe('app-store App', () => {
  let page: AppStorePage;

  beforeEach(() => {
    page = new AppStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

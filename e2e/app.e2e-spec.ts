import { D3EPSPage } from './app.po';

describe('d3-eps App', () => {
  let page: D3EPSPage;

  beforeEach(() => {
    page = new D3EPSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

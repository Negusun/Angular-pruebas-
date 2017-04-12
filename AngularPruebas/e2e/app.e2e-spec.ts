import { AngularPruebasPage } from './app.po';

describe('angular-pruebas App', () => {
  let page: AngularPruebasPage;

  beforeEach(() => {
    page = new AngularPruebasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

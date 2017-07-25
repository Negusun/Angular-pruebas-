import { AuthPage } from './app.po';

describe('auth App', () => {
  let page: AuthPage;

  beforeEach(() => {
    page = new AuthPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

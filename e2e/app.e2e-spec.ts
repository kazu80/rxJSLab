import { RxJSLabPage } from './app.po';

describe('rx-jslab App', () => {
  let page: RxJSLabPage;

  beforeEach(() => {
    page = new RxJSLabPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

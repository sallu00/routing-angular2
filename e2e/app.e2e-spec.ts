import { RoutingAngPage } from './app.po';

describe('routing-ang App', () => {
  let page: RoutingAngPage;

  beforeEach(() => {
    page = new RoutingAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AirlineSeatBidAppPage } from './app.po';

describe('airline-seat-bid-app App', () => {
  let page: AirlineSeatBidAppPage;

  beforeEach(() => {
    page = new AirlineSeatBidAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

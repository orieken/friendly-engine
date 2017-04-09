import { TrackTimesPage } from './track-time.po';

describe('Track Times Page', () => {
  let page: TrackTimesPage;

  beforeEach(() => {
    page = new TrackTimesPage();
    page.navigateTo();
  });

  it('should have a list of cars', () => {
    let carsArray = ['Pagani - Huayra', 'Ariel - Atom V8 500', 'Noble - M600', 'Audi - R8 V10']
    expect(page.carList).toBeDefined();
    page.carList.click();
    page.getCarListOptions().then((values) => {
      expect(values).toEqual(carsArray);
    });
  });
});

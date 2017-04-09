import { browser, element, by, protractor } from 'protractor';

let EC = protractor.ExpectedConditions;

export class TrackTimesPage {
  navigateTo() {
    return browser.get('/track-times');
  }

  carList = element(by.id('car-list'));
  listOptions = element.all(by.tagName('md-option'));

  getCarListOptions() {
    return this.listOptions.map((option) => {
      browser.wait(EC.elementToBeClickable(option));
      return option.getText();
    });
  };

}

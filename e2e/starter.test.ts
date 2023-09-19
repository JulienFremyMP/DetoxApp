import {device} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should react to taps', async () => {
    await element(by.id('background')).tap();
    await element(by.id('background')).tap();
  });
});

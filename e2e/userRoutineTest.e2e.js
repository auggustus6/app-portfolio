/* eslint-disable no-undef */
const openAppRoutineUser = async () => {
  await waitFor(element(by.id('title-header')))
    .toBeVisible()
    .withTimeout(1000);

  const buttonFirstProperty = await element(by.id('button-0'));
  await buttonFirstProperty.tap();
  const buttoBackList = await element(by.id('button-back'));
  await buttoBackList.tap();

  await element(by.id('list-properties')).scroll(500, 'down', NaN, 0.5);
  await element(by.id('list-properties')).scroll(500, 'up', NaN, 0);

  const buttonFilter = await element(by.id('button-filter'));
  await buttonFilter.tap();
};

describe('User Routine', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should open the application and go through the user path', async () => {
    await openAppRoutineUser();
  });
});

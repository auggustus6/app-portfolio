/* eslint-disable no-undef */
const openAppRoutineUser = async () => {
  await waitFor(element(by.id('title-header')))
    .toBeVisible()
    .withTimeout(1000);

  const buttonFirstProperty = await element(by.id('button-0'));
  await buttonFirstProperty.tap();
  const buttoBackList = await element(by.id('button-back'));
  await buttoBackList.tap();

  await element(by.id('list-properties')).scroll(500, 'down', NaN, 0);
  await element(by.id('list-properties')).scroll(500, 'up', NaN, 0);

  const buttonFilter = await element(by.id('button-filter'));
  await buttonFilter.tap();
};

describe('User Routine', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should open the application and go through the user path', async () => {
    await openAppRoutineUser();
  });

  it('should open filter screen', async () => {
    await expect(element(by.id('filter-screen'))).toBeVisible();

    const inputAddress = await element(by.id('input-search'));
    await inputAddress.tap();
    await inputAddress.typeText('Rua Bandeira Paulista\n');

    const slider = await element(by.id('slider-price'));
    await slider.tap();
    await slider.swipe('right', 'fast', 0.75);

    const buttonHandleFilter = await element(by.id('button-handleFilter'));
    await buttonHandleFilter.tap();
    await waitFor(element(by.id('list-properties')))
      .toBeVisible()
      .withTimeout(5000);

    await element(by.id('list-properties')).scroll(600, 'down');

    const buttonFirstProperty = await element(by.id('button-1'));
    await buttonFirstProperty.tap();
  });

  it('should roll image gallery', async () => {
    await expect(element(by.id('property-screen'))).toBeVisible();

    const propertyListImages = await element(by.id('property-list-images'));
    // await propertyListImages.tap();
    await propertyListImages.swipe('left', 'slow', 1);
    await propertyListImages.swipe('right', 'slow', 0.5);

    const buttoBackList = await element(by.id('button-back'));
    await buttoBackList.tap();
  });
});

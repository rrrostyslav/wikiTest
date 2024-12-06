import { test, expect } from '../fixtures/fixtures';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

test.describe('Switching the language of the interface of the Wikipedia web application by an authorized user', () => {
  let currentLanguage: string;
  const englishLanguage: string = 'en - English';

  test('Switching the Ukraine language', async ({
    homePage,
    loginPage,
    preferencesPage,
  }) => {
    const username: string = process.env.WIKI_USERNAME || '';
    const password: string = process.env.WIKI_PASSWORD || '';
    const expectedLanguage: string = 'uk - українська';

    await homePage.visit();
    await homePage.clickOnLogin();
    await loginPage.fillAndSubmitLoginForm(username, password);
    const currentUsername = await homePage.getUserName();
    expect(username).toEqual(currentUsername);

    await homePage.navbar.pickUserDropdown('Preferences');

    await preferencesPage.pickLanguage(expectedLanguage);
    await preferencesPage.clickOnSaveButton();
    currentLanguage = await preferencesPage.getCurrentLanguage();
    expect(expectedLanguage).toEqual(currentLanguage);

    const sampleText = await preferencesPage.getPageTitleInLanguage();
    expect(sampleText).toEqual('Налаштування');
  });

  // revert to English, so that repeated tests would not break
  // (it would be possible to revert through api in the beginning, but there is no information how to do it).
  test.afterEach(async ({ preferencesPage }) => {
    if (currentLanguage !== englishLanguage) {
      await preferencesPage.pickLanguage(englishLanguage);
      await preferencesPage.clickOnSaveButton();
      currentLanguage = await preferencesPage.getCurrentLanguage();
      expect(englishLanguage).toEqual(currentLanguage);
    }
  });
});

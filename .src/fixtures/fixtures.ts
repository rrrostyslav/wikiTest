import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { PreferencesPage } from '../pages/PreferencesPage';

type SitePages = {
  homePage: HomePage;
  loginPage: LoginPage;
  preferencesPage: PreferencesPage;
};

export const test = base.extend<SitePages>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  preferencesPage: async ({ page }, use) => {
    const preferencesPage = new PreferencesPage(page);
    await use(preferencesPage);
  },
});

export { expect };

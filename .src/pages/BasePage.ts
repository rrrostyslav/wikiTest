import { Page } from 'playwright/test';
import { Navbar } from './componets/Navbar';

export abstract class BasePage {
  public readonly page: Page;
  public readonly navbar: Navbar;

  constructor(page: Page) {
    this.page = page;
    this.navbar = new Navbar(page);
  }
}

import { Page, Locator } from 'playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private readonly loginButton: Locator;
  private readonly usernameSpan: Locator;

  constructor(page: Page) {
    super(page);
    this.loginButton = page.locator('#pt-login-2');
    this.usernameSpan = page.locator('#pt-userpage-2 span');
  }

  public async visit(): Promise<void> {
    await this.page.goto('/');
  }

  public async clickOnLogin(): Promise<void> {
    await this.loginButton.click();
  }

  public async getUserName(): Promise<string | null> {
    return await this.usernameSpan.textContent();
  }
}

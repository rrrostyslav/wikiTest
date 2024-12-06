import { Page, Locator } from 'playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly loginButton: Locator;
  private readonly passwordInput: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#wpName1');
    this.loginButton = page.locator('#wpLoginAttempt');
    this.passwordInput = page.locator('#wpPassword1');
  }

  public async fillAndSubmitLoginForm(
    username: string,
    password: string,
  ): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

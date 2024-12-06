import { Page, Locator } from 'playwright/test';
import { BasePage } from './BasePage';

export class PreferencesPage extends BasePage {
  private readonly languageSelectbox: Locator;
  private readonly saveButton: Locator;
  private readonly currentLanguage: Locator;
  private readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.languageSelectbox = page.locator('#mw-input-wplanguage');
    this.saveButton = page.locator('#prefcontrol');
    this.currentLanguage = page.locator('#ooui-2');
    this.pageTitle = page.locator('#firstHeading');
  }

  public async pickLanguage(language: string): Promise<void> {
    // Sometimes the dropdown is closed before the choice is made
    for (let i = 0; i < 3; i++) {
      await this.languageSelectbox.click();
      const languageLocator = this.page.locator(
        this.getLanguageXPATH(language),
      );
      if (await languageLocator.isVisible()) {
        await languageLocator.click();
        break;
      }
    }
  }

  public async clickOnSaveButton(): Promise<void> {
    await this.saveButton.click();
  }

  public async getCurrentLanguage(): Promise<string> {
    return (await this.currentLanguage.textContent())!.trim();
  }

  public async getPageTitleInLanguage(): Promise<string> {
    return (await this.pageTitle.textContent())!.trim();
  }

  // returns the XPath of the span with the desired language.
  private getLanguageXPATH(language: string): string {
    return `//div[@id="mw-teleport-target"]//div[contains(@class,'option')]//span[contains(text(),'${language}')]`;
  }
}

import { Page, Locator } from 'playwright/test';

export class Navbar {
  private readonly page: Page;
  private readonly userDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userDropdown = page.locator('#vector-user-links-dropdown-checkbox');
  }

  public async pickUserDropdown(linkText: string): Promise<void> {
    const expandedAttrUserDropdown =
      await this.userDropdown.getAttribute('aria-expanded');
    if (!expandedAttrUserDropdown || expandedAttrUserDropdown === 'false') {
      await this.userDropdown.click();
    }

    await this.page.locator(this.getLinkXPath(linkText)).click();
  }

  // returns the XPath for the desired link
  private getLinkXPath(linkText: string): string {
    return `//div[@id="p-personal"]/parent::div//span[contains(text(),"${linkText}")]`;
  }
}

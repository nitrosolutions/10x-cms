import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly collectionsLink: Locator;

  constructor(page: Page) {
    super(page, '/home');

    this.collectionsLink = page.locator('a[href="/collections?action=create"]');
  }

  async navigateToCollections(): Promise<void> {
    await this.collectionsLink.click();
  }
}

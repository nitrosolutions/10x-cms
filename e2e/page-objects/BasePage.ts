import { type Page, type Locator } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
  readonly url: string;
  readonly successNotification: Locator;
  readonly fullPageLoader: Locator;

  constructor(page: Page, url: string) {
    this.page = page;
    this.url = url;
    this.successNotification = page.locator('[data-testid="success-notification"]');
    this.fullPageLoader = page.locator('#fullPageLoader');
  }

  async navigate(): Promise<void> {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('networkidle');
    await this.waitForPageToBeReady();
  }

  async waitForLoadState(state: 'load' | 'domcontentloaded' | 'networkidle' = 'networkidle'): Promise<void> {
    await this.page.waitForLoadState(state);
  }

  async waitForPageToBeReady(): Promise<void> {
    // Wait for the page loader to have the 'd-none' class (indicating it's hidden)
    await this.page.waitForFunction(() => {
      // @ts-expect-error TS(2584): Cannot find name 'document'. Do you need to change... Remove this comment to see the full error message
      const loader = document.getElementById('fullPageLoader');
      return loader?.classList.contains('d-none');
    });
  }

  async waitForSuccessNotification(): Promise<void> {
    await this.successNotification.waitFor({ state: 'visible' });
  }
}

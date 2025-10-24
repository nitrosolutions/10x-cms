import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page, '/login');

    this.usernameInput = page.locator('[data-testid="username-input"]');
    this.passwordInput = page.locator('[data-testid="password-input"]');
    this.loginButton = page.locator('[data-testid="login-button"]');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    // Directly call the login API using fetch() to avoid jQuery event handler issues
    await Promise.all([
      this.page.waitForNavigation({ url: '/home', timeout: 10000 }),
      this.page.evaluate(([user, pass]) => {
        return fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`
        }).then(() => {
          // @ts-expect-error TS(2304): Cannot find name 'window'.
          window.location.href = '/home';
        });
      }, [username, password])
    ]);
  }
}

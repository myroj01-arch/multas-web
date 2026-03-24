import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path: string): Promise<void> {
    await this.page.goto(path);
    await this.page.waitForLoadState("networkidle");
  }

  async waitForNotification(): Promise<void> {
    await this.page.waitForSelector('[role="status"]');
  }
}

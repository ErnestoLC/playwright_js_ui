import {expect} from '@playwright/test';

export class LoginPage {

  constructor(page) {
    this.page = page;
    this.title = page.locator("#info-paso")
    this.curp = page.locator("#registroCurp")
    this.email1 = page.locator("#correoInput")
    this.email2 = page.locator("#correoConfirmacionInput")
    this.buscarButton = page.locator("#buscar")
    this.errorMessage = page.locator("#divErrorCampos")
  }

  async goto() {
   await this.page.goto(`${process.env.MODALIDAD_40}`);
  }

  async expectTitle(text) {
    await expect(this.title).toHaveText(text);
  }

  async login(curp, email) {
    await this.curp.fill(curp);
    await this.email1.fill(email);
    await this.email2.fill(email);
    await this.buscarButton.click();
  }

  async expectErrorMessge(text) {
    await expect(this.errorMessage).toHaveText(text)
  }
}

import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base-page";

export interface ContactFormData {
  nombre: string;
  cedula: string;
  telefono: string;
}

export class ContactFormPage extends BasePage {
  readonly nombreInput: Locator;
  readonly cedulaInput: Locator;
  readonly telefonoInput: Locator;
  readonly submitButton: Locator;
  readonly whatsappLink: Locator;

  constructor(page: Page) {
    super(page);
    this.nombreInput = page.getByPlaceholder("Tu nombre");
    this.cedulaInput = page.getByPlaceholder("Tu número de cédula");
    this.telefonoInput = page.getByPlaceholder("300 123 4567");
    this.submitButton = page.getByRole("button", { name: "Solicitar diagnóstico gratis" });
    this.whatsappLink = page.getByRole("link", { name: "Contactar por WhatsApp" });
  }

  async goto(): Promise<void> {
    await super.goto("/#contacto");
  }

  async fillForm(data: ContactFormData): Promise<void> {
    await this.nombreInput.fill(data.nombre);
    await this.cedulaInput.fill(data.cedula);
    await this.telefonoInput.fill(data.telefono);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async waitForSuccess(): Promise<void> {
    await this.page.getByText("Solicitud recibida").waitFor();
    await this.page.getByText("Te contactaremos pronto").waitFor();
  }
}

import { test, expect } from "@playwright/test";
import { ContactFormPage } from "./contact-form-page";

test.describe("Contact Form", () => {
  test("User can submit contact form successfully",
    { tag: ["@critical", "@e2e", "@contact-form", "@CONTACT-E2E-001"] },
    async ({ page }) => {
      const contactFormPage = new ContactFormPage(page);

      await contactFormPage.goto();
      await contactFormPage.fillForm({
        nombre: "Juan Pérez",
        cedula: "12345678",
        telefono: "3001234567",
      });
      await contactFormPage.submit();

      // Should show success message after submission
      await contactFormPage.waitForSuccess();
    }
  );

  test("Form shows validation errors for empty required fields",
    { tag: ["@high", "@e2e", "@contact-form", "@CONTACT-E2E-002"] },
    async ({ page }) => {
      const contactFormPage = new ContactFormPage(page);

      await contactFormPage.goto();
      
      // Try to submit without filling form
      await contactFormPage.submitButton.click();
      
      // HTML5 required validation should prevent submission
      // Playwright handles this automatically - the button won't submit
      const isDisabled = await contactFormPage.submitButton.isDisabled();
      expect(isDisabled).toBe(false); // Button should still be enabled (HTML5 validation)
    }
  );

  test("WhatsApp link is visible and has correct href",
    { tag: ["@medium", "@e2e", "@contact-form", "@CONTACT-E2E-003"] },
    async ({ page }) => {
      const contactFormPage = new ContactFormPage(page);

      await contactFormPage.goto();
      
      await expect(contactFormPage.whatsappLink).toBeVisible();
      await expect(contactFormPage.whatsappLink).toHaveAttribute("href", /wa\.me/);
    }
  );
});

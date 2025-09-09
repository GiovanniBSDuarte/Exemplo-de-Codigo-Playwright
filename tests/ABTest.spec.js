// @ts-check
import { test, expect } from '@playwright/test';

test('Navegar e validar título e página de A/B Testing', async ({ page }) => {
  			// Acessa a aplicação
 			 await page.goto('https://the-internet.herokuapp.com');

 			 // Verifica o título da página
  			await expect(page).toHaveTitle("The Internet");

			  // Clica no link "A/B Testing"
			  await page.click('text=A/B Testing');

			  // Verifica se o cabeçalho contém o texto esperado
 			 const header = await page.locator('h3');
 			 await expect(header).toContainText('A/B Test');
			});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://intra.recette.simulassur.fr/Auth?err=1?&_loc=%2F');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('m.boulouiz');
  await page.getByPlaceholder('Login').press('Tab');
  await page.getByPlaceholder('Mot de passe').fill('test');
  await page.getByPlaceholder('Mot de passe').press('Tab');
  await page.getByRole('button', { name: 'Connexion' }).press('Enter');
  await page.locator('#mega-menuzs').getByRole('link', { name: ' Courtiers' }).click();
  await page.locator('[id="detailsCourtier\\[crPasswordCommissions\\]"]').click();
  await page.getByPlaceholder('Rechercher un courtier').click();
  await page.getByPlaceholder('Rechercher un courtier').fill('4674');
  await page.getByText('SEBASTIEN ROUAULTCABINET MPF COMPTE MAITRE (4674 - ref:3273)').click();
  await page.locator('[id="detailsCourtier\\[crPasswordCommissions\\]"]').click();
  await page.locator('[id="detailsCourtier\\[crPasswordCommissions\\]"]').fill('mdp_test10');
  await page.getByRole('button', { name: ' enregistrer' }).click();
  await page.goto('https://intra.recette.simulassur.fr/Courtier?4674');
});
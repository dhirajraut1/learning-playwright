import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.keela.co/');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('cytestkeela@yopmail.com');
  await page.locator('div').filter({ hasText: 'Password' }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('cytestkeela');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: ' Contacts' }).click();
  await page.getByRole('button', { name: 'Add Contact' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Ram');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Thapa');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('rame@hsk.com');
  await page.getByRole('button', { name: 'Save' }).click();
});
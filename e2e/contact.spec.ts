import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact form', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Get In Touch');
    await expect(page.locator('text=Contact Information')).toBeVisible();
    await expect(page.locator('text=Send Us a Message')).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    await expect(page.locator('text=Full name is required')).toBeVisible();
    await expect(page.locator('text=Phone number is required')).toBeVisible();
    await expect(page.locator('text=Email address is required')).toBeVisible();
    await expect(page.locator('text=Message is required')).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    const emailInput = page.locator('input[name="email"]');
    await emailInput.fill('invalid-email');
    await emailInput.blur();

    await expect(page.locator('text=Please enter a valid email address')).toBeVisible();
  });

  test('should validate phone number format', async ({ page }) => {
    const phoneInput = page.locator('input[name="phone"]');
    await phoneInput.fill('123');
    await phoneInput.blur();

    await expect(page.locator('text=Please enter a valid phone number')).toBeVisible();
  });

  test('should validate message length', async ({ page }) => {
    const messageInput = page.locator('textarea[name="message"]');
    await messageInput.fill('Short');
    await messageInput.blur();

    await expect(page.locator('text=Message must be at least 20 characters')).toBeVisible();
  });

  test('should submit form successfully', async ({ page }) => {
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const phoneInput = page.locator('input[name="phone"]');
    const messageInput = page.locator('textarea[name="message"]');
    const submitButton = page.locator('button[type="submit"]');

    await nameInput.fill('John Doe');
    await emailInput.fill('john@example.com');
    await phoneInput.fill('+1234567890');
    await messageInput.fill('This is a test message with more than 20 characters to pass validation.');

    await submitButton.click();

    await expect(page.locator('text=Thank you for your message!')).toBeVisible();
  });

  test('should show loading state during submission', async ({ page }) => {
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const phoneInput = page.locator('input[name="phone"]');
    const messageInput = page.locator('textarea[name="message"]');
    const submitButton = page.locator('button[type="submit"]');

    await nameInput.fill('John Doe');
    await emailInput.fill('john@example.com');
    await phoneInput.fill('+1234567890');
    await messageInput.fill('This is a test message with more than 20 characters to pass validation.');

    await submitButton.click();

    await expect(page.locator('text=Sending...')).toBeVisible();
  });

  test('should reset form after successful submission', async ({ page }) => {
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const phoneInput = page.locator('input[name="phone"]');
    const messageInput = page.locator('textarea[name="message"]');
    const submitButton = page.locator('button[type="submit"]');

    await nameInput.fill('John Doe');
    await emailInput.fill('john@example.com');
    await phoneInput.fill('+1234567890');
    await messageInput.fill('This is a test message with more than 20 characters to pass validation.');

    await submitButton.click();

    // Wait for success message
    await expect(page.locator('text=Thank you for your message!')).toBeVisible();

    // Wait for form reset (5 seconds)
    await page.waitForTimeout(5000);

    await expect(nameInput).toHaveValue('');
    await expect(emailInput).toHaveValue('');
    await expect(phoneInput).toHaveValue('');
    await expect(messageInput).toHaveValue('');
  });

  test('should display contact information correctly', async ({ page }) => {
    await expect(page.locator('text=al.azhar.school.london@gmail.com')).toBeVisible();
    await expect(page.locator('text=+44 (0) 20 1234 5678')).toBeVisible();
    await expect(page.locator('text=London, United Kingdom')).toBeVisible();
  });

  test('should display why choose us section', async ({ page }) => {
    await expect(page.locator('text=Why Choose Al-Azhar School?')).toBeVisible();
    await expect(page.locator('text=Certified Scholars')).toBeVisible();
    await expect(page.locator('text=Flexible Classes')).toBeVisible();
    await expect(page.locator('text=Modern Technology')).toBeVisible();
    await expect(page.locator('text=Competitive Pricing')).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('should navigate to contact page from home', async ({ page }) => {
    await page.goto('/');
    await page.locator('a[href="/contact"]').click();
    await expect(page).toHaveURL('/contact');
  });

  test('should navigate back to home from contact', async ({ page }) => {
    await page.goto('/contact');
    await page.locator('a[href="/"]').first().click();
    await expect(page).toHaveURL('/');
  });
});

test.describe('Responsive Design', () => {
  test('should display correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contact');

    await expect(page.locator('h1')).toContainText('Get In Touch');
    await expect(page.locator('text=Contact Information')).toBeVisible();
    await expect(page.locator('text=Send Us a Message')).toBeVisible();
  });

  test('should display correctly on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/contact');

    await expect(page.locator('h1')).toContainText('Get In Touch');
    await expect(page.locator('text=Contact Information')).toBeVisible();
    await expect(page.locator('text=Send Us a Message')).toBeVisible();
  });

  test('should display correctly on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/contact');

    await expect(page.locator('h1')).toContainText('Get In Touch');
    await expect(page.locator('text=Contact Information')).toBeVisible();
    await expect(page.locator('text=Send Us a Message')).toBeVisible();
  });
}); 
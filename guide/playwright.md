# Playwright Setup (Vite + React)

## 1. Install Playwright

```bash
npm install -D @playwright/test
```

---

## 2. Create `playwright.config.ts`

Create a new file:

```bash
touch playwright.config.ts
```

Add the following configuration:

```ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'http://localhost:5173',
    headless: true,
  },

  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: true,
  },
})
```

---

## 3. Create Test Directory

```bash
mkdir tests
```

---

## 4. Create Test Spec File

Create a new file:

```bash
touch tests/home.spec.ts
```

Add the following test code:

```ts
import { test, expect } from '@playwright/test'

test('homepage title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/playground/)
})
```

---

## 5. Run Playwright Test

```bash
npx playwright test
```

Playwright will:

1. Start the Vite development server
2. Open a browser automatically
3. Execute the test
4. Close everything after completion
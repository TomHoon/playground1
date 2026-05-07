# Playwright Setup (Vite + React)

## 1. 패키지 설치

```bash
npm install -D @playwright/test
```

---

## 2. 설정파일 추가 `playwright.config.ts`

파일생성(마우스로해도됨):

```bash
touch playwright.config.ts
```

Add the following configuration:

```ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
	testDir: './tests',
	
	use: {
		baseURL: 'http://127.0.0.1:4173',
		headless: true,
	},
	
	webServer: {
		command: 'npm run preview',
		port: 4173,
		reuseExistingServer: true,
	},
})
```

---

## 3. 폴더 생성

```bash
mkdir tests
```

---

## 4. 테스트 스펙 파일 추가

파일추가(마우스로해도됨):

```bash
touch tests/home.spec.ts
```

코드입력:

```ts
import { test, expect } from '@playwright/test'

test('homepage title', async ({ page }) => {
  await page.goto('/')

	// playground는 Index.html의 타이틀명임.
  await expect(page).toHaveTitle(/playground/)
})
```

---

## 5. 테스트 실행

```bash
npx playwright test
```

Playwright 진행순서:

1. 빌드 후 preview 생성
2. 브라우저에서 보는것 처럼 테스트 진행
3. title에 playground 문자열 있는지 확인
# Vitest + Jenkins JUnit Report Setup

## 1. 패키지설치

```bash
npm install -D vitest jsdom
npm install -D @testing-library/react
```

---

## 2. 업데이트하기 `vite.config.ts`

> Important:
>
> Use:
>
> ```ts
> import { defineConfig } from 'vitest/config'
> ```
>
> NOT:
>
> ```ts
> import { defineConfig } from 'vite'
> ```
>
> from 'vite'는 test 속성이 포함되어 있지 않음. 

```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    environment: 'jsdom',

    reporters: ['default', 'junit'],

    outputFile: {
      junit: './reports/junit.xml',
    },
  },
})
```

---

## 3. 테스트 스크립트 추가 `package.json`

```json
{
  "scripts": {
    "test": "vitest run"
  }
}
```

---

## 4. App.test.tsx 파일 추가
```tsx
import { render, screen } from '@testing-library/react'
import App from './App'
import { test, expect } from 'vitest'

test('renders vite text', () => {
	render(<App />)
	
	expect(screen.getByText(/Join/i)).toBeDefined()
})
```

---


## 4. Run Tests

```bash
npm test
```

After running tests, the following file will be generated:

```bash
reports/junit.xml
```

This XML file can be used by Jenkins JUnit reports.

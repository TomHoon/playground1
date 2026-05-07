import { defineConfig } from '@playwright/test'

export default defineConfig({
	testDir: './tests',
	
	use: {
		baseURL: 'https://gleaming-seahorse-7a496f.netlify.app',
		headless: true,
	},
	
	// webServer: {
	// 	command: 'npm run dev',
	// 	port: 5173,
	// 	reuseExistingServer: true,
	// },
})
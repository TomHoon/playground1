import { render, screen } from '@testing-library/react'
import App from './App'
import { test, expect } from 'vitest'

test('renders vite text', () => {
	render(<App />)
	
	expect(screen.getByText(/Join/i)).toBeDefined()
})
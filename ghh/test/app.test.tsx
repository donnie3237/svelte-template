import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App'
import { test ,expect ,beforeEach } from 'vitest'
import React from 'react'

test('loads and displays greeting', async () => {
  // ARRANGE
  beforeEach(() => {
    render(<App/>)
  });


  // ACT
  expect(screen.getByText(/Testing/i)).toBeDefined()
})
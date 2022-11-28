import {
  render, screen, act, waitFor,
} from '@testing-library/react'

import Home from 'container/home'
import { TestApp } from 'utils/test'

describe('Home', () => {
  beforeEach(() => act(() => render(<Home />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have heading', async () => {
    await waitFor(() => {
      const heading = screen.getAllByRole('heading')
      expect(heading).toHaveLength(2)
    })
  })

  it('should have button', async () => {
    await waitFor(() => {
      const button = screen.getAllByRole('button')
      expect(button).toHaveLength(1)
    })
  })
})
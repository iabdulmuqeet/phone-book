import {
  render, screen, act, waitFor,
} from '@testing-library/react'

import TextField from 'components/TextField'
import { TestApp } from 'utils/test'

describe('TextField', () => {
  beforeEach(() => act(() => render(<TextField />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })
})
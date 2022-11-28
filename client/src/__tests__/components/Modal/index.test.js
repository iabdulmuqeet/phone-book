import {
  render, screen, act, waitFor,
} from '@testing-library/react'

import Modal from 'components/Modal'
import { TestApp } from 'utils/test'

describe('Modal', () => {
  beforeEach(() => act(() => render(<Modal />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })
})
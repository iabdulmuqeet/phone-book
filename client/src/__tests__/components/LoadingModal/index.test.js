import {
  render, screen, act, waitFor,
} from '@testing-library/react'

import LoadingModal from 'components/LoadingModal'
import { TestApp } from 'utils/test'

describe('LoadingModal', () => {
  beforeEach(() => act(() => render(<LoadingModal />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })
})
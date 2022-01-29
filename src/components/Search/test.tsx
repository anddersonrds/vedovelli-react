import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Search from '.'

const doSearch = jest.fn()

describe('Search', () => {
  it('should render a form', () => {
    render(<Search doSearch={doSearch} />)

    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('should render a input equals search', () => {
    render(<Search doSearch={doSearch} />)

    expect(screen.getByRole('searchbox')).toHaveProperty('type', 'search')
  })

  it('should call props.doSearch() when form is submitted', async () => {
    render(<Search doSearch={doSearch} />)

    const form = screen.getByRole('form')

    await fireEvent.submit(form)

    expect(doSearch).toHaveBeenCalledTimes(1)
  })

  it('should call props.doSearch() with the user input', async () => {
    render(<Search doSearch={doSearch} />)

    const inputText = 'Some text here'
    const form = screen.getByRole('form')
    const input = screen.getByRole('searchbox')

    await userEvent.type(input, inputText)

    await fireEvent.submit(form)

    expect(doSearch).toHaveBeenCalledWith(inputText)
  })
})
/* eslint-disable @typescript-eslint/no-unused-vars */
import { screen, render, fireEvent } from '@testing-library/react'

import CartItem from '.'

const product = {
  title: 'Relógio Rolex',
  price: 250.0,
  image:
    'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
}

const renderCartItem = () => {
  render(<CartItem product={product} />)
}

describe('CartItem', () => {
  it('should render CartItem', () => {
    renderCartItem()

    expect(screen.getByTestId('cart-item')).toBeInTheDocument()
  })

  it('should display proper content', () => {
    renderCartItem()

    const image = screen.getByTestId('image')
    expect(screen.getByText(new RegExp(product.title, 'i'))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(product.price, 'i'))).toBeInTheDocument()
    expect(image).toHaveProperty('alt', product.title)
    expect(image).toHaveProperty('src', product.image)
  })

  it('should display 1 as initial quantity', () => {
    renderCartItem()

    expect(screen.getByTestId('quantity').textContent).toBe('1')
  })

  it('should increase quantity by 1 when second button is clicked', async () => {
    renderCartItem()

    const [_, button] = screen.getAllByRole('button')

    await fireEvent.click(button)

    expect(screen.getByTestId('quantity').textContent).toBe('2')
  })

  it('should decrease quantity by 1 when first button is clicked', async () => {
    renderCartItem()

    const [decreaseButton, increaseButton] = screen.getAllByRole('button')
    const quantity = screen.getByTestId('quantity')

    await fireEvent.click(increaseButton)
    expect(quantity.textContent).toBe('2')

    await fireEvent.click(decreaseButton)
    expect(quantity.textContent).toBe('1')
  })

  it('should not go bellow zero in the quantity', async () => {
    renderCartItem()

    const [decreaseButton, _] = screen.getAllByRole('button')
    const quantity = screen.getByTestId('quantity')

    expect(quantity.textContent).toBe('1')

    await fireEvent.click(decreaseButton)
    await fireEvent.click(decreaseButton)

    expect(quantity.textContent).toBe('0')
  })
})

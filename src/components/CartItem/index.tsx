import { useState } from 'react'

import { CartItemProps } from './types'

import * as S from './styles'

const CartItem = ({ product }: CartItemProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleDecreaseQuantity = () => {
    quantity > 0 && setQuantity(quantity - 1)
  }

  return (
    <S.Wrapper data-testid="cart-item">
      <S.ImageWrapper>
        <S.Image data-testid="image" alt={product.title} src={product.image} />
        <S.InforWrapper>
          <S.Title>{product.title}</S.Title>
          <S.ButtonsWrapper>
            <S.Button onClick={handleDecreaseQuantity}>
              <S.Icon
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </S.Icon>
            </S.Button>
            <S.Quantity data-testid="quantity">{quantity}</S.Quantity>
            <S.Button onClick={handleIncreaseQuantity}>
              <S.Icon
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </S.Icon>
            </S.Button>
          </S.ButtonsWrapper>
        </S.InforWrapper>
      </S.ImageWrapper>
      <S.Price>{product.price}$</S.Price>
    </S.Wrapper>
  )
}

export default CartItem

type ProductProps = {
  title: string
  price: number
  image: string
}

export type ProductCardProps = {
  product: ProductProps
  addToCart: (product: ProductProps) => void
}

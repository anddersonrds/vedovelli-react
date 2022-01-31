import tw from 'tailwind-styled-components'

export const Wrapper = tw.div`
  flex
  justify-between
  mt-6
`

export const ImageWrapper = tw.div`
  flex
`

export const Image = tw.img`
  h-20
  w-20
  object-cover
  rounded
`

export const InforWrapper = tw.div`
  mx-3
`

export const Title = tw.h3`
  text-sm
  text-gray-600
`

export const ButtonsWrapper = tw.div`
  flex
  items-center
  mt-2
`

export const Button = tw.button`
  text-gray-500
  focus:outline-none
  focus:text-gray-600
`

export const Icon = tw.svg`
  h-5
  w-5
`

export const Quantity = tw.span`
  text-gray-700
  mx-2
`

export const Price = tw.span`
  text-gray-600
`

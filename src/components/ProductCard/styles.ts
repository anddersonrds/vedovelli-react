import tw from 'tailwind-styled-components'

export const Wrapper = tw.section``

export const ImageWrapper = tw.div`
  w-full
  max-w-sm
  mx-auto
  rounded-md
  shadow-md
  overflow-hidden
`

export const Image = tw.div`
  flex
  items-end
  justify-end
  h-56
  w-full
  bg-cover
`

export const Button = tw.button`
  p-2
  rounded-full
  bg-blue-600
  text-white
  mx-5
  mb-4
  hover:bg-blue-500
  focus:outline-none
  focus:bg-blue-500
`

export const InforWrapper = tw.div`
  px-5
  py-3
`

export const Title = tw.h3`
  text-gray-700
  uppercase
`

export const Price = tw.span`
  text-gray-500
  mt-2
`

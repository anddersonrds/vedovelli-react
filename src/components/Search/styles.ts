import tw from 'tailwind-styled-components'

export const Form = tw.form`
  relative
  mt-6
  max-w-lg
  mx-auto
`
export const IconWrapper = tw.span`
  flex
  absolute
  items-center
  left-0
  pl-3
  inset-y-0
`

export const Icon = tw.svg`
  h-5
  w-5
  text-gray-500
`

export const Input = tw.input`
  w-full
  border
  rounded-md
  pl-10
  pr-4
  py-2
  focus:border-blue-500
  focus:outline-none
  focus:shadow-outline
`

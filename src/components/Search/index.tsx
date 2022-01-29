import { useState } from 'react'

import { SearchProps } from './types'

import * as S from './styles'

const Search = ({ doSearch }: SearchProps) => {
  const [term, setTerm] = useState('')

  return (
    <S.Form name="search-form" onSubmit={() => doSearch(term)}>
      <S.IconWrapper>
        <S.Icon viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </S.Icon>
      </S.IconWrapper>

      <S.Input
        type="search"
        placeholder="Search"
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
    </S.Form>
  )
}

export default Search

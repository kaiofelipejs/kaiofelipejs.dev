import styled from "styled-components"
import media from "styled-media-query"

import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav`
  margin: 1rem 0;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    text-decoration: underline;
    font-weight: bold;
  }
`

export const MenuLinksLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`

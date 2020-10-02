import styled from "styled-components"
import media from "styled-media-query"

import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  & * {
    cursor: inherit;
  }

  ${media.lessThan("large")`
    display: flex;
    text-align: left;
  `}
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 0;
  line-height: 1.4;

  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan("large")`
    font-size: 0.8rem;
  `}
`

export const ProfileDescription = styled.p`
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("large")`
    display: none;
  `}
`

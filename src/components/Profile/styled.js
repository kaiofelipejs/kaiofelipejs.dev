import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 1rem;
  margin: 0.5rem auto 0;
  line-height: 1.4;
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 0.8rem;
  font-weight: 300;
`

export const ProfileDescription = styled.p`
  font-weight: 300;
  line-height: 1.4;
`

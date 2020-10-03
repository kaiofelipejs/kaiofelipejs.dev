import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  display: flex;
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  color: var(--texts);
  display: flex;
  font-size: 1.2rem;
  padding: 3rem 1rem;
  text-decoration: none;
  width: 50%;

  &:hover {
    text-decoration: underline;
  }

  &.previous {
    border-right: 1px solid var(--borders);
  }

  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }

  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`

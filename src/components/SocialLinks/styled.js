import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  margin: 1rem auto;
  width: 100%;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const SocialLinksItem = styled.li`
  padding: 0 0.5rem;
`

export const SocialLinksLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  text-decoration: none;
  color: var(--texts);

  & * {
    cursor: inherit;
  }
`

export const IconWrapper = styled.div`
  fill: currentColor;
  width: 25px;
  height: 25px;

  &:hover {
    opacity: 0.6;
  }
`

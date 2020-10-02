import styled, { css } from "styled-components"
import media from "styled-media-query"

import { Modal, Frame } from "@react95/core"

export const LayoutWrapper = styled.section``

export const LayoutMain = styled(Modal)`
  display: flex;
  margin: 0 5.75rem 0 20rem;
  width: fill-available;
  min-height: 90vh;
  top: 0px;

  ${media.lessThan("large")`
    top: 93px;
    flex-direction: column;
    margin: 0;
  `}
`

export const LayoutMainContent = styled(Frame)`
  height: 80vh;
  overflow-y: auto;
  padding: 0;

  ${({ readingMode }) =>
    readingMode &&
    css`
      & *:not(.token):not(code) {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
      }
    `}

  ${media.lessThan("large")`
    height: 70vh;
  `}
`

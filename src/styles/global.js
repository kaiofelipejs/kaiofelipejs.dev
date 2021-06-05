import { createGlobalStyle, css } from "styled-components"
import { w95, w952 } from "./fonts"
// import "@react95/icons/icons.css"

const Reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    line-height: 1;
    font-size: 100%;
  }
  img {
    display: block;
    /* width: 100%; */
    height: auto;
  }
`

const StyleBase = createGlobalStyle`
  ${Reset}

  @font-face {
    font-family: "w95";
    font-style: normal;
    font-weight: normal;
    src: local("w95"), local("w952"), url(${w95}) format("woff"), url(${w952}) format("woff2");
  }

  * {
    font-family: "w95", monospace;
  }

  .token,
  code {
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }

  p {
    font-size: 1rem;
    line-height: 1.625rem;
  }

  body {
    --borders: #c3c7cb;
    --texts: #000;
    --mainColor: #55aaaa;
  }
`

export default StyleBase

import React from "react"
import { Link } from "gatsby"

const AboutPage = () => (
  <>
    <h1>About Page</h1>
    <ul>
      <li>
        <Link to="/about" activeStyle={{ color: "red " }}>
          About
        </Link>
      </li>
      <li>
        <Link to="/" activeStyle={{ color: "red " }}>
          Home
        </Link>
      </li>
    </ul>
  </>
)
export default AboutPage

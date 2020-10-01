import React from "react"
import { render, screen } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Avatar from "."

describe(`<Avatar />`, () => {
  beforeEach(() => {
    useStaticQuery.mockImplementationOnce(() => ({
      avatarImage: {
        childImageSharp: {
          fluid: {
            src: `profile-photo`,
            srcSet: `profile-photo`,
            aspectRatio: 1,
            sizes: `(max-width: 60px) 100vw, 60px`,
          },
        },
      },
    }))
  })

  it(`renders avatar`, () => {
    render(<Avatar />)

    expect(
      screen.getByAltText("Uma foto minha sorrindo de frente para a camera")
    ).toBeInTheDocument()
  })
})

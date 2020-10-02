import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import PostItem from "."

jest.mock("@react95/icons", () => "icons")

describe(`<PostItem />`, () => {
  const title = "Titulo muito brabo!"
  const description = "Esse post é top, jamais visto"

  it(`renders PostItem with all props`, () => {
    render(
      <PostItem
        slug="/about/"
        background="white"
        category="Misc"
        date="01 de Janeiro de 2020"
        timeToRead={5}
        title={title}
        description={description}
      />
    )

    expect(screen.getByRole("link", { href: "/about/" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { value: title })).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
    expect(screen.getByText("Misc")).toHaveStyleRule("background", /white/)
  })

  it("renders PostItemTag with default color when no passing background prop", () => {
    render(
      <PostItem
        slug="/about/"
        category="Misc"
        date="01 de Janeiro de 2020"
        timeToRead={5}
        title={title}
        description={description}
      />
    )

    expect(screen.getByText("Misc")).toHaveStyleRule(
      "background",
      /var(--mainColor)/
    )
  })
})

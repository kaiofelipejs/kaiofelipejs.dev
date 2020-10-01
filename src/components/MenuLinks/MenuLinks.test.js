import React from "react"
import { render, screen } from "@testing-library/react"
import MenuLinks from "."

jest.mock("@react95/icons", () => "icons")

describe(`<MenuLinks />`, () => {
  it(`renders MenuLinks`, () => {
    render(<MenuLinks />)

    expect(screen.queryAllByRole("menuitem").length).toEqual(2)
    expect(screen.getByText(/home/i)).toHaveAttribute("href", "/")
    expect(screen.getByText(/sobre mim/i)).toHaveAttribute("href", "/about/")
  })
})

import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import MenuBar from "."

jest.mock("@react95/icons", () => "icons")

describe(`<MenuBar />`, () => {
  it(`renders MenuBar with all icons`, () => {
    render(<MenuBar />)

    const labelIconTexts = [
      "Icone com uma folha ao fundo e uma casa pequena no canto inferior direito.",
      "Icone de uma lupa.",
      "Icone de um livro aberto.",
    ]

    labelIconTexts.forEach(text => {
      expect(screen.getByLabelText(text)).toBeInTheDocument()
    })
  })

  it(`change style toggle readingMode when is true`, () => {
    render(<MenuBar readingMode={true} />)

    const toggleIcon = screen.getByLabelText(/Icone de um livro aberto/i)

    expect(toggleIcon).toHaveStyle({ filter: "brightness(1)" })
  })

  it(`trigger setReadingMode when toggle is clicked`, async () => {
    const toggleReadingMode = jest.fn()
    render(<MenuBar setReadingMode={toggleReadingMode} />)

    fireEvent.click(screen.getByTitle("Modo leitura"))

    expect(toggleReadingMode).toHaveBeenCalled()
  })
})

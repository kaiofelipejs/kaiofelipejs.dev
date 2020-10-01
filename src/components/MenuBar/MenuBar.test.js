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
      "Icone de um livro fechado com uma interrogação na capa.",
      "Icone de uma seta apontando para cima.",
    ]

    labelIconTexts.forEach(text => {
      expect(screen.getByLabelText(text)).toBeInTheDocument()
    })
  })

  it(`renders MenuBar with readingMode is true`, () => {
    render(<MenuBar readingMode={true} />)

    const itemsTitleText = [
      "Voltar para home",
      "Pesquisar",
      "Voltar para o tema",
      "Ir para o topo",
    ]

    itemsTitleText.forEach(text => {
      expect(screen.getByTitle(text)).toBeInTheDocument()
    })
  })

  it(`trigger setReadingMode when toggle is clicked`, async () => {
    const toggleReadingMode = jest.fn()
    render(<MenuBar setReadingMode={toggleReadingMode} />)

    fireEvent.click(screen.getByTitle("Modo leitura"))

    expect(toggleReadingMode).toHaveBeenCalled()
  })
})

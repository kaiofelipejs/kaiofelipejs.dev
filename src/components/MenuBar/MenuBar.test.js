import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import MenuBar from "."

jest.mock("@react95/icons", () => "icons")

describe(`<MenuBar />`, () => {
  it(`renders MenuBar with all icons`, () => {
    render(<MenuBar />)

    const itemsTitleText = [
      "Voltar para home",
      "Pesquisar",
      "Modo leitura",
      "Ir para o topo",
    ]

    itemsTitleText.forEach(text => {
      expect(screen.getByTitle(text)).toBeInTheDocument()
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

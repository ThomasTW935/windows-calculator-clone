import { useState, useEffect } from "react"
import Button from "../../core-ui/Button"
import { converterButtons, SPECIAL_BUTTONS } from "../../Data/Buttons"

import Con from "./Converter.style"
import Input from "../../core-ui/Input"
import { unit } from "mathjs"
import useConverter from "./hooks/useConverter"
import Tile from "./Tile"

export default function Converter() {
  const base = "length"
  const { tiles, dispatch, handleUnit, activeTile, setActiveTile } =
    useConverter()
  function buttonClicked(button: string) {
    // let newValue = Number(`${value}` + button)
    // if (button === SPECIAL_BUTTONS.CE.value) return setValue(0)
    // setValue(newValue)
  }
  useEffect(() => {
    handleUnit(base)
  }, [])

  return (
    <Con>
      <Con.Display>
        {tiles.map((tile, index) => (
          <Tile key={tile.id} tile={tile} />
        ))}
      </Con.Display>
      <Con.Buttons>
        {converterButtons.map((button, index) => {
          if (button.value === "") return <span key={index}></span>
          return (
            <Button
              onClick={() => buttonClicked(button.value)}
              key={index}
              isSpecial={!/[0-9.]/.test(button.value)}
            >
              {typeof button.label === "string" ? (
                button.label
              ) : (
                <button.label size={20} />
              )}
            </Button>
          )
        })}
      </Con.Buttons>
    </Con>
  )
}

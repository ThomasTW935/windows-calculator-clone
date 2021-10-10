import { useState, useEffect } from "react"
import Button from "../../core-ui/Button"
import { converterButtons, SPECIAL_BUTTONS, IButton } from "../../Data/Buttons"
import { buttonClicked } from "../../helper/buttonFunctions"
import Con from "./Converter.style"
import Input from "../../core-ui/Input"
import { unit } from "mathjs"
import useConverter, { ACTIONS } from "./hooks/useConverter"
import Tile from "./Tile"
import { UNITS } from "../../Data/Converter"

interface IProps {
  base: string
}

export default function Converter({ base }: IProps) {
  const { tiles, dispatch } = useConverter()
  const [activeTile, setActiveTile] = useState(tiles[0].id)
  const units = UNITS[base]
  function handleButton(button: IButton) {
    const tile = tiles.filter((tile) => tile.id === activeTile)[0]
    let newValue = buttonClicked(button, tile.value)
    dispatch({
      type: ACTIONS.UPDATE_CURRENT_VALUE,
      payload: {
        id: activeTile,
        value: Number(newValue),
        activeTile: activeTile,
      },
    })
  }
  useEffect(() => {
    const unitKeys = Object.values(units)
    const length = unitKeys.length
    const selectedUnits = [unitKeys[length / 2], unitKeys[length / 2 + 1]]
    dispatch({ type: ACTIONS.SET_UNITS, payload: { units: selectedUnits } })
  }, [])
  return (
    <Con>
      <Con.Display>
        {tiles.map((tile, index) => (
          <Tile
            key={tile.id}
            tile={tile}
            activeTile={activeTile}
            setActiveTile={setActiveTile}
            dispatch={dispatch}
            units={units}
          />
        ))}
      </Con.Display>
      <Con.Buttons>
        {converterButtons.map((button, index) => {
          if (button.value === "") return <span key={index}></span>
          return (
            <Button
              onClick={() => handleButton(button)}
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

import { ChangeEvent, Dispatch, useRef } from "react"
import Input from "../../core-ui/Input"
import useConverter, { ACTIONS, ITile, Action } from "./hooks/useConverter"
import { IUNIT } from "../../Data/Converter"

interface Props {
  tile: ITile
  activeTile: string
  setActiveTile: (arg1: string) => void
  dispatch: Dispatch<Action>
  units: IUNIT
}

export default function Tile({
  tile,
  activeTile,
  setActiveTile,
  dispatch,
  units,
}: Props) {
  const selectRef = useRef<HTMLSelectElement>(null)
  function handleSelect() {
    if (selectRef.current) {
      dispatch({
        type: ACTIONS.UPDATE_UNIT,
        payload: {
          id: tile.id,
          unit: selectRef.current.value,
          activeTile: activeTile,
        },
      })
    }
  }
  return (
    <div>
      <Input
        onClick={() => {
          setActiveTile(tile.id)
        }}
        active={activeTile === tile.id}
        value={tile.value}
        readOnly
      />
      <select ref={selectRef} value={tile.unit} onChange={handleSelect}>
        {Object.entries(units).map(([key, value], index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}

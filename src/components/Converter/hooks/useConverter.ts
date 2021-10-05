import { useReducer, useState } from "react"
import { UNITS } from "../../../Data/Converter"

type Reducer<State, Action> = (state: State, action: Action) => State

export enum ACTIONS {
  // ADD_NUM= 'add-num',
  // DELETE_NUM= 'delete-num',
  // RESET_NUM= 'reset-num',
  UPDATE_UNIT = "update-unit",
  // UPDATE_TILE_VALUES= 'update-tile-values',
  UPDATE_ACTIVE_VALUE = "update-active-value",
  UPDATE_ACTIVE_TILE = "update-active-tile",
  UPDATE_INACTIVE_TILE_VALUE = "update-inactive-tile-value",
}

interface ITile {
  id: string
  value: number
  unit: string
}

type State = ITile[]

type Action =
  | { type: ACTIONS.UPDATE_UNIT; payload: { id: number; unit: string } }
  | { type: ACTIONS.UPDATE_ACTIVE_TILE; payload: { id: number } }
  | { type: ACTIONS.UPDATE_ACTIVE_VALUE; payload: { value: number } }
  | { type: ACTIONS.UPDATE_INACTIVE_TILE_VALUE; payload: { value: number } }

const initialState: State = [
  { id: "tile01", value: 0, unit: "meters" },
  { id: "tile02", value: 0, unit: "kilometers" },
]

const reducer: Reducer<State, Action> = (states, action) => {
  switch (action.type) {
    default:
      return states
  }
}

const useConverter = () => {
  const [tiles, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  )
  const handleUnit = (base: string) => {
    return UNITS[base]
  }
  const [activeTile, setActiveTile] = useState(0)

  return { tiles, dispatch, activeTile, setActiveTile, handleUnit }
}

export type { ITile }
export default useConverter

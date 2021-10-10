import { useReducer, useState } from "react"
import { unit } from "mathjs"

type Reducer<State, Action> = (state: State, action: Action) => State

export enum ACTIONS {
  // ADD_NUM= 'add-num',
  // DELETE_NUM= 'delete-num',
  // RESET_NUM= 'reset-num',
  SET_UNITS = "set-units",
  UPDATE_UNIT = "update-unit",
  // UPDATE_TILE_VALUES= 'update-tile-values',
  UPDATE_CURRENT_VALUE = "update-current-value",
  UPDATE_ACTIVE_TILE = "update-active-tile",
  UPDATE_INACTIVE_TILE_VALUE = "update-inactive-tile-value",
}

interface ITile {
  id: string
  value: number
  unit: string
}

type State = ITile[]

export type Action =
  | {
      type: ACTIONS.SET_UNITS
      payload: { units: string[] }
    }
  | {
      type: ACTIONS.UPDATE_UNIT
      payload: { id: string; unit: string; activeTile: string }
    }
  | { type: ACTIONS.UPDATE_ACTIVE_TILE; payload: { id: number } }
  | {
      type: ACTIONS.UPDATE_CURRENT_VALUE
      payload: { id: string; value: number; activeTile: string }
    }
  | { type: ACTIONS.UPDATE_INACTIVE_TILE_VALUE; payload: { value: number } }

const initialState: State = [
  { id: "tile01", value: 0, unit: "meters" },
  { id: "tile02", value: 0, unit: "kilometers" },
]

const reducer: Reducer<State, Action> = (tiles, action) => {
  switch (action.type) {
    case ACTIONS.SET_UNITS:
      return tiles.map((tile, index) => {
        return { ...tile, unit: action.payload.units[index] }
      })
    case ACTIONS.UPDATE_CURRENT_VALUE:
      const { payload } = action
      return tiles.map((tile) => {
        if (tile.id === payload.id) return { ...tile, value: payload.value }
        const activeTile = tiles.filter(
          (tile) => tile.id === payload.activeTile
        )[0]
        const activeUnit = unit(payload.value, activeTile.unit)
        return { ...tile, value: activeUnit.toNumber(tile.unit) }
      })
    case ACTIONS.UPDATE_UNIT:
      console.log(action)
      return tiles.map((tile) => {
        const { payload } = action
        // Active Tile Unit Change
        if (tile.id === payload.activeTile) {
          if (tile.id !== payload.id) return tile
          return { ...tile, unit: payload.unit }
        }

        // Inactive Tile Change
        const activeTile = filterActiveTile(tiles, payload.activeTile)
        if (tile.id !== payload.id) {
          const activeUnit = unit(activeTile.value, payload.unit)
          return { ...tile, value: activeUnit.toNumber(tile.unit) }
        }
        const activeUnit = unit(activeTile.value, activeTile.unit)
        return {
          ...tile,
          unit: payload.unit,
          value: activeUnit.toNumber(payload.unit),
        }
      })

    default:
      return tiles
  }
}
function filterActiveTile(tiles: ITile[], activeTile: string) {
  return tiles.filter((tile) => tile.id === activeTile)[0]
}

const useConverter = () => {
  const [tiles, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  )

  return { tiles, dispatch }
}

export type { ITile }
export default useConverter

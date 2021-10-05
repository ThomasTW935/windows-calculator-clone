import Input from "../../core-ui/Input"
import useConverter, { ITile } from "./hooks/useConverter"

interface Props {
  tile: ITile
}

export default function Tile({ tile }: Props) {
  const { dispatch, activeTile, setActiveTile, handleUnit } = useConverter()
  const units = handleUnit("LENGTH")
  console.log(units)
  return (
    <div>
      <Input
        onClick={() => {
          setActiveTile(0)
        }}
        active={activeTile === 0}
        value={0}
        readOnly
      />
      <select>
        {Object.entries(units).map(([key, value], index) =>
          // <option key={index} value={key}>
          //   {value}
          // </option>
          // console.log(value[1])
          console.log(key)
        )}
      </select>
    </div>
  )
}

import { SPECIAL_BUTTONS, IButton } from "../Data/Buttons"

const buttonClicked = (button: IButton, currentValue: Number) => {
  const { CE, DEL } = SPECIAL_BUTTONS
  if (button.value === DEL.value)
    return currentValue.toString().slice(0, -1) || 0
  if (button.value === CE.value) return 0
  let newValue =
    currentValue !== 0 ? currentValue + `${button.value}` : button.value
  return newValue
}

export { buttonClicked }

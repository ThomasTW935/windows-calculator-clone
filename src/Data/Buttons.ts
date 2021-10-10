import { Delete, Divide, Plus, Minus, X } from "@styled-icons/feather"
import { StyledIcon } from "@styled-icons/styled-icon"

export interface IButton {
  label: string | StyledIcon
  value: string
}

export const SPECIAL_BUTTONS = {
  BLANK: { label: "", value: "" },
  CE: { label: "CE", value: "clear-entry" },
  C: { label: "C", value: "clear" },
  DEL: { label: Delete, value: "del" },
  DIVIDE: { label: Divide, value: "/" },
  MULTIPLY: { label: X, value: "*" },
  SUBTRACT: { label: Minus, value: "-" },
  ADD: { label: Plus, value: "+" },
  EQUALS: { label: "=", value: "equals" },
  PERIOD: { label: ".", value: "." },
}
export const NORMAL_BUTTONS = {
  ZERO: { label: "0", value: "0" },
  ONE: { label: "1", value: "1" },
  TWO: { label: "2", value: "2" },
  THREE: { label: "3", value: "3" },
  FOUR: { label: "4", value: "4" },
  FIVE: { label: "5", value: "5" },
  SIX: { label: "6", value: "6" },
  SEVEN: { label: "7", value: "7" },
  EIGHT: { label: "8", value: "8" },
  NINE: { label: "9", value: "9" },
}

const { BLANK, CE, C, DEL, DIVIDE, MULTIPLY, SUBTRACT, ADD, EQUALS, PERIOD } =
  SPECIAL_BUTTONS
const { ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE } =
  NORMAL_BUTTONS

export const converterButtons = [
  BLANK,
  CE,
  DEL,
  SEVEN,
  EIGHT,
  NINE,
  FOUR,
  FIVE,
  SIX,
  ONE,
  TWO,
  THREE,
  BLANK,
  ZERO,
  PERIOD,
]
export const calculatorButtons = [
  CE,
  C,
  DEL,
  DIVIDE,
  SEVEN,
  EIGHT,
  NINE,
  MULTIPLY,
  FOUR,
  FIVE,
  SIX,
  SUBTRACT,
  ONE,
  TWO,
  THREE,
  ADD,
  BLANK,
  ZERO,
  PERIOD,
  EQUALS,
]

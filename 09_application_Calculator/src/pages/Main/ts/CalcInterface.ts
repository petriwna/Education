
export interface CalcInterface {
  sum: (a: number, b: number) => number
  subtraction: (a: number, b: number) => number
  multiplication: (a: number, b: number) => number
  division: (a: number, b: number) => number
  squared: () => number
  cube: () => number
  power: (b: number) => number
  constantsToPower: () => number
  tenToPower: () => number
  square: () => number
  oneDivision: () => number
  pi: () => number
  constant: () => number
  multipToTenPower: (a: number, b: number) => number
  clearAll: () => void
}

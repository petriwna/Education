export interface CalcInterface {
  saveA: (a: number) => number
  sum: (b: number) => number
  subtraction: (b: number) => number
  multiplication: (b: number) => number
  division: (b: number) => number
  squared: () => number
  cube: () => number
  power: (b: number) => number
  constantsToPower: () => number
  tenToPower: () => number
  square: () => number
  oneDivision: () => number
  pi: () => number
  constant: () => number
  multipToTenPower: (b: number) => number
  clearAll: () => number

  handleDisplayUpdate: (val: string) => void
}


export interface CalcInterface {
  sum: (a: number, b: number) => number
  subtraction: (a: number, b: number) => number
  multiplication: (a: number, b: number) => number
  division: (a: number, b: number) => number
  squared: (a: number) => number
  cube: (a: number) => number
  constantsToPower: (a: number) => number
  tenToPower: (a: number) => number
  square: (a: number) => number
  oneDivision: (a: number) => number
  pi: () => number
  constant: () => number
  multipToTenPower: (a: number, b: number) => number
  clearAll: () => void
}

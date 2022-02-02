import {CalcInterface} from "./CalcInterface";

export class Calculator implements CalcInterface{
  private a: number;

  constructor() {
    this.a = 0;
  }

  saveA(a: number): number {
    return this.a = a;
  }

  constantsToPower(): number {
    return Math.pow(Math.E, this.a);
  }

  cube(): number {
    return Math.pow(this.a, 3);
  }

  division(b: number): number {
    return this.a / b;
  }

  multiplication(b: number): number {
    return this.a * b;
  }

  power(b: number): number {
    return Math.pow(this.a, b) ;
  }

  squared(): number {
    return Math.sqrt(this.a);
  }

  subtraction(b: number): number {
    return this.a - b;
  }

  sum(b: number): number {
    return this.a + b;
  }

  tenToPower(): number {
    return Math.pow(10, this.a);
  }

  square(): number {
    return Math.pow(this.a, 2);
  }

  oneDivision(): number {
    return 1/this.a;
  }

  pi(): number {
    return Math.PI;
  }

  constant(): number {
    return Math.E;
  }

  multipToTenPower(b: number): number {
    return this.a*(Math.pow(10, b));
  }

  clearAll(): number {
    console.log('clear')
    return this.a = 0;
  }

}

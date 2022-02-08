import {CalcInterface} from "./CalcInterface";
import {updateDisplay} from "./updateDisplay";
import {inputDisplay} from "./inputDisplay";

export class Calculator implements CalcInterface {
  displayValue: string;
  firstOperand: string;
  waitingForSecondOperand: boolean;
  operator: string;

  constructor() {
    this.displayValue = '0';
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
    this.operator = null;
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
    return Math.pow(this.a, b);
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
    return 1 / this.a;
  }

  pi(): number {
    return Math.PI;
  }

  constant(): number {
    return Math.E;
  }

  multipToTenPower(b: number): number {
    return this.a * (Math.pow(10, b));
  }

  clearAll(): number {
    return 0;
  }

  handlerButtons(event){
    if (event.target.dataset.type === 'operator') {
      console.log('operator', event.target.value);
      return;
    }

    if (event.target.dataset.type === 'decimal') {
      console.log('decimal', event.target.value);
      return;
    }

    if (event.target.dataset.type === 'all-clear') {
      console.log('clear', event.target.value);
      return;
    }
    this.inputDisplay(event.target.value);
    updateDisplay(this.displayValue);
  }

  inputDisplay(digit){
    console.log(this.displayValue)
    this.displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;

    console.log(this.displayValue)
  }
}

import {CalcInterface} from "./CalcInterface";
import {updateDisplay} from "./updateDisplay";

export class Calculator implements CalcInterface {
  displayValue: string;
  firstOperand: number;
  waitingForSecondOperand: boolean;
  operator: string;

  constructor() {
    this.displayValue = '0';
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
    this.operator = null;
  }

  calculation(a, b, operator){
    if (operator === '+') {
      return this.sum(a, b);
    } else if (operator === '-') {
      return this.subtraction(a, b);
    } else if (operator === 'x') {
      return this.multiplication(a, b);
    } else if (operator === '/') {
      return this.division(a, b);
    }
    return b;
  }

  constantsToPower(): number {
    return Math.pow(Math.E, this.a);
  }

  cube(): number {
    return Math.pow(this.a, 3);
  }

  division(a: number, b: number): number {
    return a / b;
  }

  multiplication(a: number, b: number): number {
    return a * b;
  }

  power(b: number): number {
    return Math.pow(this.a, b);
  }

  squared(): number {
    return Math.sqrt(this.a);
  }

  subtraction(a: number, b: number): number {
    return a - b;
  }

  sum(a: number, b: number): number {
    return a + b;
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

  clearAll(): void{
    this.displayValue = '0';
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
    this.operator = null;
  }

  handlerButtons(event) {
    switch (event.target.value) {
      case '+':
      case '-':
      case 'x':
      case '/':
      case '=':
        this.handleOperator(event.target.value);
        break;
      case '.':
        this.inputDecimal(event.target.value);
        break;
      case 'AC':
        this.clearAll();
        break;
      default:
        if (Number.isInteger(parseFloat(event.target.value))) {
          this.inputDisplay(event.target.value);
        }
    }
    updateDisplay(this.displayValue);
  }

  inputDecimal(dot) {
    if (this.waitingForSecondOperand === true){
      this.displayValue = '0';
      this.waitingForSecondOperand = false;
      return;
    }
    if (!this.displayValue.includes(dot)) {
      this.displayValue = this.displayValue + dot;
    }
  }

  handleOperator(nextOperator) {
    const inputValue = parseFloat(this.displayValue);

    if (this.operator && this.waitingForSecondOperand) {
      this.operator = nextOperator;
      console.log(nextOperator);
      return;
    }

    if (this.firstOperand === null && !isNaN(inputValue)) {
      this.firstOperand = inputValue;
    } else if (this.operator){
      const result = this.calculation(this.firstOperand, inputValue, this.operator)
      this.displayValue = String(result);
      this.firstOperand = result;
    }

    this.waitingForSecondOperand = true;
    this.operator = nextOperator;
    console.log(this.displayValue, this.waitingForSecondOperand, this.operator)
  }

  inputDisplay(digit) {

    if (this.waitingForSecondOperand === true) {
      this.displayValue = digit;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;
    }
  }
}

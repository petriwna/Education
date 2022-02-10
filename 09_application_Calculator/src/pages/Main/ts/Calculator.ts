import {CalcInterface} from "./CalcInterface";
import {updateDisplay} from "./updateDisplay";

export class Calculator implements CalcInterface {
  displayValue: string;
  firstOperand: number;
  waitingForSecondOperand: boolean;
  operator: string;
  member: number;

  constructor() {
    this.displayValue = '0';
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
    this.operator = null;
    this.member = 0;
  }

  calculation(a, b, operator) {
    if (operator === '+') {
      return this.sum(a, b);
    } else if (operator === '-') {
      return this.subtraction(a, b);
    } else if (operator === 'x') {
      return this.multiplication(a, b);
    } else if (operator === '/') {
      return this.division(a, b);
    } else if (operator === 'xy'){
      return this.pow(a, b);
    }
    return b;
  }

  clearAll(): void {
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
      case 'xy':
        this.handleOperator(event.target.value);
        break;
      case 'П':
      case '%':
      case '+/-':
      case 'x!':
      case 'sin':
      case 'cos':
      case 'tan':
      case 'log':
      case 'x2':
      case 'x3':
      case 'ex':
      case '10x':
      case 'e':
        this.handlerFn(event.target.value);
        break;
      case '.':
        this.inputDecimal(event.target.value);
        break;
      case 'AC':
        this.clearAll();
        break;
      case 'mc':
      case 'm+':
      case 'm-':
      case 'mr':
        this.handlerMemory(event.target.value);
        break;
      default:
        if (Number.isInteger(parseFloat(event.target.value))) {
          this.inputDisplay(event.target.value);
        }
    }
    updateDisplay(this.displayValue);
  }

  handleOperator(nextOperator) {
    const inputValue = parseFloat(this.displayValue);

    if (this.operator && this.waitingForSecondOperand) {
      this.operator = nextOperator;
      return;
    }

    if (this.firstOperand === null && !isNaN(inputValue)) {
      this.firstOperand = inputValue;
    } else if (this.operator) {
      const result = this.calculation(this.firstOperand, inputValue, this.operator)
      this.displayValue = `${parseFloat(result.toFixed(7))}`;
      this.firstOperand = result;
    }

    this.waitingForSecondOperand = true;
    this.operator = nextOperator;
  }

  handlerFn(fn) {
    const currentInput = parseFloat(this.displayValue);
    let result;

    switch (fn) {
      case 'П':
        result = currentInput === 0 ? this.pi() : currentInput * this.pi();
        break;
      case '%':
        result = currentInput / 100;
        break;
      case '+/-':
        result = currentInput * -1;
        break;
      case 'x!':
        result = this.factorial(currentInput);
        break;
      case 'sin':
        result = this.sin(currentInput);
        break;
      case 'cos':
        result = this.cos(currentInput);
        break;
      case 'tan':
        result = this.tan(currentInput);
        break;
      case 'log':
        result = this.log(currentInput);
        break;
      case 'x2':
        result = this.powTwo(currentInput);
        break;
      case 'x3':
        result = this.cube(currentInput);
        break;
      case 'ex':
        result = this.constantToPower(currentInput);
        break;
      case '10x':
        result = this.tenToPower(currentInput);
        break;
      case 'e':
        result = this.constant();
        break;
      default:
        result = 0;
    }

    this.displayValue = `${parseFloat(result.toFixed(10))}`;

    if (this.waitingForSecondOperand) {
      this.waitingForSecondOperand = false;
    }
  }

  inputDisplay(digit) {

    if (this.waitingForSecondOperand === true) {
      this.displayValue = digit;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;
    }
  }

  inputDecimal(dot) {
    if (this.waitingForSecondOperand === true) {
      this.displayValue = '0';
      this.waitingForSecondOperand = false;
      return;
    }
    if (!this.displayValue.includes(dot)) {
      this.displayValue = this.displayValue + dot;
    }
  }

  handlerMemory(member){
    let currentInput = parseFloat(this.displayValue);

    switch(member){
    case 'mc':
      this.member = 0;
      console.log(this.member)
      break;
    case 'm+':
      this.member = this.member + currentInput;
      console.log(this.member)
      break;
    case 'm-':
      this.member = this.member - currentInput;
      console.log(this.member)
      break;
    case 'mr':
      this.displayValue = String(this.member);
      console.log(this.member)
      break;
      default:
        this.member = 0;
    }
  }

  factorial(a) {
    if (!Number.isInteger(a) || a < 0) {
      alert('Factorial is only defined for positive integers');
      return a;
    }
    if (a === 0 || a === 1) return 1;

    for (let i = a - 1; i >= 1; i--) {
      a = a * i;
    }
    return a;
  }

  sin(a) {
    return Math.sin(a * (this.pi() / 180));
  }

  cos(a) {
    return Math.cos(a * (this.pi() / 180));
  }

  tan(a) {
    return Math.tan(a * (this.pi() / 180));
  }

  log(a) {
    return Math.log10(a);
  }

  powTwo(a: number): number {
    return Math.pow(a, 2);
  }

  cube(a): number {
    return Math.pow(a, 3);
  }

  pow(a: number, b: number): number{
    return Math.pow(a, b);
  }

  constant(): number {
    return Math.E;
  }

  constantToPower(a): number {
    return Math.pow(Math.E, a);
  }

  tenToPower(a): number {
    return Math.pow(10, a);
  }

  division(a: number, b: number): number {
    return a / b;
  }

  multiplication(a: number, b: number): number {
    return a * b;
  }

  subtraction(a: number, b: number): number {
    return a - b;
  }

  sum(a: number, b: number): number {
    return a + b;
  }

  pi(): number {
    return Math.PI;
  }
}

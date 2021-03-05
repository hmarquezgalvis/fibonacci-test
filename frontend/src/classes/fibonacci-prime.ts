import { IFibonacciByIndex } from "../entities/fibonacci.interface";
import { Numeric } from "../utils/numeric";

export class FibonacciNextPrime {

  private fibonacci: IFibonacciByIndex;

  constructor(fibonacci: IFibonacciByIndex) {
    this.fibonacci = fibonacci;
  }

  public execute(value: number): number {
    let r = 0;
    let index = 1;
    while (true) {
      var fib = this.fibonacci.execute(index);
      if (fib > value && Numeric.isPrime(fib)) {
        r = fib;
        break;
      }
      index++;
    }
    return r;
  }

}
import { IFibonacciByIndex } from "../entities/fibonacci.interface";

export class FibonacciByIndex implements IFibonacciByIndex {

  public execute(index: number): number {
    let a = 1, b = 0, temp;

    while (index >= 0) {
      temp = a;
      a = a + b;
      b = temp;
      index--;
    }
    return b;
  }
}
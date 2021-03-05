import { IFibonacciByIndex } from "../entities/fibonacci.interface";

export class FibonacciByIndexRecursiveSimple implements IFibonacciByIndex {

  public execute(index: number, a: number = 1, b: number = 0): number {
    if (index > 0)
      return this.execute(index - 1, a + b, a);
    return a;
  }
}
import { IFibonacciByIndex } from "../entities/fibonacci.interface";

export class FibonacciByIndexRecursive implements IFibonacciByIndex {

  public execute(index: number): number {
    if (index <= 1) return 1;
    return this.execute(index - 1) + this.execute(index - 2);
  }

}
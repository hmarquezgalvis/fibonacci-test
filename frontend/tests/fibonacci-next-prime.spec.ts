import { describe, expect, it } from "@jest/globals";
import { FibonacciByIndex } from "../src/classes/fibonacci-by-index-while";
import { FibonacciNextPrime } from "../src/classes/fibonacci-prime";
import { FibonacciByIndexRecursive } from "../src/classes/fibonacci-by-index-recursive";
import { IFibonacciByIndex } from "../src/entities/fibonacci.interface";
import { FibonacciByIndexRecursiveSimple } from "../src/classes/fibonacci-by-index-recursive-simple";

function check(fibonacci: FibonacciNextPrime) {
  it('check next Prime of 20', function() {
    const result = fibonacci.execute(20);
    expect(result).toBe(89);
  });

  it('check next Prime of 10', function() {
    const result = fibonacci.execute(10);
    expect(result).toBe(13);
  });

  it('check next Prime of 133', function() {
    const result = fibonacci.execute(133);
    expect(result).toBe(233);
  });

  it('check next Prime of 1000000000', function() {
    const result = fibonacci.execute(1000000);
    expect(result).toBe(433494437);
  });
}

describe('[Performance] next prime with Fibonacci (while)', function() {

  const fibonacci = new FibonacciNextPrime(new FibonacciByIndex());
  check(fibonacci);

});

describe('[Performance] next prime with Fibonacci (recursive slow)', function() {

  const fibonacci = new FibonacciNextPrime(new FibonacciByIndexRecursive());
  check(fibonacci);

});

describe('[Performance] next prime with Fibonacci (recursive fast) - [Best Solution]', function() {

  const fibonacci = new FibonacciNextPrime(new FibonacciByIndexRecursiveSimple());
  check(fibonacci);

});
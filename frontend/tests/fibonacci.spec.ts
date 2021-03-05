import { describe, expect, it } from "@jest/globals";
import { FibonacciByIndex } from "../src/classes/fibonacci-by-index-while";
import { FibonacciByIndexRecursive } from "../src/classes/fibonacci-by-index-recursive";
import { FibonacciByIndexRecursiveSimple } from "../src/classes/fibonacci-by-index-recursive-simple";
import { IFibonacciByIndex } from "../src/entities/fibonacci.interface";

function check(fibonacci: IFibonacciByIndex): void {
  it('check for index 0', function() {
    const result = fibonacci.execute(0);
    expect(result).toBe(1);
  });
  it('check for index 1', function() {
    const result = fibonacci.execute(1);
    expect(result).toBe(1);
  });
  it('check for index 2', function() {
    const result = fibonacci.execute(2);
    expect(result).toBe(2);
  });
  it('check for index 3', function() {
    const result = fibonacci.execute(3);
    expect(result).toBe(3);
  });
  it('check for index 4', function() {
    const result = fibonacci.execute(4);
    expect(result).toBe(5);
  });
  it('check for index 5', function() {
    const result = fibonacci.execute(5);
    expect(result).toBe(8);
  });
  it('check for index 6', function() {
    const result = fibonacci.execute(6);
    expect(result).toBe(13);
  });
  it('check for index 7', function() {
    const result = fibonacci.execute(7);
    expect(result).toBe(21);
  });
  it('check for index 8', function() {
    const result = fibonacci.execute(8);
    expect(result).toBe(34);
  });
  it('check for index 9', function() {
    const result = fibonacci.execute(9);
    expect(result).toBe(55);
  });
  it('check for index 10', function() {
    const result = fibonacci.execute(10);
    expect(result).toBe(89);
  });
  it('check for index 13', function() {
    const result = fibonacci.execute(13);
    expect(result).toBe(377);
  });
}

describe('fibonacci (while)', function() {

  const fibonacci = new FibonacciByIndex();
  check(fibonacci);

});

describe('fibonacci (recursive)', function() {

  const fibonacci = new FibonacciByIndexRecursive();
  check(fibonacci);

});

describe('fibonacci (recursive simple)', function() {

  const fibonacci = new FibonacciByIndexRecursiveSimple();
  check(fibonacci);

});
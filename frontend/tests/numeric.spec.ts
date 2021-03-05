import { describe, expect, it } from "@jest/globals";
import { Numeric } from "../src/utils/numeric";

describe('numeric util', function() {
  it('check that 1 is NOT prime', function() {
    const result = Numeric.isPrime(1);
    expect(result).toBe(false);
  });
  it('check that 2 IS prime', function() {
    const result = Numeric.isPrime(2);
    expect(result).toBe(true);
  });
  it('check that 3 IS prime', function() {
    const result = Numeric.isPrime(3);
    expect(result).toBe(true);
  });
  it('check that 4 is NOT prime', function() {
    const result = Numeric.isPrime(4);
    expect(result).toBe(false);
  });
  it('check that 5 IS prime', function() {
    const result = Numeric.isPrime(5);
    expect(result).toBe(true);
  });
  it('check that 97 IS prime', function() {
    const result = Numeric.isPrime(97);
    expect(result).toBe(true);
  });
});
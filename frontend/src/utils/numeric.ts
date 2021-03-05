export class Numeric {
  
  public static isPrime(num: number): boolean {
    for(var i = 2; i < num; i++)
      if  (num % i === 0) return false;
    return num > 1;
  }

}
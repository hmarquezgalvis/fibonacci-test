import { FibonacciByIndex } from './classes/fibonacci-by-index-while';
import { FibonacciNextPrime } from './classes/fibonacci-prime';
import { FibonacciByIndexRecursive } from './classes/fibonacci-by-index-recursive';
import { Logger } from './utils/logger';
import { FibonacciByIndexRecursiveSimple } from './classes/fibonacci-by-index-recursive-simple';

class Solution {
    private logger: Logger;
    private fibonacci: FibonacciNextPrime;

    constructor(
        fibonacci: FibonacciNextPrime,
        logger: Logger,
    ) {
        this.fibonacci = fibonacci;
        this.logger = logger;
    }

    public execute(value: number): void {
        // this.logger.begin();
        const nextPrime = this.fibonacci.execute(value);
        this.logger.write(`next prime of ${value} => ${nextPrime}`);
        // this.logger.end();
    }
}

const logger = new Logger();
const number = 20;

// logger.write('\nFibonacci - While');
// new Solution(
//     new FibonacciNextPrime(new FibonacciByIndex()), 
//     logger
// ).execute(number);

logger.write('\nFibonacci - Recursive (Fast) - Best Solution');
new Solution(
    new FibonacciNextPrime(new FibonacciByIndexRecursiveSimple()), 
    logger
).execute(number);

// logger.write('\nFibonacci - Recursive (Slow)');
// new Solution(
//     new FibonacciNextPrime(new FibonacciByIndexRecursive()), 
//     logger
// ).execute(number);
export class Logger {
  private time: number = 0;

  private resetTime(): void {
    this.time = new Date().getTime();
  }

  public begin(): void {
    this.resetTime();
    console.log('------------------------------');
    console.log(`${this.time} [Begin]`);
  }

  public end(): void {
    const prev = this.time;
    this.resetTime();
    const diff = this.time - prev;
    console.log(`${this.time} [End] | ${diff} [diff]`);
    console.log('------------------------------');
    console.log('');
  }

  public write(text: string): void {
    console.log(text);
  }
}
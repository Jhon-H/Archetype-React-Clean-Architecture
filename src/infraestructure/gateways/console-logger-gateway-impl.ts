import { Logger, LogLevel } from '@/domain/gateways/logger-gateway';

export class ConsoleLogger implements Logger {
  log(message: string, level: LogLevel): void {
    console.log(`[${level}] ${message}`);
  }

  info(message: string): void {
    this.log(message, LogLevel.INFO);
  }

  warn(message: string): void {
    this.log(message, LogLevel.WARN);
  }

  error(message: string): void {
    this.log(message, LogLevel.ERROR);
  }

  debug(message: string): void {
    this.log(message, LogLevel.DEBUG);
  }
}

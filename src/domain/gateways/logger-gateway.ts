export enum LogLevel {
  INFO,
  WARN,
  ERROR,
  DEBUG,
}

export interface Logger {
  log(message: string, level: LogLevel): void;
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  debug(message: string): void;
}

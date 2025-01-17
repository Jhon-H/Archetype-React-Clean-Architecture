import {
  BUSSINESS_ERROR_CODES,
  ERROR_CODES,
  INFRAESTRUCTURE_ERROR_CODES,
  UNKNOW_ERROR_CODES,
} from './error-codes';

enum ErrorType {
  BUSSINESS,
  INFRAESTRUCTURE,
  API,
  UNKNOW,
}

export class BaseError extends Error {
  constructor(
    public type: ErrorType,
    public code: ERROR_CODES,
    public message: string,
    public details?: string
  ) {
    super(`CODE: ${code} - MESSAGE: ${message}`);
    this.name = this.constructor.name;
  }
}

export class InfrastructureError extends BaseError {
  constructor(code: INFRAESTRUCTURE_ERROR_CODES, message: string, details?: string) {
    super(ErrorType.INFRAESTRUCTURE, code, message, details);
  }
}

export class BusinessError extends BaseError {
  constructor(code: BUSSINESS_ERROR_CODES, message: string, details?: string) {
    super(ErrorType.BUSSINESS, code, message, details);
  }
}

export class UnknownError extends BaseError {
  constructor(code: UNKNOW_ERROR_CODES, message: string) {
    super(ErrorType.UNKNOW, code, message);
  }
}

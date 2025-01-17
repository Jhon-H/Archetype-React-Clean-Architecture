import { HttpResponse } from '@/domain/adapters/https-adapter';
import { INFRAESTRUCTURE_ERROR_CODES } from '@/shared/errors/error-codes';
import { InfrastructureError } from '@/shared/errors/errors-base';

export class InfraErrorHandler {
  static handle(response: HttpResponse<unknown>): void {
    if (!response) {
      throw new InfrastructureError(
        INFRAESTRUCTURE_ERROR_CODES.NETWORK_ERROR,
        'Network error occurred'
      );
    }

    switch (response.code) {
      case 500:
        throw new InfrastructureError(
          INFRAESTRUCTURE_ERROR_CODES.API_ERROR,
          'Internal server error'
        );
      case 408:
        throw new InfrastructureError(INFRAESTRUCTURE_ERROR_CODES.TIMEOUT, 'Request timeout');
      case 404:
        throw new InfrastructureError(INFRAESTRUCTURE_ERROR_CODES.API_ERROR, 'Resource not found');
      default:
        if (response.code >= 400) {
          throw new InfrastructureError(
            INFRAESTRUCTURE_ERROR_CODES.API_ERROR,
            `Unexpected API error: ${response.code}`
          );
        }
    }
  }
}

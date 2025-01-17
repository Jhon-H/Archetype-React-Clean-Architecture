import { HttpAdapter } from '@/domain/adapters/https-adapter';
import { User } from '@/domain/entities/user';
import { UserGateway } from '@/domain/gateways/user-gateway';
import { UserMapper } from '@/infraestructure/mappers/user-mapper';
import { UserBackendResponse } from '@/infraestructure/models/user-backend-response';
import { InfraErrorHandler } from '@/shared/errors/infra-errors-handler';

export class UserGatewayImpl implements UserGateway {
  constructor(private readonly http: HttpAdapter) {}

  async getUserById(userId: string): Promise<User> {
    const response = await this.http.get<UserBackendResponse>(`/users/${userId}`);

    InfraErrorHandler.handle(response);

    return UserMapper.userBackendResposneToEntity(response.data);
  }
}

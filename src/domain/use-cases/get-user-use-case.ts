import { User } from '@/domain/entities/user';
import { UserGateway } from '@/domain/gateways/user-gateway';

export class GetUserUseCase {
  constructor(private readonly userGateway: UserGateway) {}

  async execute(userId: string): Promise<User> {
    // TODO: valiar bussiness error
    return await this.userGateway.getUserById(userId);
  }
}

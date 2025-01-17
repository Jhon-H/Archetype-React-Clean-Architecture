import { User } from '@/domain/entities/user';

export interface UserGateway {
  getUserById(userId: string): Promise<User>;
}

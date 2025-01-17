import { User } from '@/domain/entities/user';
import { UserBackendResponse } from '@/infraestructure/models/user-backend-response';

export class UserMapper {
  static userBackendResposneToEntity(userBackedResponse: UserBackendResponse): User {
    return new User(
      userBackedResponse.user_id,
      userBackedResponse.full_name,
      userBackedResponse.age
    );
  }
}

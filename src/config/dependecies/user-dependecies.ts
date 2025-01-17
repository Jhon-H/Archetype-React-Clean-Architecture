import { GetUserUseCase } from '@/domain/use-cases/get-user-use-case';
import { UserGatewayImpl } from '@/infraestructure/gateways/user-gateway-impl';
import { createHttpAdapter } from './http-dependencies';

export const createUserGateway = () => {
  return new UserGatewayImpl(createHttpAdapter());
};

export const createGetUserUseCase = (userGateway: UserGatewayImpl) => {
  return new GetUserUseCase(userGateway);
};

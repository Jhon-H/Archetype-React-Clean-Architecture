import { create } from 'zustand';
import { createGetUserUseCase, createUserGateway } from '@/config/dependecies/user-dependecies';

export const useUserGatewayStore = create(() => ({
  userGateway: createUserGateway(),
}));

export const useGetUserUseCaseStore = create(() => ({
  getUserUseCase: createGetUserUseCase(useUserGatewayStore().userGateway),
}));

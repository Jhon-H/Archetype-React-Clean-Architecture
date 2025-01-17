import { Envs } from '@/config/environment/envs';
import { AxiosAdapter } from '@/infraestructure/adapters/axios-adapter';

export const createHttpAdapter = () => new AxiosAdapter(Envs.PUBLIC_ENV_BASE_URL);

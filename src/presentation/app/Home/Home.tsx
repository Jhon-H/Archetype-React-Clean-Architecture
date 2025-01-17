import { Envs } from '@/config/environment/envs';
import { useLoggerGatewayStore } from '@/presentation/store/infraestructure/logger-gateway-store';

const Home = () => {
  const logger = useLoggerGatewayStore(state => state.logger);

  logger.info('Mostrando información de nivel INFO por quien resuelva el gateway');

  return (
    <div>
      <b>
        PUBLIC_ENV_ENVIRONMENT: <mark>{Envs.PUBLIC_ENV_ENVIRONMENT}</mark>
      </b>
    </div>
  );
};
export default Home;

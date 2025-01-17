import { create } from 'zustand';
import { Logger } from '@/domain/gateways/logger-gateway';
import { ConsoleLogger } from '@/infraestructure/gateways/console-logger-gateway-impl';

interface LoggerGatewayStore {
  logger: Logger;
  setLogger: (logger: Logger) => void;
}

export const useLoggerGatewayStore = create<LoggerGatewayStore>(set => ({
  logger: new ConsoleLogger(),
  setLogger: (logger: Logger) => set(() => ({ logger })),
}));

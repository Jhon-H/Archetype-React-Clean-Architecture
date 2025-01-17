export class Envs {
  static readonly PUBLIC_ENV_ENVIRONMENT = Envs.getEnv('PUBLIC_ENV_ENVIRONMENT');
  static readonly PUBLIC_ENV_BASE_URL = Envs.getEnv('PUBLIC_ENV_BASE_URL');

  static getEnv(envName: string, defaultValue?: string): string {
    const envVal = import.meta.env[envName];

    if (envVal === undefined || envVal.length === 0) {
      if (defaultValue !== undefined) return defaultValue;

      throw new Error(
        `Variable de entorno '${envName}' no está definida, está vacía o no se puede cargar en el cliente`
      );
    }

    return envVal;
  }
}

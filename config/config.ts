import * as dotenv from 'dotenv';
dotenv.config();

interface Config {
  env: string;
  isProd: boolean;
  port: number;
  dbUrl?: string; // La URL de la base de datos es opcional
  apiKey?: string;
  //jwtSecret: string // La clave de la API es opcional
  //emailSecret: string
  //emailRecobery:string
  //jwtSecretRecovery:string
}

const config: Config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: parseInt(process.env.PORT || '3000', 10), // Parsear el puerto a un número entero
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  //jwtSecret: process.env.JWT_SECRET || '',
  //emailSecret: process.env.EMAIL_SECRET || '',
  //emailRecobery: process.env.EMAIL_RECOBERY || '',
  //jwtSecretRecovery:process.env.JWT_SECRET_RECOVERY || '',
};

export { config };
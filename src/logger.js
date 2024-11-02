import { createLogger, format, transports } from 'winston';
import dotenv from 'dotenv';

dotenv.config();
const { combine, timestamp, printf, colorize } = format;
const env = process.env.APP_ENV || 'development';

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
  level: env === 'development' ? 'debug' : 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    colorize(),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'app.log' }),
  ],
});

export default logger;

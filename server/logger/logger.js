import { format, createLogger, transports } from "winston";

const logger = createLogger({
  level: "error",
  format: format.combine(
    format.errors({ stack: true }),
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.splat(),
    format.json(),
    format.prettyPrint()
  ),
  transports: [
    new transports.File({
      filename: "error.log",
    }),
  ],
});

export default logger;

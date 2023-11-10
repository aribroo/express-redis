import { ResponseError } from '../errors/response-error.js';

export const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ResponseError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'Internal Server Error!' });
  }
};

import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { promisify } from 'util';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  // const [bearer, token] = authHeader.split(' ');
  const [, token] = authHeader.split(' ');

  try {
    const decodedAsync = await promisify(jwt.verify);
    const decoded = await decodedAsync(token, process.env.JWT_SECRET_TOKEN);

    req.userId = decoded.id;

    return next();
  } catch (e) {
    return res.status.json({ error: 'Token Inválido' });
  }
};

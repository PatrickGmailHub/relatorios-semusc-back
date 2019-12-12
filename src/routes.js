import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AdminController from './app/controllers/AdminController';

import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import RelatorioController from './app/controllers/RelatorioController';

const routes = new Router();
const upload = multer(multerConfig);

// routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.getId);
routes.put('/users', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/relatorios', RelatorioController.store);
routes.get('/relatorios', RelatorioController.index);

routes.get('/admins', AdminController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;

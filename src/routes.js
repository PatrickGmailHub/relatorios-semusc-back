import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AdminController from './app/controllers/AdminController';

import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import RelatorioController from './app/controllers/RelatorioController';
import RelatorioSvController from './app/controllers/RelatorioSvController';

const routes = new Router();
const upload = multer(multerConfig);

// routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.getId);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/relatorios', RelatorioController.store);
routes.get('/relatorios', RelatorioController.index);
routes.get('/relatorios-user-id/', RelatorioController.indexUserId);
routes.get('/relatorios/:id', RelatorioController.getById);
routes.put('/relatorios/:id', RelatorioController.update);
routes.delete('/relatorios/:id', RelatorioController.delete);

routes.post('/relatorios-sv', RelatorioSvController.store);
routes.get('/relatorios-sv', RelatorioSvController.index);
routes.get('/relatorios-sv-user-id/', RelatorioSvController.indexUserId);
routes.get('/relatorios-sv/:id', RelatorioSvController.getById);
routes.put('/relatorios-sv/:id', RelatorioSvController.update);
routes.delete('/relatorios-sv/:id', RelatorioSvController.delete);

routes.get('/admins', AdminController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;

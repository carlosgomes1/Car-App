import { Router } from 'express';

const routes = Router();

import UserController from './controllers/UserController';
import CarController from './controllers/CarController';
import SessionController from './controllers/SessionController';

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);

routes.get('/cars', CarController.index);
routes.post('/cars', CarController.create);
routes.get('/cars/:id', CarController.show);
routes.delete('/cars/:id', CarController.delete);

routes.get('/userCar/:id', CarController.indexCarsOfUser);

routes.post('/session', SessionController.create);

export default routes;

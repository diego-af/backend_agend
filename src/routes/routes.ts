import {Router} from 'express';
import {CreateClientController} from '../controollers/ClientControllers/CreateControllerClient';
import {AgendController} from '../controollers/agendController/AgendController';
import {CreateUserController} from '../controollers/userController/UserController';
import {GetClientsControllers} from '../controollers/ClientControllers/GetClientsControllers';
import {LoginController} from '../controollers/Login/LoginController';
import {GetUsersControllers} from '../controollers/userController/GetUserController';
import {AuthService} from '../controollers/middlewares/AuthService';
import {DeleteClientController} from '../controollers/ClientControllers/DeleteClientController';
import {GetUserControllerById} from '../controollers/userController/GetUserControllerById';
import {UpdateControllerClient} from '../controollers/ClientControllers/UpdateControllerClient';
import {GetAgendController} from '../controollers/agendController/GetAgendController';
import {DeleteAgendController} from '../controollers/agendController/DeleteControllerAgend';
import {UpdateAgendController} from '../controollers/agendController/UpdateControllerAgend';
import {UpdateUserController} from '../controollers/userController/UpdateuserController';
import {DeleteUserController} from '../controollers/userController/DeleteUserController';

export const router = Router();

//clients
router.post('/clients', CreateClientController);
router.get('/clients', AuthService, GetClientsControllers);
router.delete('/clients/:id', DeleteClientController);
router.patch('/clients/:id', UpdateControllerClient);

//users
router.get('/users', GetUsersControllers);
router.post('/users', CreateUserController);
router.delete('/users/:id', DeleteUserController);
router.patch('/users/:id', UpdateUserController);
router.get('/me', AuthService, GetUserControllerById);

//agend
router.post('/agend', AgendController);
router.get('/agend', GetAgendController);
router.delete('/agend/:id', DeleteAgendController);
router.patch('/agend/:id', UpdateAgendController);

//login
router.post('/session', LoginController);

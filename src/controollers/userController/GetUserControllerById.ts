import {request} from 'http';
import {prisma} from '../../database';
import {GetClientsService} from '../../services/Clients/GetClientsService';
import {Request, Response} from 'express';
import {GetUserserviceById} from '../../services/users/GetUserServiceById';

const GetUserControllerById = async (req: Request, res: Response) => {
	const user_id = req.user_id;

	const clients = await GetUserserviceById({user_id});

	res.status(201).json({
		sucess: true,
		data: clients
	});
};

export {GetUserControllerById};

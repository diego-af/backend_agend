import {prisma} from '../../database';
import {GetClientsService} from '../../services/Clients/GetClientsService';
import {Request, Response} from 'express';

const GetClientsControllers = async (req: Request, res: Response) => {
	const clients = await GetClientsService();

	res.status(201).json({
		sucess: true,
		data: clients
	});
};

export {GetClientsControllers};

import {Request, Response} from 'express';
import {CreateServiceClient} from '../../services/Clients/CreatServiceClient';

const CreateClientController = async (req: Request, res: Response) => {
	const {name, email, telefone, role} = req.body;

	const clients = await CreateServiceClient({name, email, telefone, role});

	res.status(201).json(clients);
};

export {CreateClientController};

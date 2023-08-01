import {Request, Response} from 'express';
import {DeletClientService} from '../../services/Clients/DeleteClientService';
import {UpdateServiceClient} from '../../services/Clients/UpdateServiceClient';

const UpdateControllerClient = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const {name, email, telefone, role} = req.body;

	const updateClient = await UpdateServiceClient({
		id,
		name,
		email,
		telefone,
		role
	});

	res.status(201).json({
		sucess: true,
		data: updateClient
	});
};

export {UpdateControllerClient};

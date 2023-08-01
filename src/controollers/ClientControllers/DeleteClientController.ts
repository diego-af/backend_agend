import {Request, Response} from 'express';
import {DeletClientService} from '../../services/Clients/DeleteClientService';

const DeleteClientController = async (req: Request, res: Response) => {
	const {id} = req.params;

	const deleteClient = await DeletClientService({id});

	res.status(201).json({
		sucess: true,
		data: deleteClient
	});
};

export {DeleteClientController};

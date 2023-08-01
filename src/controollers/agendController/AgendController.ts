import {Request, Response} from 'express';
import {CreateAgendService} from '../../services/agends/createAgendService';

const AgendController = async (req: Request, res: Response) => {
	const {service, date, status, user_id, client_id} = req.body;

	const agend = await CreateAgendService({
		service,
		date,
		status,
		user_id,
		client_id
	});

	res.status(201).json(agend);
};

export {AgendController};

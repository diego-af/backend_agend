import {Request, Response} from 'express';
import {UpdateAgendService} from '../../services/agends/UpdateAgendService';

const UpdateAgendController = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const {service, date, status, user_id, client_id} = req.body;

	const updateAgend = await UpdateAgendService({
		id,
		service,
		date,
		status,
		user_id,
		client_id
	});

	res.status(201).json({
		sucess: true,
		data: updateAgend
	});
};

export {UpdateAgendController};

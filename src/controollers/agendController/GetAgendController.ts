import {Request, Response} from 'express';
import {GetAgendService} from '../../services/agends/GetAgendService';

const GetAgendController = async (req: Request, res: Response) => {
	const agends = await GetAgendService();

	res.status(201).json({
		sucess: true,
		data: agends
	});
};

export {GetAgendController};

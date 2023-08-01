import {Request, Response} from 'express';
import {DeletClientService} from '../../services/Clients/DeleteClientService';
import {DeletAgendService} from '../../services/agends/DeleteAgendService';

const DeleteAgendController = async (req: Request, res: Response) => {
	const id = Number(req.params.id);

	const deleteAgend = await DeletAgendService({id});

	res.status(201).json({
		sucess: true
	});
};

export {DeleteAgendController};

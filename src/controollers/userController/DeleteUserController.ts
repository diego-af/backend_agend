import {Request, Response} from 'express';

import {DeletUserService} from '../../services/users/DeleteUserService';

const DeleteUserController = async (req: Request, res: Response) => {
	const id = Number(req.params.id);

	const deleteUser = await DeletUserService({id});

	res.status(201).json({
		sucess: true
	});
};

export {DeleteUserController};

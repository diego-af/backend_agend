import {Request, Response} from 'express';

import {CreateUserService} from '../../services/users/CreateUserService';
import {UpdateUserService} from '../../services/users/UpdateUserService';

const UpdateUserController = async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const {name, email, password, role} = req.body;

	const users = await UpdateUserService({id, name, email, password, role});

	if (!users) {
		return res.status(400).json({message: 'Not possible create user'});
	}

	res.status(201).json(users);
};

export {UpdateUserController};

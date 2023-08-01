import {Request, Response} from 'express';

import {CreateUserService} from '../../services/users/CreateUserService';

const CreateUserController = async (req: Request, res: Response) => {
	const {name, email, password, role} = req.body;

	const users = await CreateUserService({name, email, password, role});

	if (!users) {
		return res.status(400).json({message: 'Not possible create user'});
	}

	res.status(201).json(users);
};

export {CreateUserController};
